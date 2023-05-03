import React from 'react';
import './Chef.css'
import { Button, Card, Container } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';


const Chef = ({ chef }) => {
    const { id, name, number_of_recipes, experience, pic_url, likes } = chef;
    return (
        <Container>
            <Card style={{ height: 700 }}>
                <Card.Img variant="top" src={pic_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <h5>Recipes: {number_of_recipes}</h5>
                    <h5>Exp: {experience}</h5>
                </Card.Body>
                <Card.Footer className='py-3 d-flex justify-content-between align-items-center'>
                <Button variant="danger">View recipes</Button>
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