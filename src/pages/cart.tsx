import React from 'react';

const cartItems = [];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.15);
const shipingCharge = 200;
const total = subtotal + tax + shipingCharge;

const Cart = () => {
  return (
    <div className='cart'>

      <main>

        <aside>
          <p>Subtotal: {subtotal}</p>
          <p>Tax: {tax}</p>
          <p>Shipping Charge: {shipingCharge}</p>
          <p>Total: {total}</p>
        </aside>

      </main>
      This is the cart page
    </div>
  );
}

export default Cart;