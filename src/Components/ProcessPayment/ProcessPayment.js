import React from 'react';
import { Elements,} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCartForm from './SimpleCartForm';
const stripePromise = loadStripe('pk_test_51IeHPxEvx7LbbJ1uvgZlwKXr1WE5O4zgHcYNpDshz1OgOt3DVPtwx7SduGMLkDDvXAnIduEch5QEJkc4YMlDcAbO00chLPJoJw');
const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCartForm handlePayment={handlePayment}></SimpleCartForm>
        </Elements>
    );
};

export default ProcessPayment;