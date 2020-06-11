import React, { useState } from 'react';
import axios from 'axios';
import { Button, Notification } from 'react-bulma-components';
import Field from 'react-bulma-components/lib/components/form/components/field';
import Control from 'react-bulma-components/lib/components/form/components/control';
import Input from 'react-bulma-components/lib/components/form/components/input';
import Label from 'react-bulma-components/lib/components/form/components/label';
import Textarea from 'react-bulma-components/lib/components/form/components/textarea';
const EmailForm = () => {
  // FORM INITIAL STATE
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  // SET NOTIFICATION STATE
  const [show, setShow] = useState(false);
  const [notificationData, setNotificationData] = useState({
    color: 'danger',
    msg: '',
  });
  // FORM DATA
  const { firstName, lastName, email, subject, message } = formData;
  // NOTIFICATION DATA
  const { color, msg } = notificationData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post('/api/contact/email', formData);
      console.log(res);
      setShow(true);
      setNotificationData({ color: 'success', msg: res.data });
    } catch (error) {
      console.log(error);
      setShow(true);
      setNotificationData({
        color: 'danger',
        msg: error.response.data,
      });
    }
  };

  return (
    <div>
      <h1 className='is-size-2 has-text-centered has-text-weight-bold'>
        Contact Form
      </h1>
      {/* NOTIFICATION */}
      {show === true ? (
        <Notification className='mt-5' color={color}>
          <Button remove onClick={() => setShow(false)} />
          <h1 className='is-size-2 has-text-centered is-family-code'>
            {color === 'success' ? 'Success!' : 'Oops...something went wrong. '}
          </h1>
          <p>{msg}</p>
        </Notification>
      ) : null}
      <form onSubmit={handleSubmit}>
        {/* FIRST NAME */}
        <Field>
          <Label size='large'>First Name</Label>
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
        {/* SUBJECT */}
        <Field>
          <Label size='large'>Subject</Label>
          <div className='control'>
            <div className='select is-fullwidth is-large'>
              <select
                name='subject'
                value={subject}
                onChange={(e) => onChange(e)}
              >
                <option>SELECT A SUBJECT</option>
                <option>General</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </Field>
        {/* <Field>
              <Label>Subject</Label>
              <Control>
                <Select>
                  <option>General</option>
                  <option>Other</option>
                </Select>
              </Control>
            </Field> */}
        {/* MESSAGE */}
        <Field>
          <Label size='large'>Message</Label>
          <Control>
            <Textarea
              size='large'
              name='message'
              placeholder='Enter your message'
              value={message}
              onChange={(e) => onChange(e)}
            ></Textarea>
          </Control>
        </Field>
        {/* SUBMIT BUTTON */}
        <Button size='large' fullwidth={true} color='primary'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EmailForm;
