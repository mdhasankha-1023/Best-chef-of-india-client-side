import { useLoaderData } from 'react-router-dom';
import Recipe from '../recipe/Recipe';
import { Col, Container, Row } from 'react-bootstrap';

const AllRecipes = ({ data }) => {
    const chef = useLoaderData();
    const { id } = chef;
    const chefRecipes = data.filter(c => c.chef_id == id)

    return (
        <Container className='mt-5'>
            <h1 className='text-center my-3'>Recipes</h1>
            <Row>
                {
                    chefRecipes.map(recipe => <Col sm={6} className='g-5'>
                        <Recipe
                            key={recipe.id}
                            recipe={recipe}></Recipe>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default AllRecipes;