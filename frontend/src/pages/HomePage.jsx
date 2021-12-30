import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'

//components
import ProductCard from '../components/productcard';
// import data from '../data';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';

// actions
import { listProducts } from '../Redux/actions/productAction';

const HomePage =()=>{
    // const[products,setProducts] =useState([]);
    // const[loading,setLoading] =useState(false);
    // const[error,setError] =useState(false);
    
     const dispatch = useDispatch()
     const productList = useSelector(state => state.productList);
     const {loading,error,products} = productList

  // console.log(productList)

    // useEffect(()=>{
    //   const fetchData=async()=>{
    //    try {
    //     setLoading(true);
    //     const {data} = await axios.get('/api/products');
    //     setLoading(false);
    //     setProducts(data);

    //    } catch (err) {
    //      setError(err.message);
    //      setLoading(false);
    //    }
    //   dispatch()
    //   };
    //   fetchData();
       
    // },[])

    // useEffect(()=>{
    //   dispatch(listProducts()).then ((data)=> setProducts(data.payload))
    // },[])

    useEffect(()=>{
      dispatch(listProducts())
    },[])
    
    return <>
    {loading? <Loading/>:
        error? <MessageBox>{error}</MessageBox>:
        <div class="m-8 flex justify-between flex-wrap md:m-16">
        {products?.map((product)=>
        <ProductCard key={product._id} product={product}/>
        )}
        </div>
    }
   
    </>
}

export default HomePage;