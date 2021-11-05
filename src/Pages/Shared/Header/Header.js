import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo/logo.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="navbar-wrap py-4">
                <Container>
                    <Navbar.Brand to="/home#home"><img
                        alt=""
                        src={logo}
                        width="50"
                        height="35"
                        className="d-inline-block align-top me-3 mt-3 img-fluid"
                        />
                    <span className="brand-name-span"><NavLink to="/home" className="link-style">Unique Delivery Service</NavLink></span></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" activeStyle={{ fontWeight: "bold", color: "#ffffff"}} className="menu-link">Home </NavLink>
                            <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "#ffffff"}} className="menu-link">About </NavLink>
                            <NavLink to="/services" activeStyle={{ fontWeight: "bold", color: "#ffffff"}} className="menu-link">Services</NavLink>
                            <NavLink to="/contact" activeStyle={{ fontWeight: "bold", color: "#ffffff"}} className="menu-link me-3">Contact </NavLink>
                        </Nav>
                        {user?.email ?
                        
                            <Button onClick={logOut} size="sm" variant="light" className="me-3 ms-5 logout-button">Logout</Button>:
                            <Nav.Link as={Link} to="/login" className="text-white login-button">Login</Nav.Link>}
                        <Navbar.Text><span><i className="fas fa-user-circle text-white"></i></span> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;