import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const {fee, serviceName, serviceDescription, image} = props.service;
    const history = useHistory();
    const book = () => {
        history.push('/booking');
    }
    return (
        <div>
            <Col className="bg-light p-4 border service-card">
                <div>
                    <Row>
                        <Col lg={12}>
                            <img className="serviceImage" src={image} alt="" />
                        </Col>
                        <Col lg={12}>
                        <h4 className="pt-3">{serviceName}</h4>
                        <p>{serviceDescription.slice(0,90)}</p>
                        <p className="fw-bold">Fee: {fee}</p>
                        <Button onClick={book} variant="danger" size="sm">Book Appointment</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </div>
    );
};

export default Service;