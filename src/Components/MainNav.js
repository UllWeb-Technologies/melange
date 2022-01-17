import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import logo from '../images/logo.png'
import '../index.css'

export default function Navigation() {
    return (
        <Navbar bg="dark" expand="lg" className="position-fixed col-12" style={{ zIndex: '99' }}>
            <Container fluid className="px-5">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Melange Logo" width="48" height="48" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="bg-secondary" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-0 ms-auto d-flex align-items-lg-center" style={{ color: 'white' }}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#project">Our Project</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Nav.Link href="#link"><Button style={{ background: '#BA4F19', outline: 'none', border: 'none' }}>Schedule Inspection</Button></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
