// THIRD PARTY IMPORTS
import React from 'react';
import { Hero } from 'react-bulma-components';
import styled from 'styled-components';
// ILLUSTRATION IMPORT
import homeBackground from '../../../assets/patterns/pixel-dots.svg';

// DEFAULT STYLING FOR BULMA HERO COMPONENT
const StyledHero = styled(Hero)`
  background: linear-gradient(
      ${(props) =>
        props.theme.overlayColor ||
        `rgba(0, 209, 178, 0.95),
  rgba(0, 181, 173, 0.95)`}
    ),
    url(${(props) => props.theme.backgroundImg || homeBackground}) center center;
  /* background-size: cover; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor || '#efefef'};
  min-height: ${(props) => props.theme.jumboHeight || '30vh'};
  .hero-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-foot {
    padding: 0 4rem 4rem 4rem;
    text-shadow: 1px 1px 1px #191919;
  }
  h1 {
    text-shadow: 2px 2px 2px #191919;
    font-family: ${(props) =>
      props.theme.headFont ||
      `BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`};
    font-size: ${(props) => props.theme.headSize || '4rem'};
    padding: 0 2rem;
  }
  /* p {
    padding: 0 2rem;
  } */
`;
// PROPS
// NOTFOUND
// const errorHead = (
//   <Fragment>
//     <h1 className='has-text-centered has-text-weight-bold'>ERROR!</h1>
//   </Fragment>
// );
// const errorText = (
//   <Fragment>
//     <p className='is-size-1 has-text-centered has-text-weight-bold'>
//       Page Not Found
//     </p>
//   </Fragment>
// );
// // CONTACT
// const contactHead = (
//   <Fragment>
//     <h1 className='has-text-centered has-text-weight-bold'>Contact Us</h1>
//   </Fragment>
// );
// const contactText = (
//   <Fragment>
//     <p className='is-size-4 has-text-centered'>
//       If you have any enquiries feel free to fill out the form below.
//     </p>
//     <br />
//     <p className='is-size-4 has-text-centered'>
//       While you're here you could also send an SMS reminder to yourself or a
//       friend to check out our site!
//     </p>
//   </Fragment>
// );
// THEMES
// const errorTheme = {
//   textColor: 'red',
//   headFont: 'monospace',
//   headSize: '12rem',
//   // overlayColor: '#ff3860',
//   overlayOpacity: '0.8',
//   backgroundImg: errorImage,
//   jumboHeight: '95vh',
// };
// const contactTheme = {
//   textColor: 'blue',
//   // headFont: 'monospace',
//   headSize: '8rem',
//   overlayOpacity: '0.8',
//   backgroundImg: errorImage,
//   jumboHeight: '70vh',
// };

// CUSTOM JUMBOTRON COMPONENT
const Jumbotron = ({ title, text }) => {
  return (
    <StyledHero>
      <StyledHero.Body>
        {/* HERO TITLE PROP */}
        {title}
      </StyledHero.Body>
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
