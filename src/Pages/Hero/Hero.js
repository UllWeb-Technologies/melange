import { Button } from 'react-bootstrap'
import React from 'react'
import '../Hero/css/hero.css'

export default function Hero() {
    return (
        <div className="bg-div">
            <main className="d-flex align-items-center p-5 col-12" style={{ height: '598px', backgroundImage: `url(${process.env.PUBLIC_URL + '/hero.png'})` }}>
                <section className='d-flex text-center align-items-center justify-content-center flex-column col-12'>
                    <h2>welcome to Melange <br /> projects</h2>
                    <Button className="hero-btn mt-3">More</Button>
                </section>
            </main>
        </div>
    )
}
