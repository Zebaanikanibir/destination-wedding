import React from 'react';
import './BookedDetails.css';
const BookedDetails = ({book}) => {
    return (
        <div className="col-md-6 ">
            <div className="booked">
            <p className="text-center mt-5 bService">{book.service}</p>
            <p className="text-center mt-5"><small id="bInfo">{book.info}</small></p>
            </div>
        </div>
    );
};

export default BookedDetails;