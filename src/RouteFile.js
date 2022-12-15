import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppProvider from './ContextAPI/AppProvider'
import Home from './Components/Home/Home'
import Navbar from './Components/NavBar/Navbar'
import SearchBar from './Components/SearchBar/SearchBar'
import Search from './Components/Search/Search'
import AddProduct from './Components/AddProduct/AddProduct'
import EditProduct from './Components/EditProduct/EditProduct'


const RouteFile = () => {
    return (
        <BrowserRouter>
            <AppProvider>
                <Navbar />
                {/* <SearchBar/> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search/>} />
                    <Route path='/addProduct' element={<AddProduct/>} />
                    <Route path='/editProduct' element={<EditProduct/>} />

                </Routes>

            </AppProvider>
        </BrowserRouter>
    )
}

export default RouteFile