import React, { useState } from 'react';
import { Navbar } from 'react-bulma-components';
// import { Navbar } from 'react-bulma-components/lib';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-brand,
  .navbar-item,
  .navbar-link {
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
        <Navbar.Brand href='/'>
          <Navbar.Item>Navbar Brand</Navbar.Item>
          <Navbar.Burger onClick={() => setOpen(!open)} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position='end'>
            <Navbar.Item href='/'>Home</Navbar.Item>
            <Navbar.Item href='/newsletter'>Newsletter</Navbar.Item>
            <Navbar.Item href='/about'>About</Navbar.Item>
            <Navbar.Item href='/contact'>Contact</Navbar.Item>
            <Navbar.Item href='/status'>Status</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
