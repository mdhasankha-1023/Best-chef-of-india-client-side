import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SignIn = () => {
    return (
        <Container className='my-5'>
            <div className='w-50 mx-auto border py-3 px-5 rounded'>
                <h1 className='text-center mb-3'>Place Sign In!!</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className='fs-4'>Email</Form.Label>
                        <Form.Control className='py-3' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='fs-4'>Password</Form.Label>
                        <Form.Control className='py-3' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='w-100 py-2 fs-4 mt-4 ' variant="danger" type="submit">
                        Sign In
                    </Button>
                    <p className='text-center mt-5 fs-3'>Or sign in with</p>
                   
                        <div className='fs-4 border py-2 text-center mb-3 text-primary'>
                            <FaFacebook className='me-3' size='1.5em'></FaFacebook>
                            Facebook
                        </div>
                        <div className='fs-4 border py-2 text-center text-secondary'>
                            <FaGithub className='me-3' size='1.5em'></FaGithub>
                            Github
                        </div>
                        <p className='text-center fs-4 mt-4'>No account!! <Link>Sign up</Link></p>

                </Form>
            </div>
        </Container>
    );
};

export default SignIn;