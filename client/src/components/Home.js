import React, { Fragment } from 'react';
import { Section, Container } from 'react-bulma-components';
import Jumbotron from './layout/Jumbotron';

const Home = () => {
  const homeHead = (
    <Fragment>
      <h1 className='has-text-centered has-text-weight-bold'>Welcome!</h1>
    </Fragment>
  );
  const homeText = (
    <Fragment>
      <p className='is-size-4 has-text-centered'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        alias nemo ratione hic delectus incidunt debitis repudiandae sed! Vero
        reiciendis consectetur corporis aperiam error? Asperiores iure porro
        debitis exercitationem voluptate?
      </p>
    </Fragment>
  );
  return (
    <div>
      <Jumbotron title={homeHead} text={homeText} />
      <Section>
        <Container>{/* ... */}</Container>
      </Section>
    </div>
  );
};

export default Home;
