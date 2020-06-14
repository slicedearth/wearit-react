// THIRD PARTY IMPORTS
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Section, Container } from 'react-bulma-components';
// ILLUSTRATION IMPORT
import nfIMG from '../../assets/illustrations/undraw_page_not_found_su7k.svg';
// CUSTOM IMPORTS
import Jumbotron from '../layout/Jumbotron/Jumbotron';
import { errorHead } from '../layout/Jumbotron/props';
import { errorTheme } from '../layout/Jumbotron/themes';
// CUSTOM CSS FOR IMAGE
const IMG = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 30vw;
`;
// CUSTOM CSS FOR ANCHOR TAG
const A = styled.a`
  color: #bbb;
  &:hover {
    color: #00d1b2;
  }
`;
const NotFound = () => {
  // NOT FOUND COMPONENT
  return (
    <div>
      <ThemeProvider theme={errorTheme}>
        <Jumbotron title={errorHead} />
      </ThemeProvider>
      <Section>
        <Container>
          <h1 className=' is-size-1 has-text-centered has-text-weight-bold'>
            Page Not Found
          </h1>
          <h3 className=' is-size-3 has-text-centered has-text-weight-bold is-italic'>
            You may have been directed here by a broken link, if so please let
            us know using the <A href='/contact'>contact</A> form.
          </h3>
          <IMG src={nfIMG} alt='404' />
        </Container>
      </Section>
    </div>
  );
};

export default NotFound;
