import React from 'react';
import './Banner.css'
import { Button, Card, Container } from 'react-bootstrap';
import bannerImg from '../../../assets/Banner-pic/banner.jpg'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <Container className='mt-5'>
            <Card className="bg-dark text-white">
                <Card.Img style={{height: 700}} src={bannerImg} alt="Card image" />
                <Card.ImgOverlay className='ms-4 mt-4'>
                    <Card.Title className='banner-title'>Choose from <br /> thousands of <br />recipes</Card.Title>
                    <Card.Text className='banner-text'>
                    Appropriately integrate technically sound value with <br /> scalable infomediaries negotiate sustainable <br /> strategic theme areas
                    </Card.Text>
                    <Button className='px-5 rounded mt-3' variant="danger">
                            <Link className='btn-link fs-5' to='/sign-up'>Sign up</Link>
                        </Button>
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
};

export default Banner;