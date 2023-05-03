import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const SignUp = () => {
    return (
        <Container className='mt-5'>
            <div className='w-50 mx-auto border py-5 px-5 rounded'>
            <h1 className='text-center mb-5'>Place Sign In!!</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className='fs-4'>Email</Form.Label>
                    <Form.Control className='py-3' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='fs-4'>Password</Form.Label>
                    <Form.Control className='py-3' type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100 py-2 fs-4 mt-5 ' variant="danger" type="submit">
                    Sign In
                </Button>
            </Form>
            </div>
        </Container>
    );
};

export default SignUp;