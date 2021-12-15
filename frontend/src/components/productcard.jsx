import React from 'react';
import ReactStars from "react-rating-stars-component";
import image from '../images/images.jpg';


const ProductCard = () => {
      const ratingChanged=(newRating)=>{
        console.log(newRating);
      };


    return (
        <div className=''>
            <img src={image} alt="product"  />
             <h2>Nike shirts</h2>
             <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
             <p>$120</p>

        </div>
    )
}

export default ProductCard
