import React from 'react';
import { Hero, Section } from 'react-bulma-components';
import styled from 'styled-components';
import boatImage from '../../assets/boat.jpg';
const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => {
  return (
    <Styles>
      <Hero className='jumbo'>
        <div className='overlay'>
          <Section>
            <h1>Welcome</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus alias nemo ratione hic delectus incidunt debitis
              repudiandae sed! Vero reiciendis consectetur corporis aperiam
              error? Asperiores iure porro debitis exercitationem voluptate?
            </p>
          </Section>
        </div>
      </Hero>
    </Styles>
  );
};

export default Jumbotron;
