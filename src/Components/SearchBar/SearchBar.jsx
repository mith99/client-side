import React, { useState } from 'react'
import '../SearchBar/SearchBar.scss'
import Star from '../../Assets/starred.svg'
import Context from '../../ContextAPI/Context';
import {useNavigate} from 'react-router-dom'; 



const SearchBar = () => {
    const navigate = useNavigate(); 

    const [query, setQuery] = useState();

    const handleQuery = (e) =>{
        let q = e.target.value.trim();

        setQuery(q)
        console.log(q)
    }

    return (
        <Context.Consumer>
      {(context) => (
        <div className='searchContainer'>
            <div className='page-title'>Products</div>
            <br />
            <div className='search-section'>

                <div className='search-bar-background'>
                    <input className='search-bar'
                     placeholder='Search for Products' 
                     value={query}
                     onChange={(e) =>{
                        handleQuery(e)
                     }}/>

                    <div className='search-btn-postion'>
                        <div className='search-btn'
                        onClick={() => {
                            context.searchProducts(query);
                        }}
                        >
                            Search
                        </div>
                        </div>

                </div>

                <div className='btn-container'>
                    <div className='new-prob-btn'
                    onClick={()=>{
                        navigate('/addProduct')

                    }}

                    >
                        New Product
                    </div>
                    <div className='fav-btn'>
                        <img src={Star} className='star-img'/>
                    </div>

                </div>

            </div>
        </div>
      )}
      </Context.Consumer>
    )
}

export default SearchBar