import React, { useState } from 'react';
import { Navbar } from 'react-bulma-components';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    height: 5vh;
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
      color: yellow;
    }
  }
`;

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Styles>
      <Navbar expand='large' active={open}>
        <Navbar.Brand>
          <Navbar.Item className='is-size-3' href='/'>
            Navbar Brand
          </Navbar.Item>
          <Navbar.Burger onClick={() => setOpen(!open)} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position='end'>
            <Navbar.Item
              className='has-text-centered-touch is-size-4-touch'
              href='/'
            >
              Home
            </Navbar.Item>
            <Navbar.Item
              className='has-text-centered-touch is-size-4-touch'
              href='/newsletter'
            >
              Newsletter
            </Navbar.Item>
            <Navbar.Item
              className='has-text-centered-touch is-size-4-touch'
              href='/about'
            >
              About
            </Navbar.Item>
            <Navbar.Item
              className='has-text-centered-touch is-size-4-touch'
              href='/contact'
            >
              Contact
            </Navbar.Item>
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
