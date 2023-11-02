import React from 'react'
import './Landingpage.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Landingpage() {
    return (
        <>
            <div className='langinimage'>
                <div>
                    <Navbar className="">
                        <Container>
                            <Navbar.Brand href="" className='text-light'>POSTY</Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Link to={'/signup'} className='buttons'>GET STARTED</Link>
                                {/* <Link to={'/login'} className='buttons1'>LOGIN</Link> */}
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <h1 className='letstart'>LET'S STARTED POSTING</h1>
                <p className='justify-content-center sometext'>Welcome to POSTY, the ultimate website for creating and sharing multimedia content. Whether you want to post a video, a photo or a text, MediaMix lets you do it easily and quickly. content and discover new trends and topics. MediaMix is more than just a website, it’s a community of creative people who love to express themselves through various media formats. Join MediaMix today and unleash your creativity!</p>
                <div className='d-flex'>
                    <Link to={'/signup'} className='buttons'>GET STARTED</Link>
                    {/* <Link to={'/login'} className='buttons1'>LOGIN</Link> */}

                </div>
            </div>


        </>
    )
}

export default Landingpage