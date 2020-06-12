import React, { useState, Fragment } from 'react';
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
import Jumbotron from './layout/Jumbotron';

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
    msg: '',
  });
  const { color, msg } = notificationData;
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
      setShow(true);
      setNotificationData({ color: 'success', msg: res.data });
    } catch (error) {
      console.log(error);
      setShow(true);
      setNotificationData({ color: 'danger', msg: error.response.data });
    }
  };
  // JUMBOTRON PROPS
  const newsletterHead = (
    <Fragment>
      <h1 className='has-text-centered has-text-weight-bold'>
        Newsletter Signup
      </h1>
    </Fragment>
  );
  const newsletterText = (
    <Fragment>
      <p className='is-size-4 has-text-centered'>
        Recieve the latest news about our products as well as exclusive deals!;
      </p>
    </Fragment>
  );
  return (
    <div>
      <Jumbotron title={newsletterHead} text={newsletterText} />
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
              <p>{msg}</p>
            </Notification>
          ) : null}

          {/* NEWSLETTER SIGN UP FORM */}
          <form onSubmit={handleSubmit}>
            {/* FIRST NAME FIELD */}
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
            {/* LAST NAME FIELD */}
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

            {/* EMAIL FIELD */}
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
    </div>
  );
};
export default Newsletter;
