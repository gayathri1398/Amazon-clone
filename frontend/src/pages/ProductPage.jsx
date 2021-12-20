import React from 'react';
import Rating from 'react-rating-stars-component'

const ProductPage=()=>{
    return<>
       <div className='mt-8 w-full h-full flex flex-start justify-around'>
           <div className=' w-1/3 h-screen ' >
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLAMgM3AoDdgJe289iPT2crK9qyjoauD73A&usqp=CAU" 
               alt="productname" 
               classname="w-full h-full object-fit"/>
           </div>
           <div>
               <h1>Lacoste Slim shirt</h1>
               <Rating/>
               <span>1 reviews</span>
               <p>Price:$120</p>
               <p>Description:This is a great product...</p>
           </div>
           <div className='w-48 border-2 h-56 p-3 rounded-md'>
               <p>Seller</p>
               <h2>Puma</h2>
               <Rating/>
               <span>120 reviews</span>
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
               
               <p classname='border-2 border-black text-center'>Add to Cart</p>
             
               
           </div>
       </div>
    </>
}
export default ProductPage;