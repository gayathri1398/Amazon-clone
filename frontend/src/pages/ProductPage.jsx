import React from 'react';
import {Link} from 'react-router-dom'
import Rating from 'react-rating-stars-component'

const ProductPage=()=>{
const ratingChanged=(newRating)=>{
    console.log(newRating)
}

    return<>
        <Link to ="/" className='text-gray-500 hover:text-indigo-900'>Back to results</Link>
       <div className='flex flex-col gap-4 w-full h-full px-4 lg:flex-row mt-8 flex-start justify-around'>
           <div className='w-full md:w-2/3 lg:w-2/5' >
               <img src="https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/primary_fecfd990-3741-4913-9bf4-32f6d816782b.jpeg" 
               alt="productname" 
               classname='w-full h-full'/>
           </div>
           <div className='lg:w-1/3'>
               <h1 className='font-bold text-xl w-'>Lacoste Slim shirt</h1>
               <Rating
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"/>
               <span className='text-indigo-600'>1 reviews</span>
               <p>Price:$120</p>
               <p>Description:This is a great product...</p>
           
               </div>  
           <div className='w-60 border-2 h-64 p-3 rounded-md'>
               <p>Seller</p>
               <h2 className='text-blue-900 font-bold'>Puma</h2>
               <Rating
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"/>
               <span className='text-indigo-600'>120 reviews</span>
               <div className='flex justify-between'>
                   <p>Price</p>
                   <span>$60</span>
               </div>
               <div className='flex justify-between'>
                   <p>Status</p>
                   <span className='text-green-500'>InStock</span> 
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