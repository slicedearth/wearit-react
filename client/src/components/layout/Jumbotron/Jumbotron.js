// THIRD PARTY IMPORTS
import React from 'react';
import { Hero } from 'react-bulma-components';
import styled from 'styled-components';
// ILLUSTRATION IMPORT
import homeBackground from '../../../assets/patterns/glamorous.svg';

// DEFAULT STYLING FOR BULMA HERO COMPONENT
const StyledHero = styled(Hero)`
  background: linear-gradient(
      ${(props) =>
        props.theme.overlayColor ||
        `rgba(0, 209, 178, 0.95),
  rgba(0, 181, 173, 0.95)`}
    ),
    url(${(props) => props.theme.backgroundImg || homeBackground}) center center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor || '#efefef'};
  min-height: ${(props) => props.theme.jumboHeight || '20vh'};
  .hero-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-foot {
    padding: 0 2rem 2rem 2rem;
    text-shadow: 1px 1px 1px #191919;
  }
  h1 {
    text-shadow: 2px 2px 2px #191919;
    font-family: ${(props) =>
      props.theme.headFont ||
      `BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`};
    font-size: ${(props) => props.theme.headSize || '3rem'};
    /* padding: 0 2rem; */
  }
`;
// CUSTOM JUMBOTRON COMPONENT
const Jumbotron = ({ title, text }) => {
  return (
    <StyledHero>
      <StyledHero.Head>
        {/* HERO TITLE PROP */}
        {title}
      </StyledHero.Head>
      <StyledHero.Footer>
        {/* HERO TEXT PROP */}
        {text}
      </StyledHero.Footer>
    </StyledHero>
  );
};
export default Jumbotron;
// export {
//   errorHead,
//   errorText,
//   errorTheme,
//   contactHead,
//   contactText,
//   contactTheme,
// };
