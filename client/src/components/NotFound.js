import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Jumbotron from './layout/Jumbotron';
import errorImage from '../assets/undraw_page_not_found_su7k.svg';

const errorTheme = {
  textColor: 'red',
  headFont: 'monospace',
  headSize: '12rem',
  // overlayColor: '#ff3860',
  overlayOpacity: '0.8',
  backgroundImg: errorImage,
  jumboHeight: '95vh',
};

const NotFound = () => {
  const errorHead = (
    <Fragment>
      <h1 className='has-text-centered has-text-weight-bold'>ERROR!</h1>
    </Fragment>
  );
  const errorText = (
    <Fragment>
      <p className='is-size-1 has-text-centered has-text-weight-bold'>
        Page Not Found
      </p>
    </Fragment>
  );
  // const errorText = 'Page Not Found';
  return (
    <div>
      <ThemeProvider theme={errorTheme}>
        <Jumbotron title={errorHead} text={errorText} />
      </ThemeProvider>
      {/* <H1 className='has-text-weight-bold has-text-centered'>Page Not Found</H1> */}
    </div>
  );
};

export default NotFound;
