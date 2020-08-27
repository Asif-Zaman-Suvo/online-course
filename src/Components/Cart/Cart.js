import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);

    const totalPrice=cart.reduce((totalPrice,name)=>totalPrice+name.price,0)
    const updateTotal=totalPrice.toFixed(2);
    return (
        <div>
            <h2>Order Summary</h2>

            <h3>Course Order: {cart.length}</h3>

            <p className='price'><b>Total Course Price: {updateTotal}$</b></p>
            <br/>

            <button onClick={()=>{ alert('Are you sure to purchase??'); }}  id='submit-button'>SUBMIT ORDER</button>

            
            
        </div>
    );
};

export default Cart;

