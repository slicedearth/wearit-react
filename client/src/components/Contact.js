// THIRD PARTY IMPORTS
import React from 'react';
import { Section, Container } from 'react-bulma-components';
import styled, { ThemeProvider } from 'styled-components';
// ILLUSTRATION IMPORTS
import contactIMG from '../assets/illustrations/undraw_message_sent_1030.svg';
import smsIMG from '../assets/illustrations/undraw_texting_k35o.svg';
// CUSTOM IMPORTS
import Jumbotron from './layout/Jumbotron/Jumbotron';
import { contactHead, contactText } from './layout/Jumbotron/props';
import { contactTheme } from './layout/Jumbotron/themes';
import EmailForm from './EmailForm';
import SMSForm from './SMSForm';
// CUSTOM CSS FOR IMAGE
const IMG = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 30vw;
`;
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
          <h1 className='is-size-2 has-text-centered has-text-weight-bold'>
            Contact Form
          </h1>
          <IMG src={contactIMG} alt='Email Contact' />
          <EmailForm />
        </Container>
      </Section>
      {/* SMS FORM */}
      <Section>
        <Container>
          <h1 className='is-size-2 has-text-centered has-text-weight-bold'>
            SMS Reminder
          </h1>
          <IMG src={smsIMG} alt='SMS' />
          <SMSForm />
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
