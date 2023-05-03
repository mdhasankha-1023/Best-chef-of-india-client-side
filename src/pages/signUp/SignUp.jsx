import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <Container className='mt-5'>
            <div className='w-50 mx-auto border py-5 px-5 rounded'>
            <h1 className='text-center mb-5'>Please Sign up!!</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className='fs-4'>Name</Form.Label>
                    <Form.Control className='py-3 fs-4' type="text" placeholder="Enter your full name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='fs-4'>Email</Form.Label>
                    <Form.Control className='py-3 fs-4' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='fs-4'>Password</Form.Label>
                    <Form.Control className='py-3 fs-4' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='fs-4'>Photo URL</Form.Label>
                    <Form.Control className='py-3 fs-4' type="text" placeholder="Photo url" />
                </Form.Group>
                <Button className='w-100 py-2 fs-4 mt-5 ' variant="danger" type="submit">
                    Sign up
                </Button>
                <p className='text-center fs-4 mt-4'>Already have an account? please <Link to='/sign-in'>Sign in</Link></p>
            </Form>
            </div>
        </Container>
    );
};

export default SignUp;