import React from 'react';
import {Link} from 'react-router-dom'

// components
import StarRating from './StarRating';

const ProductCard = ({product}) => {
 

    return <>
       <Link to={`/product/${product._id}`}>
        <div className='w-60 border-2 border-grey-300 rounded-md mb-8'>
        <div className='w-full h-80 object-cover overflow-hidden'>
        <img src={product.image}
          alt={product.name} 
          className='w-full h-full rounded-t-md transform hover:scale-110 transition duration-500 ease-out' />
        </div>
         <div className='p-2'>
         <h2 className='mt-2 font-light text-xl'>{product.name}</h2>
           <StarRating rating={product.rating}/>
          <p className='font-bold'>{`Price: $${product.price}`}</p>
         </div>
     </div>
     </Link>
       
 `   </>}

export default ProductCard
