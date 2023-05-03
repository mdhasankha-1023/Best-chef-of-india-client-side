import React from 'react';
import './Banner.css'
import { Button, Container } from 'react-bootstrap';
import bannerImg from '../../../assets/Banner-pic/banner.jpg'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <Container className='mt-5'>
            <div className="banner position-relative">
                <img className='banner-img img-fluid' src={bannerImg} alt="" />
                <div className="banner-text pt-5 ps-5 position-absolute top-0">
                    <h1 className='text-light'>Choose from <br /> thousands of <br />recipes</h1>
                    <p className='fs-4 my-3'>Appropriately integrate technically sound value with <br /> scalable infomediaries negotiate sustainable <br /> strategic theme areas</p>
                    <Button className='px-5 rounded mt-3' variant="danger">
                        <Link className='btn-link fs-5' to='/sign-up'>Sign up</Link>
                    </Button>

                </div>
            </div>
        </Container>
    );
};

export default Banner;