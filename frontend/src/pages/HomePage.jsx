import React from 'react';

//components
import ProductCard from '../components/productcard';
import data from '../data';

const HomePage =()=>{
    return <>
        <div class="m-8 flex justify-between flex-wrap md:m-16">
        {data.products.map((product)=>
        <ProductCard key={product._id} product={product}/>
        )}
        </div>
    </>
}

export default HomePage;