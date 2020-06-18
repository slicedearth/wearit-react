// THIRD PARTY IMPORTS
import React from 'react';
import { Section, Container } from 'react-bulma-components';
import { ThemeProvider } from 'styled-components';
// CUSTOM IMPORTS
import Jumbotron from '../layout/Jumbotron/Jumbotron';
import { newsletterHead, newsletterText } from '../layout/Jumbotron/props';
import { newsletterTheme } from '../layout/Jumbotron/themes';
import NewsletterForm from '../forms/NewsletterForm';

const Newsletter = () => {
  // NEWSLETTER COMPONENT
  return (
    <div>
      <ThemeProvider theme={newsletterTheme}>
        <Jumbotron title={newsletterHead} text={newsletterText} />
      </ThemeProvider>
      <Section>
        <Container>
          <NewsletterForm />
        </Container>
      </Section>
    </div>
  );
};
export default Newsletter;
