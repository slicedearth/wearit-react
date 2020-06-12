import React, { Fragment } from 'react';
import { Section, Container } from 'react-bulma-components';
import Jumbotron from './layout/Jumbotron';
import EmailForm from './EmailForm';
import SMSForm from './SMSForm';
const About = () => {
  const contactHead = (
    <Fragment>
      <h1 className='has-text-centered has-text-weight-bold'>Contact Us</h1>
    </Fragment>
  );

  const contactText = (
    <Fragment>
      <p className='is-size-4 has-text-centered'>
        If you have any enquiries feel free to fill out the form below.
      </p>
      <br />
      <p className='is-size-4 has-text-centered'>
        While you're here you could also send an SMS reminder to yourself or a
        friend to check out our site!
      </p>
    </Fragment>
  );
  return (
    <div>
      <Jumbotron title={contactHead} text={contactText}>
        <p>dsahjkfchdsajlkfhcdajl</p>
        <h1 className='is-size-1'>hsdauifdhgcidshgb</h1>
      </Jumbotron>
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
