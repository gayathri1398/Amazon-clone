import React from 'react';


//components
import Navbar from '../components/navbar';

const HomeLayout=()=>{
    return <>
     <Navbar/>
     {props.children}
    </>
}

export default HomeLayout;