// THIRD PARTY IMPORTS
import React from 'react';
import { Section, Container } from 'react-bulma-components';
import { ThemeProvider } from 'styled-components';
// CUSTOM IMPORTS
import Jumbotron from '../layout/Jumbotron/Jumbotron';
import { contactHead, contactText } from '../layout/Jumbotron/props';
import { contactTheme } from '../layout/Jumbotron/themes';
import EmailForm from '../forms/EmailForm';
import SMSForm from '../forms/SMSForm';

const Contact = () => {
  // CONTACT COMPONENT
  return (
    <div>
      <ThemeProvider theme={contactTheme}>
        <Jumbotron title={contactHead} text={contactText} />
      </ThemeProvider>
      {/* EMAIL FORM */}
      <Section>
        <Container>
          <EmailForm />
        </Container>
      </Section>
      {/* CONTACT FORM */}
      <Section>
        <Container>
          <SMSForm />
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
