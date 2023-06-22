import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CheckOut from './CheckOut';
import Mycart from '../../../CustomHook/Mycart';

const stripePromise = loadStripe(import
  .meta.env.VITE_PAYMENT_GATEWAY_PK);
  console.log(stripePromise)
const Payments = () => {
  const [cartData] = Mycart()
  // const biGtotal = cartData.reduce((sum, cart) => sum + cart.price, 0);
  // const total = parseFloat(biGtotal)
  // const price = parseFloat(total.toFixed(2))
const  price = 200

  return (
    <div className='border p-10 shadow-xl bg-purple-50'>
      <div>Make payment with Stripe</div>
      <div className='w-[900px]'>
        <Elements stripe={stripePromise}>
          <CheckOut price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payments;
