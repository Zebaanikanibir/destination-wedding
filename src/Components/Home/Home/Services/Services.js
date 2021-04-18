import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://calm-reaches-86971.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    console.log('services',services)
    return (
        <section className="container">
             <h3 className="text-center  text-danger mb-5 head3">Our Services</h3>
                <div className="row">
                    {
                     services.map(service =><Service key={service._id} service={service} />)
                    }
                    
                </div>
        </section>
    );
};

export default Services;