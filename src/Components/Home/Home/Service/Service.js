import React from 'react';
import './Service.css';
import { useHistory} from 'react-router-dom';
import { Card } from 'react-bootstrap';
const Service = ({ service }) => {
    const history = useHistory()

    const handleBooking = (id) => {

    history.push(`/booking/${id}`)

    }
    return (
            <div className="col-md-4 text-center service">
                <Card id="card" className="mb-3" style={{ width: '22rem', height:'35rem' }}>
                <Card.Title ><h4>{service.name}</h4></Card.Title>
            
            <Card.Body>
            <img id="serviceImg" src={`data:image/png;base64, ${service.image.img}`} alt="" />
                <Card.Text>
                <p><small className="cInfo">{service.info}</small></p>
                </Card.Text>
                <button id="btn" onClick={()=>handleBooking(service._id)}>Book</button>
            </Card.Body>
            </Card>

            </div>




        // <div className="col-md-4 text-center">
        //     <h4>{service.name}</h4>
        //     <img id="serviceImg" src={`data:image/png;base64, ${service.image.img}`} alt="" />
        //     <p><small>{service.info}</small></p>
        //     <button onClick={()=>handleBooking(service._id)}>Book</button>
        // </div>
    );
};

export default Service;