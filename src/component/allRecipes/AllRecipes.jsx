import { useLoaderData } from 'react-router-dom';
import Recipe from '../recipe/Recipe';
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

const AllRecipes = ({ children }) => {
    const chef = useLoaderData();
    const { id } = chef;
    const chefRecipes = children.filter(c => c.chef_id == id)

    return (
        <Container className='mt-5'>
            <ToastContainer
            position="top-center"
            autoClose={2000}
            theme="light"
            />
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