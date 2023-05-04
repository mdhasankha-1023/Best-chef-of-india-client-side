import React, { useContext } from 'react';
import './Header.css'
import logo from '../../../assets/Company-logo/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  // handle sign-Out button
  const handleSignOutBtn = () => {
    logOut()
    .then()
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className='me-5 fs-5' to='/'>Home</Link>
            <Link className='me-5 fs-5' to='/blog'>Blog</Link>
          </Nav>
          <Nav className="ms-auto">
            {
              user ?
                <>
                  <FaUserCircle className='fs-1 me-3'></FaUserCircle>
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