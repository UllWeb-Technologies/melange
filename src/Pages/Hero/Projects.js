import React from 'react'
import { Button } from 'react-bootstrap'
import aboutOne from '../../images/hero/about-1.jpg'
import cubiq from '../../images/hero/cubiq.jpg'
import terrace from '../../images/hero/terrace.jpg'
import fivebed from '../../images/hero/5bed.jpg'

// Testemonials

import imgOne from '../../images/hero/testemonials/test1.png'
import imgTwo from '../../images/hero/testemonials/test2.png'
import imgThree from '../../images/hero/testemonials/test3.png'
// Css
import '../Hero/css/testemonials.css'

export default function Projects() {
    return (
        <div className='d-flex align-items-center justify-content-center col-12 w-100 flex-column py-5' style={{ background: '#F5F5F5' }}>
            <h5 className='text-uppercase mx-auto mb-5'>Our Projects</h5>
            <div className='row d-flex align-items-center align-items-lg-start justify-content-between flex-wrap col-12 px-4 text-white'>
                <div className='col-md-4 mx-auto mb-5'>
                    <img className='card-img' src={cubiq} alt="work" />
                </div>
                <div className='col-md-4 mx-auto mb-5'>
                    <img className='card-img' src={terrace} alt="work" />
                </div>
                <div className='col-md-4 mx-auto mb-5'>
                    <img className='card-img' src={fivebed} alt="work" />
                </div>
            </div>
            <Button className="btn-browny mt-3" style={{ width: '65px', border: 'none', }}>More</Button>
            <div className='d-flex align-items-center justify-content-center col-12 w-100 flex-column py-5 mt-4 px-0' style={{ background: '#fff' }}>
                <h5 className='text-uppercase mx-auto mb-5'>Our Testemonials</h5>
                <p className='font-weight-bolder text-muted'>What Our Clients Say About Us</p>
                <div className="px-lg-0 mx-lg-5 px-3 testimonial-inner"  >
                    <div className="row d-flex justify-content-between align-items-center align-items-lg-start">
                        <div className="col-md-4 mb-5 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc">
                                    <div className="tour-text color-grey-3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget leo gravida senectus at. Habitasse elementum congue sed proin ut. At eu tempus, mi nibh nibh. Mauris tristique eget a </div>
                                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={imgOne} alt="" /></div>
                                    <div className="link-name d-flex justify-content-center">Balbir Kaur</div>
                                    <div className="link-position d-flex justify-content-center">Student</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc">
                                    <div className="tour-text color-grey-3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget leo gravida senectus at. Habitasse elementum congue sed proin ut. At eu tempus, mi nibh nibh. Mauris tristique eget a </div>
                                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={imgTwo} alt="" /></div>
                                    <div className="link-name d-flex justify-content-center">Balbir Kaur</div>
                                    <div className="link-position d-flex justify-content-center">Student</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc">
                                    <div className="tour-text color-grey-3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget leo gravida senectus at. Habitasse elementum congue sed proin ut. At eu tempus, mi nibh nibh. Mauris tristique eget a </div>
                                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={imgThree} alt="" /></div>
                                    <div className="link-name d-flex justify-content-center">Balbir Kaur</div>
                                    <div className="link-position d-flex justify-content-center">Student</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Newsletter */}
            <div className='d-flex align-items-center justify-content-between flex-lg-row flex-column col-12 px-lg-5 py-5'>
                <div className="col-lg-6 px-lg-5 px-3 text-lg-start text-center">
                    <h2 className='text-capitalize sign'>sign up for our newsletter to get <br /> more information</h2>
                    <div className="col-auto mt-4">
                        <div className="input-group mb-2 d-flex align-items-center">
                            <input type="text" className="form-control-lg form-control" id="inlineFormInputGroup" placeholder="Enter email address" />
                            <div className="">
                                <div><Button className="btn-browny no-bg text-uppercase pb-2 pt-2" size="lg">Subscribe</Button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-3 px-5 d-lg-flex align-items-center justify-content-end d-none">
                    <img src={aboutOne} alt="none" />
                </div>
            </div>
        </div>
    )
}
