import React from 'react';
import './Chef.css'
import { Button, Card, Container } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Chef = ({ chef }) => {
    const { id, name, number_of_recipes, experience, pic_url, likes, description } = chef;


    const img = {
        width: '100%',
        height: '50%'
        
    }
    return (
        <Container>
            <Card style={{ height: 700 }}>
                    
                    <LazyLoadImage
                    src={pic_url}
                    width={img.width}
                    height={img.height}
                   
                    ></LazyLoadImage>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 120)}</Card.Text>
                    <h5>Recipes: {number_of_recipes}</h5>
                    <h5>Exp: {experience}</h5>
                </Card.Body>
                <Card.Footer className='py-3 d-flex justify-content-between align-items-center'>
                    <Button className='cart-btn' variant="danger">
                        <Link to={`/chef-recipes/${id}`}>View recipes</Link>
                    </Button>
                    <div>
                        <p><FaThumbsUp size='2em'></FaThumbsUp>
                            {likes}</p>
                    </div>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default Chef;