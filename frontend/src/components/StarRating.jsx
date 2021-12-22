import React from 'react';
import {AiOutlineStar,AiFillStar} from 'react-icons/ai';
import {IoMdStarHalf} from 'react-icons/io'

const star=()=>{
  const countInStock= 5;
  for (let i = 0; i < countInStock.length; i++) {
    i += countInStock[i] ;
  }
}
const StarRating = ({rating}) => {
    return (
        <div className='flex text-xl py-2 text-yellow-500'>
            <span>
              {
                  rating >=1?<AiFillStar/>:rating>=0.5?<IoMdStarHalf/> : <AiOutlineStar/>
              }
            </span>
            <span>
              {
                  rating >=2?<AiFillStar/>:rating>=1.5?<IoMdStarHalf/> : <AiOutlineStar/>
              }
            </span>
            <span>
              {
                  rating >=3?<AiFillStar/>:rating>=2.5?<IoMdStarHalf/> : <AiOutlineStar/>
              }
            </span>
            <span>
              {
                  rating >=4?<AiFillStar/>:rating>=3.5?<IoMdStarHalf/> : <AiOutlineStar/>
              }
            </span>
            <span>
              {
                  rating >=5?<AiFillStar/>:rating>=4.5?<IoMdStarHalf/> : <AiOutlineStar/>
              }
            </span>   
        </div>
    )
}

export default StarRating
