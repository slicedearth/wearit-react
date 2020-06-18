// THIRD PARTY IMPORTS
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Notification } from 'react-bulma-components';
import Field from 'react-bulma-components/lib/components/form/components/field';
import Control from 'react-bulma-components/lib/components/form/components/control';
import Input from 'react-bulma-components/lib/components/form/components/input';
import Label from 'react-bulma-components/lib/components/form/components/label';
import styled from 'styled-components';
// ILLUSTRATION IMPORT
import newsletterIMG from '../../assets/illustrations/undraw_subscriber_vabu.svg';
// CUSTOM CSS FOR IMAGE
const IMG = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-height: 40vh;
`;
const NewsletterForm = () => {
  // SET FORM STATE
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  // SET NOTIFICATION STATE
  const [show, setShow] = useState(false);
  const [notificationData, setNotificationData] = useState({
    color: 'danger',
    msg: '',
  });
  const { color, msg } = notificationData;
  const { firstName, lastName, email } = formData;
  //   ASSIGN INPUT DATA TO FORMDATA
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // SUBMIT NEWSLETTER FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`${firstName} ${lastName}`);
    // console.log(email);
    try {
      // SEND FORM DATA TO API ROUTE
      const res = await axios.post('/api/newsletter/signup', formData);
      console.log(res);
      // SHOW NOTIFICATION
      setShow(true);
      // SET NOTIFICATION CONTENT
      setNotificationData({ color: 'success', msg: res.data });
    } catch (error) {
      console.log(error);
      // SHOW NOTIFICATION
      setShow(true);
      // SET NOTIFICATION CONTENT
      setNotificationData({ color: 'danger', msg: error.response.data });
    }
  };

  return (
    // NEWSLETTER COMPONENT
    <div>
      <h1 className=' is-size-2 has-text-centered has-text-weight-bold'>
        Newsletter Signup Form
      </h1>
      <IMG src={newsletterIMG} alt='Sign Up' />
      {/* NOTIFICATION */}
      {show === true ? (
        <Notification color={color}>
          <Button remove onClick={() => setShow(false)} />
          <h1 className='is-size-2 has-text-centered is-family-code'>
            {color === 'success' ? 'Success!' : 'Oops...something went wrong. '}
          </h1>
          <p>{msg}</p>
        </Notification>
      ) : null}

      {/* NEWSLETTER FORM */}
      <form onSubmit={handleSubmit}>
        {/* FIRST NAME FIELD */}
        <Field>
          <Label size='large'>
            <span class='icon is-large is-left'>
              <i class='fas fa-user'></i>
            </span>
            First Name
          </Label>
          <Control>
            <Input
              size='large'
              type='text'
              name='firstName'
              placeholder='Enter your first name'
              value={firstName}
              onChange={(e) => onChange(e)}
            ></Input>
          </Control>
        </Field>
        {/* LAST NAME FIELD */}
        <Field>
          <Label size='large'>
            <span class='icon is-large is-left'>
              <i class='far fa-user'></i>
            </span>
            Last Name
          </Label>
          <Control>
            <Input
              size='large'
              type='text'
              name='lastName'
              placeholder='Enter your last name'
              value={lastName}
              onChange={(e) => onChange(e)}
            ></Input>
          </Control>
        </Field>

        {/* EMAIL FIELD */}
        <Field>
          <Label size='large'>
            <span class='icon is-large is-left'>
              <i class='fas fa-envelope'></i>
            </span>
            Email
          </Label>
          <Control>
            <Input
              size='large'
              type='email'
              name='email'
              placeholder='Enter your email address'
              value={email}
              onChange={(e) => onChange(e)}
            ></Input>
          </Control>
        </Field>
        {/* SUBMIT BUTTON */}
        <Button size='large' fullwidth={true} color='primary'>
          <span class='icon is-large is-left'>
            <i class='fab fa-mailchimp'></i>
          </span>
          &nbsp;Submit
        </Button>
      </form>
    </div>
  );
};
export default NewsletterForm;
