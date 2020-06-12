import React, { Fragment } from 'react';
import { Section, Container } from 'react-bulma-components';
import Jumbotron from './layout/Jumbotron';

const About = () => {
  const aboutHead = (
    <Fragment>
      <h1 className='has-text-centered has-text-weight-bold'>About Us</h1>
    </Fragment>
  );
  const aboutText = (
    <Fragment>
      <p className='is-size-4 has-text-centered'>
        Some information about our company
      </p>
    </Fragment>
  );
  return (
    <div>
      <Jumbotron title={aboutHead} text={aboutText} />
      <Section>
        <Container>{/* ... */}</Container>
      </Section>
    </div>
  );
};

export default About;
