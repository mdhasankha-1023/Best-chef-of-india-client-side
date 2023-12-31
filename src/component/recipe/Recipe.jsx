import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';

const Recipe = ({ recipe }) => {
    const { cooking_method, name, rating, img, ingredients } = recipe;
    const [isClicked, setIsClicked] = useState(false)

    // handleHeartBtn
    const handleHeartBtn = () => {
        setIsClicked(!isClicked)
        toast.success(`Add To Favorite ${name}`)
    }
    return (
        <Container className='mt-5'>
            <Card style={{ width: '38rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-3 mb-4'>{name}</Card.Title>
                    <Card.Text>
                        <Card.Title className='fs-4'>Ingredients:</Card.Title>
                        {
                            ingredients.map(ingredient => <span className='me-2 fs-5'>{ingredient},</span>)
                        }
                    </Card.Text>
                    <Card.Text>
                        <Card.Title className='fs-4'>Cooking-methods</Card.Title>
                        <span>
                            {cooking_method}
                        </span>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Card.Text>
                            <Rating className='me-2 fs-4 text-warning'
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderRating={rating}
                                placeholderSymbol={<FaStar></FaStar>}
                                readonly
                            />
                        </Card.Text>
                        <Button onClick={handleHeartBtn}
                            className={isClicked === true && 'text-danger disabled'} variant='light'>
                            <FaHeart size='2em'></FaHeart>
                        </Button>

                    </div>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default Recipe;