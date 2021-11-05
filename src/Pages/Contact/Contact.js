import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import contactImg from '../../images/contact/contact.jpg';
import './Contact.css'


const Contact = () => {
    return (
        <div className="contact-div">
            <Container className="mt-4">
                <h1 className="text-center theme-color my-5">Contact Us</h1>    
                <Row>
                    <Col sm={12} lg={12} className="mx-auto mb-5">
                        <img src={contactImg} className="w-100" alt="" />
                    </Col>
                    <Col sm={12} lg={12} className="contact-info-div">
                        <Form className="w-100 mx-auto">
                            <FloatingLabel controlId="floatingTextarea" label="First Name" className="mb-3">
                                <Form.Control type="text" placeholder="Your Name" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                                   
                            <FloatingLabel controlId="floatingTextarea2" label="Write your message here . . .">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '150px' }}
                                />
                            </FloatingLabel>
                            <Button className="me-3 my-3 btn-danger">Send Message</Button>
                        </Form> 
                    </Col>
                    
                </Row>
            </Container>
        
    </div>
    );
};

export default Contact;