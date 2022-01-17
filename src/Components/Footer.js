import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from '../images/logo.png'
import {
    faTwitter,
    faInstagram,
    faYoutubejj,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <footer className="page-footer font-small indigo">
            <div class="col-9 mx-auto pt-4">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Melange Logo" />
                </Navbar.Brand>
                {/* Footer Links */}
                <div className="container text-md-left py-5">
                    {/* Grid row */}
                    <div className="row align-items-lg-start align-items-center text-justify text-lg-start">
                        {/* Grid column */}
                        <div className="col-lg-3 col-md-6 mt-md-0 mt-3">
                            <p className='text-capitalize'>property construction and development corporation with headquarters in Abuja Nigeria with primary engagement in property development and investment</p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-lg-3 col-md-6 mx-auto">
                            {/* Links */}
                            <h5 className="font-weight-bold text-uppercase">Contact Us</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className='text-decoration-none text-capitalize text-dark'>Address - gwarinpa abuja Complex Wuse II</a>
                                </li>
                                <li>
                                    <a href="#!" className='text-decoration-none text-capitalize text-dark'>Phone - +234 803 225 5294</a>
                                </li>
                                <li>
                                    <a href="#!" className='text-decoration-none text-capitalize text-dark'>E-mail - info@alphatoproperties.com </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mx-auto">
                            {/* Links */}
                            <h5 className="font-weight-bold text-uppercase">About</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className='text-decoration-none text-capitalize text-dark'>Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#!" className='text-decoration-none text-capitalize text-dark'>Terms of service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mx-auto">
                            {/* Links */}
                            <h5 className="font-weight-bold text-uppercase">Follow us</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className='text-decoration-none text-capitalize text-dark'><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="#!" className='text-decoration-none text-capitalize text-dark'><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="#!" className='text-decoration-none text-capitalize text-dark'><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="#!" className='text-decoration-none text-capitalize text-dark'><FontAwesomeIcon icon={faFacebook} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Grid row */}
                </div>
            </div>
            {/* Footer Links */}
            {/* Copyright */}
            <h6 className="footer-copyright text-center font-weight-bolder">COPYRIGHT © 2021. Melange& PROPERTY DEVELOPMENT. ALL RIGHTS RESERVED
            </h6>
            {/* Copyright */}
        </footer>

    )
}
