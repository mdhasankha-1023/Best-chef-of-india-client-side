import React from 'react';
import './Footer.css'
import logo from '../../../assets/Company-logo/logo.png'
import { Container } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-5'>
           <Container>
            <div className='d-flex align-items-center justify-content-between'>
                <img src={logo} alt="" />
                <div>
                    <FaFacebook className='text-primary me-3' size='3em'></FaFacebook>
                    <FaGithub className='text-gray me-3' size='3em '></FaGithub>
                    <FaInstagram className='text-danger' size='3em '></FaInstagram>
                </div>
            </div>
            <div className='footer-text d-flex align-items-center justify-content-between fs-5'>
                <div className='ms-5 my-5'>
                <h5 className='fs-4 text-decoration-underline'>LINKS</h5>
                <Link to='/'>Home</Link><br />
                <Link to='/blog'>Blog</Link><br />
                <Link to='/sign-up'>Sign up</Link><br />
                <Link to='/sign-infdsf'>Sign in</Link>
                </div>
                <div className='me-5'>
                <h5 className='fs-4 text-decoration-underline'>SOCIAL</h5>
                <Link to='/'>Facebook</Link><br />
                <Link to='/blog'>Github</Link><br />
                <Link to='/sign-up'>Instagram</Link><br />
                </div>
            </div>
            <p className='text-center fs-4'>Copyright&#169; 2023</p>
           </Container>
        </div>
    );
};

export default Footer;