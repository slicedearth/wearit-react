// THIRD PARTY IMPORTS
import React from 'react';
import { Section, Container } from 'react-bulma-components';
import styled, { ThemeProvider } from 'styled-components';
// ILLUSTRATION IMPORT
import aboutIMG from '../assets/illustrations/undraw_Waiting__for_you_ldha.svg';
// CUSTOM IMPORTS
import Jumbotron from './layout/Jumbotron/Jumbotron';
import { aboutHead, aboutText } from './layout/Jumbotron/props';
import { aboutTheme } from './layout/Jumbotron/themes';
// CUSTOM CSS FOR IMAGE
const IMG = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 30vw;
`;
const About = () => {
  // ABOUT COMPONENT
  return (
    <div>
      <ThemeProvider theme={aboutTheme}>
        <Jumbotron title={aboutHead} text={aboutText} />
      </ThemeProvider>
      <Section>
        <Container>
          <IMG src={aboutIMG} alt='About' />
        </Container>
      </Section>
    </div>
  );
};

export default About;
