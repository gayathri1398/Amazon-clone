import React from 'react';

//components
import Navbar from '../components/navbar';
import ProductCard from '../components/productcard';

const HomePage =()=>{
    return <>
        <Navbar/>
        <div class="m-8 flex justify-between flex-wrap md:m-16">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
    </>
}

export default HomePage;