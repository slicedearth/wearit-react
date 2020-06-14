// THIRD PARTY IMPORTS
import React from 'react';
import { Section, Container } from 'react-bulma-components';
import { ThemeProvider } from 'styled-components';
// CUSTOM IMPORTS
import Jumbotron from '../layout/Jumbotron/Jumbotron';
import { newsletterHead, newsletterText } from '../layout/Jumbotron/props';
import { newsletterTheme } from '../layout/Jumbotron/themes';
import NewsletterForm from '../forms/NewsletterForm';
import SMSForm from '../forms/SMSForm';

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
      {/* SMS FORM */}
      <Section>
        <Container>
          <SMSForm />
        </Container>
      </Section>
    </div>
  );
};
export default Newsletter;
