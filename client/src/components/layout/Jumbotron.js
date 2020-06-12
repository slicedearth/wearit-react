import React from 'react';
import { Hero, Section } from 'react-bulma-components';
import styled from 'styled-components';
import boatImage from '../../assets/boat.jpg';
const Styles = styled(Hero)`
  background: url(${(props) => props.theme.backgroundImg || boatImage})
    no-repeat fixed bottom;
  background-size: cover;
  color: ${(props) => props.theme.textColor || '#efefef'};

  height: ${(props) => props.theme.jumboHeight || '50vh'};
  position: relative;
  z-index: -2;
  h1 {
    text-shadow: 3px 2px 1px #191919;
    font-family: ${(props) =>
      props.theme.headFont ||
      `BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`};
    font-size: ${(props) => props.theme.headSize || '6rem'};
  }
  div {
    background-color: ${(props) => props.theme.overlayColor || '#000'};
    opacity: ${(props) => props.theme.overlayOpacity || '0.6'};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  p {
    padding: 0 2rem;
  }
`;

const Jumbotron = ({ title, text }) => {
  return (
    // <ThemeProvider theme>
    <Styles>
      {/* <Hero> */}
      {/* <Hero className={className}> */}
      <div>
        <Section>{title}</Section>
        <Section>{text}</Section>
      </div>
      {/* </Hero> */}
      {/* </Hero> */}
    </Styles>
    // </ThemeProvider>
  );
};

export default Jumbotron;
