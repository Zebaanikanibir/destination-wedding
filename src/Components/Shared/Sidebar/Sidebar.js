import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignOutAlt,  faPlus, faFilePdf, faUser } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
     
    useEffect(()=>{



    fetch('https://calm-reaches-86971.herokuapp.com/isAdmin', {

    method:'POST',
    headers:{'content-type':'application/json'},
    body: JSON.stringify({email: loggedInUser.email})

    }).then(res => res.json())
    .then(data => setIsAdmin(data));


    },[])





    return (
       
        <div className="side d-flex flex-column justify-content-between  py-5 px-4">
           
            <ul className="list-unstyled">
            <li>
                    <Link to="/addReview" className="text-white d-flex" >
                    <FontAwesomeIcon icon={faPlus} />
                       <span>Add Review</span>
                    </Link>
                </li>
                 {isAdmin && <div>
                          <li>
                    
                </li>
                <li>
                    <Link to="/addServices" className="text-white d-flex">
                    <FontAwesomeIcon icon={faPlus} />
                        <span>Add Services</span>
                    </Link>
                </li>
        
                <li>
                    <Link to="/bookingList" className="text-white d-flex" >
                    <FontAwesomeIcon icon={faFilePdf} />
                       <span>Manage Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-white d-flex" >
                    <FontAwesomeIcon icon={faUser} />
                       <span>Make Admin</span>
                    </Link>
                    
                </li>
                     </div> }


                    <div>
                    <Link to="/booked" className="text-white d-flex">
                    <FontAwesomeIcon icon={faFilePdf} />
                        <span>Your Booking</span> 
                    </Link>
                    </div>



                
                <div>
            <Link to="/" className="text-white d-flex"> 
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span></Link>
            </div>
                </ul>
            
        </div>
    );
};

export default Sidebar;