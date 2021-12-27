import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

// component
import StarRating from '../components/StarRating';
import data from '../data';



const ProductPage=({rating, ...props})=>{
  
   const product = data.products.find((product)=>Number(product._id)=== Number(props.match.params._id));
  
    return<>
    
        <Link to ="/" className='text-gray-500 hover:text-indigo-900'>Back to results</Link>
        
          <div className='flex flex-col gap-4 w-full h-full px-4 lg:flex-row mt-8 flex-start justify-around'>
           <div className='w-full md:w-2/3 lg:w-2/5 lg:h-screen' >
               <img src={product.imgprod} 
               alt="productname" 
               classname='w-full h-full'/>
           </div>
           <div className='lg:w-1/3'>
               <h1 className='font-bold text-xl w-'>{product.name}</h1>
              <StarRating rating={product.rating}/>
               <span className='text-indigo-600'>{product.numOfReviews} reviews</span>
               <p>Price:${product.price}</p>
               <p>Description: {product.description}</p>
           
               </div>  
           <div className='w-60 border-2 h-64 p-3 rounded-md'>
               <p>Seller</p>
               <h2 className='text-blue-900 font-bold'>Puma</h2>
               <StarRating />
               <span className='text-indigo-600'>120 reviews</span>
               <div className='flex justify-between'>
                   <p>Price</p>
                   <span>$60</span>
               </div>
               <div className='flex justify-between'>
                   <p>Status</p>
                   {product.countInStock>0? (
                          <span className='text-green-500'>InStock</span> ):
                          <span className='text-red-500'>Unavailable</span>
                   }
                
               </div>
               <div className='flex justify-between'>
                   <p>Qty</p>
                   <span className='border-2 px-3'>1</span>
               </div>
               <p className='border-2 border-gray-300 rounded-sm bg-yellow-300 mt-6 text-center'>Add to Cart</p>
           </div> 
             
       </div>
       
       
    </>
 }
export default ProductPage;