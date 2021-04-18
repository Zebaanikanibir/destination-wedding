import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Booking.css';
const Booking = () => {
    const { id } = useParams();
    console.log(id)
    const [booking, setBooking] = useState({})
    const [bookingData, setBookingData] = useState(null)
    useEffect(() => {

        fetch(`http://localhost:5011/booking/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))

    }, [])


    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleBooking = (booking) => {

       setBookingData(booking)
       alert('Please Pay')
    }


const handlePaymentSuccess = paymentId =>{

    console.log('Booked', booking)

    const newBooking = { ...loggedInUser, service:booking.name, info:booking.info, cost:booking.cost, paymentId, orderTime: new Date().toDateString('dd/MM/yyyy') }

    console.log(loggedInUser)
    fetch('https://calm-reaches-86971.herokuapp.com/addBooking', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'

        },
        body: JSON.stringify(newBooking)
    })
        .then(res => res.json())
        .then(data => {

            if (data) {

                alert('Booking confirmed')
            }
        })

    
}

    return (
        <section>
            <div className="container-fluid row containerStyle">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-5 mt-5 booking">
                    <div style={{ width: '30rem' }}>
                        <h5>{loggedInUser.email}</h5>
                        <h5>{loggedInUser.name}</h5>
                        <h6>You will be charged for ${booking.cost}</h6>
                        <h6>{booking.name}</h6>
                        <button id="bBtn"  onClick={()=>handleBooking(booking)}>Booking</button>
                    </div>
                </div>
                <div className="col-md-3 mt-5 booking ml-5">
                    <h2>Pay for me</h2>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </section>
    );
};

export default Booking;