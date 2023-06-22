import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { ProvideAuth } from '../../../AuthProviders/AuthProvider';

const CheckOut = ({ price }) => {
  const { user } = useContext(ProvideAuth);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [stripeErr, setStripeErr] = useState(null);

  useEffect(() => {
    // Fetch client secret from server
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log('Error:', error);
      setStripeErr(error.message);
      return;
    }

    console.log('Payment method:', paymentMethod);
    console.log('payment method okay');

    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'Anonymous user',
            name: user?.displayName || 'Anonymous',
          },
        },
      });

      if (error) {
        console.log('Error:', error);
        return;
      }

      console.log('Payment intent:', paymentIntent);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='w-2/3 m-8'>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-secondary m-5' type='submit' disabled={!stripe || clientSecret}>
          Pay
        </button>
      </form>
      {stripeErr ? <p className='text-red-600 m-2'>{stripeErr}</p> : ''}
    </>
  );
};

export default CheckOut;
