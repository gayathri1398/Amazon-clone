import React from 'react';
import { useParams } from 'react-router-dom';

const CartPage=()=>{
    const {_id}= useParams();

    return<>
    <div>
        <h1>CartPage</h1>
        <p>ProductID:{_id} Quantity:{}</p>
    </div>
    
    </>
}

export default CartPage;