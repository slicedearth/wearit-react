import React, { useState } from 'react';
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
import axios from 'axios';
const Newsletter = () => {
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
    message: '',
  });
  const { color, message } = notificationData;
  const { firstName, lastName, email } = formData;
  //   ASSIGN INPUT DATA TO FORMDATA
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // SUBMIT NEWSLETTER REQUEST
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${firstName} ${lastName}`);
    console.log(email);
    try {
      const res = await axios.post('/api/newsletter', formData);
      console.log(res);
      //   alert(res.data);
      setShow(true);
      setNotificationData({ color: 'success', message: res.data });
    } catch (error) {
      console.log(error);
      //   alert(error.response.data);
      setShow(true);
      setNotificationData({ color: 'danger', message: error.response.data });
    }
  };

  return (
    <Section>
      <Container>
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

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* FIRST NAME */}
          <Field>
            <Label size='large'>Name</Label>
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
          {/* LAST NAME */}
          <Field>
            <Label size='large'>Last Name</Label>
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

          {/* EMAIL */}
          <Field>
            <Label size='large'>Email</Label>
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
            Submit
          </Button>
        </form>
      </Container>
    </Section>
  );
};
export default Newsletter;
