import React from 'react';
import { Section, Container } from 'react-bulma-components';
import Jumbotron from './layout/Jumbotron';
import EmailForm from './EmailForm';
import SMSForm from './SMSForm';
const About = () => {
  const Head = 'Contact Us';
  const Text =
    "If you have any enquiries feel free to fill out the form below. While you're here you could also send an SMS reminder to yourself or a friend to check out our site!";
  return (
    <div>
      <Jumbotron title={Head} text={Text} />
      <Section>
        <Container>
          <EmailForm />
        </Container>
      </Section>
      <Section>
        <Container>
          <SMSForm />
        </Container>
      </Section>
    </div>
  );
};

export default About;
