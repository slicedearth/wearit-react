// THIRD PARTY IMPORTS
import React from 'react';
import { Section, Container } from 'react-bulma-components';
import { ThemeProvider } from 'styled-components';
// CUSTOM IMPORTS
import Jumbotron from './layout/Jumbotron/Jumbotron';
import { homeHead, homeText } from './layout/Jumbotron/props';
import { homeTheme } from './layout/Jumbotron/themes';

const Home = () => {
  // HOME COMPONENT
  return (
    <div>
      <ThemeProvider theme={homeTheme}>
        <Jumbotron title={homeHead} text={homeText} />
      </ThemeProvider>
      <Section>
        <Container>{/* ... */}</Container>
      </Section>
    </div>
  );
};

export default Home;
