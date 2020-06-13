// THIRD PARTY IMPORTS
import React, { useState } from 'react';
import { Navbar } from 'react-bulma-components';
import styled from 'styled-components';

// CUSTOM CSS FOR DIV
const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-menu {
    background-color: #222;
  }
  .navbar-item {
    user-select: none;
  }
  .navbar-brand,
  .navbar-item,
  .navbar-link,
  .navbar-menu {
    color: #bbb;
    &:hover {
      background-color: #222;
      color: #00d1b2;
    }
  }
`;

const NavigationBar = () => {
  // SET HAMBURGER MENU STATE
  const [open, setOpen] = useState(false);
  return (
    <Styles>
      <Navbar expand='large' active={open}>
        {/* NAVBAR BRAND */}
        <Navbar.Brand>
          <Navbar.Item className='is-size-3' href='/'>
            Navbar Brand
          </Navbar.Item>
          {/* MODIFY HAMBURGER MENU STATE ON CLICK */}
          <Navbar.Burger onClick={() => setOpen(!open)} />
        </Navbar.Brand>
        {/* NAVBAR MENU ITEMS */}
        <Navbar.Menu>
          <Navbar.Container position='end'>
            {/* HOME LINK */}
            <Navbar.Item
              className='has-text-centered-touch is-size-4-touch'
              href='/'
            >
              Home
            </Navbar.Item>
            {/* NEWSLETTER LINK */}
            <Navbar.Item
              className='has-text-centered-touch is-size-4-touch'
              href='/newsletter'
            >
              Newsletter
            </Navbar.Item>
            {/* ABOUT LINK */}
            <Navbar.Item
              className='has-text-centered-touch is-size-4-touch'
              href='/about'
            >
              About
            </Navbar.Item>
            {/* CONTACT LINK */}
            <Navbar.Item
              className='has-text-centered-touch is-size-4-touch'
              href='/contact'
            >
              Contact
            </Navbar.Item>
            {/* STATUS LINK */}
            <Navbar.Item
              className='has-text-centered-touch is-size-4-touch'
              href='/status'
            >
              Status
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
