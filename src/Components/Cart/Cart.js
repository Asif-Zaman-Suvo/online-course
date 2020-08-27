import React from 'react';
import './Cart.css'
import Button from 'react-bootstrap/Button';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);

    const totalPrice=cart.reduce((totalPrice,name)=>totalPrice+name.price,0)
    const updateTotal=totalPrice.toFixed(2);
    return (
        <div className='Jumbotron'>
            <h2>Order Summary</h2>
            <h3>Course Order: {cart.length}</h3>
            <br/>

            <p className='price'><b>Total Course Price: {updateTotal}$</b></p>
            

            <Button  onClick={()=>{ alert('Are you sure to purchase??'); }} variant="success">SUBMIT ORDER</Button>{' '}

            

            
            
        </div>
    );
};

export default Cart;

