import React, { useContext, useState } from 'react';
import './Header.css'
import logo from '../../../assets/Company-logo/logo.png'
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import ActiveLink from '../../activeLink/ActiveLink';





const Header = () => {
  const { user, logOut, handleError, handleSuccess } = useContext(AuthContext)


  // handle sign-Out button
  const handleSignOutBtn = () => {
    logOut()
      .then(
        handleSuccess()
      )
      .catch(error => {
        handleError(error)
      })
  }




  return (
    <Navbar expand="lg">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="light"
      ></ToastContainer>
      <Container className='border-bottom'>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-5">
            <ActiveLink  to="/">Home</ActiveLink>
            <ActiveLink  to='/blog'>Blog</ActiveLink>
          </Nav>
          <Nav className="ms-auto profile">
            {
              user ?
                <>
                  {
                    user.photoURL === null ? <FaUserCircle className='me-3' size='3em'></FaUserCircle>
                      :
                      <Image className='me-3' style={{ height: 50, width: 50 }} src={user.photoURL} roundedCircle />
                  }
                  
                  <Button onClick={handleSignOutBtn} className='px-5 rounded' variant="danger">Sign out</Button>
                </>
                :
                <Button className='px-5 rounded' variant="danger">
                  <Link className='btn-link' to='/sign-in'>Sign in</Link>
                </Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;