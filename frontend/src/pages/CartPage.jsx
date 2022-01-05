import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const CartPage=()=>{
    const {_id}= useParams();
    const {search}=useLocation();
    const qtyInUrl=new URLSearchParams(search).get('qty');
    const qty=qtyInUrl?Number(qtyInUrl):1

    return<>
    <div>
        <h1>CartPage</h1>
        <p>ProductID:{_id} Quantity:{qty}</p>
    </div>
    
    </>
}

export default CartPage;