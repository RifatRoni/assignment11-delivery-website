import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://radiant-escarpment-55965.herokuapp.com/services')
            .then(res=>res.json())
            .then(data=>setAllServices(data))
    }, []);
    return (
        <div>
            <div className="container mb-5">
                <h1 className="text-center py-5 theme-color">Our All Delivery Services</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                    services.map(service => <Service key={service.key} service={service}></Service>)
                    }             
                </Row>
            </div>
        </div>
    );
};

export default Services;