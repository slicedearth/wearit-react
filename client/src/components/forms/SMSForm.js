// THIRD PARTY IMPORTS
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Notification } from 'react-bulma-components';
import Field from 'react-bulma-components/lib/components/form/components/field';
import Control from 'react-bulma-components/lib/components/form/components/control';
import Input from 'react-bulma-components/lib/components/form/components/input';
import Label from 'react-bulma-components/lib/components/form/components/label';
import Textarea from 'react-bulma-components/lib/components/form/components/textarea';
import styled from 'styled-components';
// ILLUSTRATION IMPORT
import smsIMG from '../../assets/illustrations/undraw_texting_k35o.svg';

// CUSTOM CSS FOR IMAGE
const IMG = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-height: 40vh;
`;
const SMSForm = () => {
  // SMS INITIAL STATE
  const [smsData, setSmsData] = useState({
    name: '',
    number: '',
    txtMessage: '',
  });

  // SET NOTIFICATION STATE
  const [show, setShow] = useState(false);
  const [notificationData, setNotificationData] = useState({
    color: 'danger',
    msg: '',
  });

  // SMS DATA
  const { name, number, txtMessage } = smsData;
  // NOTIFICATION DATA
  const { color, msg } = notificationData;
  //   ASSIGN INPUT DATA TO SMSDATA
  const onChange = (e) => {
    setSmsData({ ...smsData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(smsData);
    try {
      // SEND SMSDATA TO API ROUTE
      const res = await axios.post('/api/contact/sms', smsData);
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
    <div>
      {/* SMS FORM */}
      <h1 className='is-size-2 has-text-centered has-text-weight-bold'>
        Send Us an SMS!
      </h1>
      <IMG src={smsIMG} alt='SMS' />
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

      <form onSubmit={handleSubmit}>
        {/* NAME FIELD */}
        <Field>
          <Label size='large'>Name</Label>
          <Control>
            <Input
              size='large'
              type='text'
              name='number'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => onChange(e)}
            ></Input>
          </Control>
        </Field>
        {/* PHONE NUMBER FIELD */}
        <Field>
          <Label size='large'>Phone Number</Label>
          <Control>
            <Input
              size='large'
              type='text'
              name='number'
              placeholder='Enter your phone number'
              value={number}
              onChange={(e) => onChange(e)}
            ></Input>
          </Control>
        </Field>
        {/* TEXT MESSAGE FIELD */}
        <Field>
          <Label size='large'>Text Message</Label>
          <Control>
            <Textarea
              size='large'
              name='txtMessage'
              placeholder='Enter your text message'
              value={txtMessage}
              onChange={(e) => onChange(e)}
            ></Textarea>
          </Control>
        </Field>
        {/* SUBMIT BUTTON */}
        <Button size='large' fullwidth={true} color='primary'>
          Send
        </Button>
      </form>
    </div>
  );
};
export default SMSForm;
