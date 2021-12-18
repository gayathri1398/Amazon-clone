import React from 'react';


//components
import Navbar from '../components/navbar';

const HomeLayout=(props)=>{
    return <>
     <Navbar/>
     {props.children}
    </>
}

export default HomeLayout;