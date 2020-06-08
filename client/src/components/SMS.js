import React, { useState } from 'react';
import axios from 'axios';
import {
  Section,
  Button,
  Container,
  Notification,
} from 'react-bulma-components';
import Field from 'react-bulma-components/lib/components/form/components/field';
import Control from 'react-bulma-components/lib/components/form/components/control';
import Input from 'react-bulma-components/lib/components/form/components/input';
import Label from 'react-bulma-components/lib/components/form/components/label';
import Textarea from 'react-bulma-components/lib/components/form/components/textarea';
const SMS = () => {
  // SET NOTIFICATION STATE
  const [show, setShow] = useState(false);
  const [notificationData, setNotificationData] = useState({
    color: 'danger',
    message: '',
  });
  const { color, message } = notificationData;
  // SMS INITIAL STATE
  const [smsData, setSmsData] = useState({
    number: '',
    txtMessage: '',
  });
  // SMS DATA
  const { number, txtMessage } = smsData;

  const onChange = (e) => {
    setSmsData({ ...smsData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(smsData);
    try {
      const res = await axios.post('/api/contact/sms', smsData);
      console.log(res);
      //   setShow(true);
      //   setNotificationData({ color: 'success', message: res.data });
      alert(res.data);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
      //   setShow(true);
      //   setNotificationData({ color: 'danger', message: 'error.response.data' });
    }
  };
  return (
    <div>
      {/* CONTACT FORM */}
      <Section>
        <h1 className='is-size-2 has-text-centered has-text-weight-bold'>
          SMS Form
        </h1>
        {/* NOTIFICATION */}
        {show === true ? (
          <Notification className='mt-5' color={color}>
            <Button remove onClick={() => setShow(false)} />
            <h1 className='is-size-2 has-text-centered is-family-code'>
              {color === 'success'
                ? 'Success!'
                : 'Oops...something went wrong. '}
            </h1>
            <p>{message}</p>
          </Notification>
        ) : null}
        <Container>
          <form onSubmit={(e) => onSubmit(e)}>
            {/* PHONE NUMBER */}
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
            {/* TEXT MESSAGE */}
            <Field>
              <Label size='large'>Message</Label>
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
              Submit
            </Button>
          </form>
        </Container>
      </Section>
    </div>
  );
};
export default SMS;
