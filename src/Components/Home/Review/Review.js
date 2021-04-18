import React from 'react';
import Service from '../Home/Service/Service';
import './Review.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Review = ({review}) => {
    return (

          <div className="col-md-4 text-center service">
                <Card id="card" className="mb-3 mt-5" style={{ width: '22rem', height:'40rem' }}>
                <Card.Title>
                <div className="mt-2">
            <FontAwesomeIcon className="icon1" icon={faStar} />
            <FontAwesomeIcon className="icon1" icon={faStar} />
            <FontAwesomeIcon className="icon1" icon={faStar} />
            <FontAwesomeIcon className="icon1" icon={faStar} />
            <FontAwesomeIcon className="icon1" icon={faStar} />
            </div>
                <img id="rImg" src={`data:image/png;base64, ${review.image.img}`} alt=""/>
                </Card.Title>
            
            <Card.Body>
            <h3>{review.name}</h3>
            <p><small className="cInfo">{review.description}</small></p>
            
            </Card.Body>
            </Card>

            </div>




        
    );
};

export default Review;