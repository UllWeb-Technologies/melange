import React from 'react'
import aboutOne from '../../images/hero/about-1.jpg'
import aboutTwo from '../../images/hero/about-2.jpg'
import core from '../../images/hero/core.jpg'
import { Card, Button } from 'react-bootstrap'

export default function About() {
    return (
        <div className='px-3'>
            <Card fluid className='no-bg position-relative d-lg-flex flex-column pb-5 d-none' style={{ marginBottom: '20rem' }}>
                {/* For Desktop */}
                {/* For Desktop */}
                <Card.Body className="d-flex align-items-center ">
                    <div className='col-3'>
                        <img className='card-img ' src={aboutOne} alt="work" />
                    </div>
                    <h4 className="mx-auto px-4 py-3">About Us</h4>
                </Card.Body>
                <Card.Body className="position-absolute p-abs d-flex align-items-start col-10">
                    <div className='col-3 p-2' style={{
                        boxShadow:
                            '10px 9px 10px rgba(0, 0, 0, 0.09)',
                        background: '#fff',
                        borderRadius: '8px'
                    }}>
                        <img className='card-img' src={aboutTwo} alt="work" />
                    </div>
                    <div className="pt-3 ms-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi nemo, voluptatibus non velit architecto autem consequuntur suscipit laboriosam eveniet, earum odit asperiores quis repudiandae sint et ea ad? Modi consequatur dicta culpa corrupti illum tempore perspiciatis! Nam, harum rem. Autem amet obcaecati doloremque molestiae itaque? Ex rerum id amet facilis, fuga necessitatibus sit, minus consequatur dolores, neque incidunt nemo totam eum assumenda repellat error est delectus vitae praesentium unde ipsum vel laudantium non! Impedit, consectetur eligendi. Saepe illo, ratione voluptates officiis fugiat nam eum rerum nulla quod dignissimos voluptatem quibusdam aliquid minima laboriosam consequatur distinctio quisquam nisi expedita. Consequatur?
                    </div>
                </Card.Body>
            </Card>
            {/* For Desktop */}
            {/* For Mobile */}
            <Card fluid className='position-relative pt-5 pt-md-0 no-bg d-lg-none flex-column pb-5 d-flex'>
                <h4 className="mx-auto px-4 py-3 mb-5">About Us</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi nemo, voluptatibus non velit architecto autem consequuntur suscipit laboriosam eveniet, earum odit asperiores quis repudiandae sint et ea ad? Modi consequatur dicta culpa corrupti illum tempore perspiciatis! </p>

            </Card>
            {/* For Mobile */}


            <div className='d-flex align-items-center justify-content-center col-12 w-100 flex-column' >
                <h5 className='text-uppercase mx-auto my-5'>What we do</h5>
                <div className='d-flex align-items-lg-start align-items-center justify-content-between col-12 text-white px-4 flex-wrap'>
                    <Card className='col-md-5 col-lg-3 px-lg-4 py-4 mb-5 wwd text-center d-flex align-items-center justify-content-center flex-column' style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${process.env.PUBLIC_URL + 'what/construction.jpg'})` }}>
                        <h6>Construction Management</h6>
                        <p>Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat </p>
                        <Button className="btn-browny mt-3" style={{ width: '65px', border: 'none', }}>More</Button>
                    </Card>
                    <Card className='col-md-5 col-lg-3 px-lg-4 py-4 mb-5 wwd text-center d-flex align-items-center justify-content-center flex-column' style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${process.env.PUBLIC_URL + 'what/archi.jpg'})` }}>
                        <h6>Architecture</h6>
                        <p>Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat  </p>
                        <Button className="btn-browny mt-3" style={{ width: '65px', border: 'none', }}>More</Button>
                    </Card>
                    <Card className='col-md-5 col-lg-3 px-lg-4 py-4 mb-5 wwd text-center d-flex align-items-center justify-content-center flex-column' style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${process.env.PUBLIC_URL + 'what/property.jpg'})` }}>
                        <h6>Property Sale</h6>
                        <p>Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat </p>
                        <Button className="btn-browny mt-3" style={{ width: '65px', border: 'none', }}>More</Button>
                    </Card>
                    <Card className='col-md-5 col-lg-3 px-lg-4 py-4 mb-5 wwd text-center d-flex align-items-center justify-content-center flex-column' style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${process.env.PUBLIC_URL + 'what/advisory.jpg'})`
                    }}>
                        <h6>Advisory</h6>
                        <p>Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat </p>
                        <Button className="btn-browny mt-3" style={{ width: '65px', border: 'none', }}>More</Button>
                    </Card>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center col-12 px-4 w-100 flex-column' >
                <h5 className='text-uppercase my-5'>Our Core</h5>
                <div className=' d-flex align-items-lg-start align-items-center flex-lg-row flex-column justify-content-between col-12 mx-auto' >
                    <div className='text-captalize col-lg-5 text-lg-start text-center' >
                        <h3 className='text-capitalize '>
                            We can service all of your <br /> construction needs
                        </h3>
                        <hr className='col-6 mx-auto mx-lg-0' style={{ border: '1px solid #BA4F19' }} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget leo gravida senectus at. Habitasse elementum congue sed proin ut. At eu tempus, mi nibh nibh. Mauris tristique eget a eget in. Lectus malesuada in sed tellus volutpat viverra sagittis
                            <br /><br />
                            sit. Tortor non morbi ultricies vel etiam sit risus. Lacus, nisl urna quam sem diam bibendum posuere cursus tincidunt. In commodo aliquam, felis viverra accumsan diam maecenas egestas nunc. Sagittis mi aenean habitant a velit odio at suspendisse ut.
                        </p>
                    </div>
                    <div className=' d-flex justify-content-end pb-5' >
                        <img src={core} alt="core" className='card-img' />
                    </div>
                </div>
            </div>

        </div>
    )
}
