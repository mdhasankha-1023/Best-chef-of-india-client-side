import React from 'react';
import './ChefBanner.css'
import { Card, Container } from 'react-bootstrap';
import banner from '../../../assets/Banner-pic/chef_banner.jpg'
import { useLoaderData } from 'react-router-dom';


const ChefBanner = () => {
    const chefInfo = useLoaderData();
    const { id, name, number_of_recipes, experience, pic_url, likes, description } = chefInfo;

    return (
        <Container className='mt-5'>
            <Card className="bg-dark text-white">
                <Card.Img  className='banner-img' src={banner} alt="Card image" />
                <Card.ImgOverlay className='d-flex justify-content-between'>
                    <div>
                        <Card.Text className='fs-4 text-light mt-3'>
                            {description}
                        </Card.Text>
                        <Card.Text className='fs-3'>Experience: {experience}</Card.Text>
                        <Card.Text className='fs-3'>Recipes: {number_of_recipes}</Card.Text>
                        <Card.Text className='fs-3'>Likes: {likes}</Card.Text>
                    </div>
                    <div className='ms-5'>
                        <img  style={{height: 500}} src={pic_url} alt="" />
                        <Card.Title className='fs-1 mt-3'>{name}</Card.Title>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
};

export default ChefBanner;