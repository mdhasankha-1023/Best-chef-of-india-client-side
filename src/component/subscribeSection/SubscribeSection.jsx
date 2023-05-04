import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const SubscribeSection = () => {
    return (
        <Container className='bg-secondary py-5 rounded my-5'>
            <div className='text-center my-5 text-light'>
                <h1>Subscribe</h1>
                <p className='fs-5'>Subscribe our newsletter to stay updated every moment</p>
            </div>
            <Form className='w-50 mx-auto d-flex align-items-center'>
                <Form.Control className='py-2 fs-4 w-75 me-2' type="email" name='email' placeholder="Enter email address" />
                <Button className='w-25 py-2 fs-4' variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default SubscribeSection;