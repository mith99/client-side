import Context from "./Context";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



const AppProvider = (props) => {
    const navigate = useNavigate();


    const [allProducts, setAllProducts] = useState()
    const [searchResults, setSearchResults] = useState()
    const [searchLen, setSearchLen] = useState()
    const [searchQuery, setSearchQuery] = useState()
    const [selectedProduct, setSelectedProduct] = useState()

    useEffect(() => {
        getAllProducts();
    },);


    const getAllProducts = () => {

        axios({
            headers: {
                "Access-Control-Allow-Origin": "*",

            },
            method: "get",
            url: 'https://localhost:8089/product/all'
        })
            .then((response) => {
                setAllProducts(response.data)
            })
    }

    const searchProducts = (value) => {

        let query = value;


        axios({
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'

            },
            method: "get",

            url: `https://localhost:8089/product/search/${query}`,
        })
            .then((response) => {
                setSearchLen(response.data.length);
                setSearchQuery(query);
                console.log(searchLen)
                setSearchResults(response.data)
                navigate('/search')

            })
            .catch((err) => {
                console.log(err)
            })
    }


    const addProduct = (sku, name, qty, desc, files) => {


        console.log(files)

        let fileList = []

        for (let i = 0; i < files.length; i++) {
            fileList.push(files[i])
        }

        console.log(fileList)

        let formData = new FormData();

        formData.append("sku", sku);
        formData.append("quantity", qty);
        formData.append("product_name", name);
        formData.append("product_description", desc);
        formData.append("image", fileList);


        axios({
            headers: {
                "Access-Control-Allow-Origin": "*",

            },
            method: "post",

            url: `https://localhost:8089/product/create`,
            data: formData
        })
            .then((response) => {
                console.log(response.data)

                alert('Product Added')
                navigate('/')

            })
            .catch((err) => {
                console.log(err)
            })
    }
    // searchProducts('flow')

    const getProduct = (id) => {
        console.log(id)

        let body = {
            "id": id
        }

        axios({
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            },
            method: "post",
            url: `https://localhost:8089/product/getProduct`,
            data: body
        })
            .then((response) => {
                console.log(response)
                setSelectedProduct(response.data)

                navigate('/editProduct')



            })
            .catch((err) => {
                console.log(err)
            })

    }

    const editProduct = (id,sku, name, qty, desc, files) => {


        let data = {
            "sku": sku,
            "quantity": qty,
            "product_name": name,
            "images": [],
            "product_description": desc
        }


        axios({
            headers: {
                "Access-Control-Allow-Origin": "*",

            },
            method: "put",

            url: `https://localhost:8089/product/edit/${id}`,
            data: data
        })
            .then((response) => {
                console.log(response.data)
                alert('Changes Saved')
                navigate('/')

            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <Context.Provider
            value={{
                allProducts,
                setAllProducts,
                searchResults,
                setSearchResults,
                searchProducts,
                searchLen,
                searchQuery,
                addProduct,
                getProduct,
                selectedProduct,
                setSelectedProduct,
                editProduct
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default AppProvider;
