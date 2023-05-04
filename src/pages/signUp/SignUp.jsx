import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const {signUp} = useContext(AuthContext) 
    const navigate = useNavigate()

    // handle sign-up btn
    const handleSignUpBtn =  (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        console.log(email, password, name, photoUrl)

        signUp(email, password)
        .then(result => {
            const newUser = result.user;
            console.log(newUser)
            form.reset()
            navigate('/sign-in')
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <Container className='mt-5'>
            <div className='w-50 mx-auto border py-5 px-5 rounded'>
            <h1 className='text-center mb-5'>Please Sign up!!</h1>
            <Form onSubmit={handleSignUpBtn}>
                <Form.Group className="mb-3">
                    <Form.Label className='fs-4'>Name</Form.Label>
                    <Form.Control name='name' className='py-3 fs-4' type="text" placeholder="Enter your full name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='fs-4'>Email</Form.Label>
                    <Form.Control name='email' className='py-3 fs-4' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='fs-4'>Password</Form.Label>
                    <Form.Control name='password' className='py-3 fs-4' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='fs-4'>Photo URL</Form.Label>
                    <Form.Control name='photoUrl' className='py-3 fs-4' type="text" placeholder="Photo url" />
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