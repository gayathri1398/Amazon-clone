import React from 'react';
import ReactStars from "react-rating-stars-component";
// import image from '../images/images.jpg';



const ProductCard = ({product}) => {
      const ratingChanged=(newRating)=>{
        console.log(newRating);
      };

    return <>
    
        <div className='w-60 border-2 border-grey-300 rounded-md mb-8'>
        <div className='w-full h-80 object-cover'>
        <img src={product.image}
          alt={product.name} 
          className='w-full h-full rounded-t-md' />
        </div>
         <div className='p-2'>
         <h2 className='mt-2 font-light text-xl'>{product.name}</h2>
          <ReactStars
                 count={5}
                 onChange={ratingChanged}
                 size={24}
                 activeColor="#ffd700"
             />
          <p className='font-bold'>{`${product.price}`}</p>
         </div>
     </div>
      
       
    </>
}

export default ProductCard
