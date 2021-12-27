import React,{useState,useEffect} from 'react';
import axios from 'axios';

//components
import ProductCard from '../components/productcard';
import data from '../data';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';


const HomePage =()=>{
    const[products,setProducts] =useState([]);
    const[loading,setLoading] =useState(false);
    const[error,setError] =useState(false);

    useEffect(()=>{
      const fetchData=async()=>{
       try {
        setLoading(true);
        const {data} = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);

       } catch (err) {
         setError(err.message);
         setLoading(false);
       }
      
      };
      fetchData();
       
    },[])
    console.log(products);
    return <>
    {loading? <Loading></Loading>:
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