import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const SignIn = () => {
    const {user, signInWithGoogle, signInWithGithub} = useContext(AuthContext)
    console.log(user)

    // handle sign-in form
    const handleSignInForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        
    }

    // handle google btn
    const handleGoogleBtn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    // handle Github btn
    const handleGithubBtn = () => {
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <Container className='my-5'>
            <div className='w-50 mx-auto border py-3 px-5 rounded'>
                <h1 className='text-center mb-3'>Please Sign In!!</h1>
                <Form onSubmit={handleSignInForm}>
                    <Form.Group className="mb-3">
                        <Form.Label className='fs-4'>Email</Form.Label>
                        <Form.Control className='py-3 fs-4' type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='fs-4'>Password</Form.Label>
                        <Form.Control className='py-3 fs-4' type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Button className='w-100 py-2 fs-4 mt-4 ' variant="danger" type="submit">
                        Sign In
                    </Button>
                    <p className='text-center mt-5 fs-3'>Or sign in with</p>
                   
                        <div onClick={handleGoogleBtn} className='fs-4 border py-2 text-center mb-3 text-danger'>
                            <FaGoogle className='me-3' size='1.5em'></FaGoogle>
                            Google
                        </div>
                        <div onClick={handleGithubBtn} className='fs-4 border py-2 text-center text-secondary'>
                            <FaGithub className='me-3' size='1.5em'></FaGithub>
                            Github
                        </div>
                        <p className='text-center fs-4 mt-4'>No account!! please <Link to='/sign-up'>Sign up</Link></p>

                </Form>
            </div>
        </Container>
    );
};

export default SignIn;