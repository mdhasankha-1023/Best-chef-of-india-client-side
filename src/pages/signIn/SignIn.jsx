import React, { useContext} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import {  ToastContainer } from 'react-toastify';




const SignIn = () => {
    const { user, signInWithGoogle, signInWithGithub, signIn, handleError, handleSuccess } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    

    // handle sign-in form
    const handleSignInForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then( result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                navigate(from, { replace: true })
                handleSuccess()
                
            })
            .catch(error => {
                handleError(error.message)      
            })

    }

    // handle google btn
    const handleGoogleBtn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                handleSuccess()
            })
            .catch(error => {
                handleError(error)
            })
    }

    // handle Github btn
    const handleGithubBtn = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
               console.log(loggedUser)
               navigate(from, { replace: true })
               handleSuccess()
            })
            .catch(error => {
              handleError(error)
            })
    }

    

    return (
        <Container className='my-5'>
            <ToastContainer
            position="top-center"
            autoClose={2000}
            theme="light"
            />
            <div className='w-50 mx-auto border py-3 px-5 rounded'>
                <h1 className='text-center mb-3'>Please Sign In!!</h1>
                <Form onSubmit={handleSignInForm}>
                    <Form.Group className="mb-3">
                        <Form.Label className='fs-4'>Email</Form.Label>
                        <Form.Control className='py-3 fs-4' type="email" name='email' placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='fs-4'>Password</Form.Label>
                        <Form.Control className='py-3 fs-4' type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    <Button className='w-100 py-2 fs-4 mt-4 ' variant="danger" type="submit">
                        Sign In
                    </Button>

                </Form>
                    <p className='text-center mt-5 fs-3'>Or sign in with</p>

                    <div style={{ cursor: 'pointer' }} onClick={handleGoogleBtn} className='fs-4 border py-2 text-center mb-3 text-danger'>
                        <FaGoogle className='me-3' size='1.5em'></FaGoogle>
                        Google
                    </div>
                    <div style={{ cursor: 'pointer' }} onClick={handleGithubBtn} className='fs-4 border py-2 text-center text-secondary'>
                        <FaGithub className='me-3' size='1.5em'></FaGithub>
                        Github
                    </div>
                    <p className='text-center fs-4 mt-4'>No account!! please <Link to='/sign-up'>Sign up</Link></p>
                    
            </div>
        </Container>
    );
};

export default SignIn;