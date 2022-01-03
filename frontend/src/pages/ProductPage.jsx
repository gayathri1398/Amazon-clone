import React,{useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';



// component
import StarRating from '../components/StarRating';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';
import data from '../data';

// actions
import { productDetails } from '../Redux/actions/productAction';

const ProductPage=({rating, ...props})=>{
    const[Qty,setQty] =useState(1);
    const dispatch = useDispatch();
    const history = useHistory();
   const _id = props.match.params._id;

    const specificProduct= useSelector(state => state.specificProduct)
    const{loading,error,specificproduct}=specificProduct;
    
  

    useEffect(() => {
       dispatch(productDetails(_id))
    }, [dispatch,_id])
  
//    const product = data.products.find((product)=>Number(product._id)=== Number(props.match.params._id));
     
    const addToCart=()=>{
        history.push(`/cart/${_id}?qty=${Qty}`)
    }


    return<>
    
        <Link to ="/" className='text-gray-500 hover:text-indigo-900'>Back to results</Link>
        {loading?<Loading/>:
         error?<MessageBox>{error}</MessageBox>:(
            <div className='flex flex-col gap-4 w-full h-full px-4 lg:flex-row mt-8 flex-start justify-around'>
            <div className='w-full md:w-2/3 lg:w-2/5 lg:h-screen' >
                <img src={specificproduct?.imgprod} 
                alt="specificproductname" 
                classname='w-full h-full'/>
            </div>
            <div className='lg:w-1/3'>
                <h1 className='font-bold text-xl w-'>{specificproduct?.name}</h1>
               <StarRating rating={specificproduct?.rating}/>
                <span className='text-indigo-600'>{specificproduct?.numOfReviews} reviews</span>
                <p>Price:${specificproduct?.price}</p>
                <p>Description: {specificproduct?.description}</p>
            
                </div>  
            <div className='w-60 border-2 h-32 p-3 rounded-md'>
               
                <div className='flex justify-between'>
                    <p>Status</p>
                    {specificproduct?.countInStock>0? (
                           <span className='text-green-500'>InStock</span> ):
                           <span className='text-red-500'>Unavailable</span>
                    }
                 
                </div>
               {
                   specificproduct?.countInStock>0 && (<>
                    <div className='flex justify-between'>
                    <p>Qty</p>
                    <select value={Qty} onChange={(e)=> setQty(e.target.value)} className='border-2 px-3'>
                      {
                          [...Array(specificproduct.countInStock).keys()].map((x)=>(
                              <option value={x+1} key={x+1}>{x+1}</option>
                          ))
                      }
                    </select>
                </div>
                
                     <button onClick={addToCart} className='border-2 border-gray-300 rounded-sm bg-yellow-300 mt-6 text-center w-full'>Add to Cart</button></>
                     )}
            </div> 
              
        </div>
         )
         }
         
    </>
 }
export default ProductPage;