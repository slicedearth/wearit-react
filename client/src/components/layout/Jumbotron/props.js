// THIRD PARTY IMPORTS
import React, { Fragment } from 'react';

// CUSTOM PROPS FOR JUMBOTRON COMPONENT
// HOME
const homeHead = (
  <Fragment>
    <h1 className='has-text-centered has-text-weight-bold'>
      Welcome To WearIt!
    </h1>
  </Fragment>
);
const homeText = (
  <Fragment>
    <p className='is-size-2 has-text-centered is-italic has-text-weight-semibold'>
      Soon to be Australia's premiere fashion retailer!
    </p>
    <br />
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      We're happy to announce that our online store will be launching this
      Spring.
    </p>
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      Sign up to our newsletter to get the latest updates!
    </p>
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      Until then, feel free to browse our website and use the contact form if
      you have any enquiries.
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
      Receive the latest updates, sneak peeks at upcoming products, as well as
      exclusive deals once the online store launches!
    </p>
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      While you're here, why not tell a friend about us by using the SMS form
      below!
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
      Phone Number: (02) 5550 1095
    </p>
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      Address: 1638 Willow Avenue, Sydney, NSW 2000
    </p>
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      In Store Trading Hours: 9:00am - 5:00pm Monday - Saturday
    </p>
    <br />
    <p className='is-size-3 has-text-centered is-italic has-text-weight-semibold'>
      If you have any enquiries feel free to fill out the form below.
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
