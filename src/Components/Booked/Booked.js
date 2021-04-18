import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import BookedDetails from '../BookedDetails/BookedDetails';
import Sidebar from '../Shared/Sidebar/Sidebar';

const Booked = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [booked, setBooked] = useState([])
    console.log('confirmed', booked)
    useEffect(() => {
        fetch('https://calm-reaches-86971.herokuapp.com/booking?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBooked(data))

    }, [])
    return (
        <section className="row container-fluid">

           <div className="col-md-3">
           <Sidebar></Sidebar>
           </div>

            <div className="col-md-9 row">
                {booked.length ?



                    booked.map(book => <BookedDetails book={book}></BookedDetails>)

                    :
                    <div className="p-5">
                        <h4>No booking</h4>
                    </div>
                }
            </div>

        </section>
    );
};

export default Booked;