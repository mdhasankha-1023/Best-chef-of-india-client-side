import React from 'react';
import { Card } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const BestRecipe = ({ recipe }) => {
    const { img, rating, name } = recipe;

    return (
        <div>
            <Card style={{ width: '22rem'}}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <Rating className='me-2 fs-4 text-warning'
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderRating={rating}
                            placeholderSymbol={<FaStar></FaStar>}
                            readonly
                        />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BestRecipe;