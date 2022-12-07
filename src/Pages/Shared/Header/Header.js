import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='success' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/home' className='navbar-title'>
          Education Board
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <div className='nav-link'>
              <CustomLink to='/schools'>Schools</CustomLink>
            </div>
            <div className='nav-link'>
              <CustomLink to='colleges'>Colleges</CustomLink>
            </div>
            <div className='nav-link'>
              <CustomLink to='aboutBoard'>About Board</CustomLink>
            </div>
          </Nav>
          <Nav>
            <div className='nav-link'>
              <CustomLink to='login'>Login</CustomLink>
            </div>
            <div className='nav-link'>
              <CustomLink to='signUp'>Sign Up</CustomLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
