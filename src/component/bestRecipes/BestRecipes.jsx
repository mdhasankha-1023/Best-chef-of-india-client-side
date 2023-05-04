import React, { useEffect, useState } from 'react';
import BestRecipe from '../bestRecipe/BestRecipe';
import { Button, Col, Container, Row } from 'react-bootstrap';

const BestRecipes = () => {
    const [recipes, setRecipes] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect( () => {
        fetch('http://localhost:5000/all-recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
    } , [])

    // slice recipes data
    const subSetOfRecipes = recipes.slice(0, 8);

    // handle Show All Button
    const handleShowAllBtn = () => {
        setShowAll(true)
    }

    return (
        <Container className='my-5'>
            <h1 className='text-center my-5'>Best Recipes</h1>
            <Row className='g-4'>
            {
                showAll ? recipes.map(recipe => <Col sm={4}>
                    <BestRecipe
                    key={recipe.id}
                    recipe={recipe}></BestRecipe>
                    </Col>)
                    :
                    subSetOfRecipes.map(recipe => <Col sm={4}>
                        <BestRecipe
                        key={recipe.id}
                        recipe={recipe}></BestRecipe>
                        </Col>)
            }
            </Row>
            <div className='text-center mt-5'>
            {
                !showAll && 
                <Button onClick={handleShowAllBtn} variant="danger">Show all</Button>
            }
            </div>
        </Container>
    );
};

export default BestRecipes;
