import React from 'react';
import ReactStars from "react-rating-stars-component";
import image from '../images/images.jpg';


const ProductCard = () => {
      const ratingChanged=(newRating)=>{
        console.log(newRating);
      };

    return (
        <div className='w-60 border-2 border-grey-300 rounded-md mb-8'>
           <div className='w-full h-80 object-cover'>
           <img src={image}
             alt="product" 
             className='w-full h-full rounded-t-md' />
           </div>
            <div className='p-2'>
            <h2 className='mt-2 font-light text-xl'>Nike shirts</h2>
             <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
             <p className='font-bold'>$120</p>
            </div>
        </div>
    )
}

export default ProductCard
