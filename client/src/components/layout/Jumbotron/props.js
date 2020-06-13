// THIRD PARTY IMPORTS
import React, { Fragment } from 'react';

// CUSTOM PROPS FOR JUMBOTRON COMPONENT
// HOME
const homeHead = (
  <Fragment>
    <h1 className='has-text-centered has-text-weight-bold'>
      Welcome To Company Name
    </h1>
  </Fragment>
);
const homeText = (
  <Fragment>
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      alias nemo ratione hic delectus incidunt debitis repudiandae sed! Vero
      reiciendis consectetur corporis aperiam error? Asperiores iure porro
      debitis exercitationem voluptate?
    </p>
  </Fragment>
);
// NEWSLETTER
const newsletterHead = (
  <Fragment>
    <h1 className='has-text-centered has-text-weight-bold'>Newsletter</h1>
  </Fragment>
);
const newsletterText = (
  <Fragment>
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      Receive the latest news about our products as well as exclusive deals!
    </p>
  </Fragment>
);
// ABOUT
const aboutHead = (
  <Fragment>
    <h1 className='has-text-centered has-text-weight-bold'>About Us</h1>
  </Fragment>
);
const aboutText = (
  <Fragment>
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      Some information about our company
    </p>
  </Fragment>
);

// NOTFOUND
const errorHead = (
  <Fragment>
    <h1 className='has-text-centered has-text-weight-bold'>ERROR!</h1>
  </Fragment>
);
const errorText = <Fragment></Fragment>;

// CONTACT
const contactHead = (
  <Fragment>
    <h1 className='has-text-centered has-text-weight-bold'>Contact Us</h1>
  </Fragment>
);
const contactText = (
  <Fragment>
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      If you have any enquiries feel free to fill out the form below.
    </p>
    <br />
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      While you're here you could also send an SMS reminder to yourself or a
      friend to check out our site!
    </p>
  </Fragment>
);

export {
  homeHead,
  homeText,
  newsletterHead,
  newsletterText,
  aboutHead,
  aboutText,
  errorHead,
  errorText,
  contactHead,
  contactText,
};
