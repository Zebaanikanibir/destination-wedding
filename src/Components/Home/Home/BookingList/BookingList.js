import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {Button} from 'react-bootstrap'
import './BookingList.css';
const BookingList = () => {


    const deleteBooking = (id) => {



        console.log(id)

        fetch(`http://localhost:5011/delete/${id}`, {
            method: 'DELETE'
            
        })
        .then(res => res.json())
        .then(result => {
           if (result){
            alert('successfully deleted')
           }
    
        })
    
            
        }


    const [bookingList, setBookingList] = useState([])
    console.log('List', bookingList)
    useEffect(() => {
        fetch('https://calm-reaches-86971.herokuapp.com/bookingList')
            .then(res => res.json())
            .then(data => setBookingList(data))

    }, [])
    return (



        <section>

            <div className="row container-fluid containerStyle">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <div>
                        <table className="table">
                            <thead >
                                <tr >
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email ID</th>
                                    <th className="text-secondary" scope="col">Service</th>
                                    <th className="text-secondary" scope="col">Payment ID</th>
                                    <th className="text-secondary" scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {

                                    bookingList.map((list, index) =>

                                        <tr >

                                            <td >{list.name}</td>
                                            <td >{list.email}</td>
                                            <td >{list.service}</td>
                                            <td >{list.paymentId}</td>
                                            <td ><Button onClick={()=>deleteBooking(list._id)}variant="danger">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                                </Button></td>
                                        </tr>



                                    )
                                }


                            </tbody>


                        </table>

                    </div>
                </div>
            </div>
        </section>



    );
};

export default BookingList;