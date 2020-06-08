import React, { useState } from 'react';
import axios from 'axios';
import { Section, Button, Container } from 'react-bulma-components';
import Field from 'react-bulma-components/lib/components/form/components/field';
import Control from 'react-bulma-components/lib/components/form/components/control';
import Input from 'react-bulma-components/lib/components/form/components/input';
import Label from 'react-bulma-components/lib/components/form/components/label';
import Textarea from 'react-bulma-components/lib/components/form/components/textarea';
// import Select from 'react-bulma-components/lib/components/form/components/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const { firstName, lastName, email, subject, message } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const form = await axios.post('/api/contact/email', {
      firstName,
      lastName,
      email,
      subject,
      message,
    });
    console.log(form);
  };
  return (
    <div>
      <h1 className='is-size-2 has-text-centered has-text-weight-bold'>
        Contact Form
      </h1>
      <Section>
        <Container>
          <form onSubmit={(e) => onSubmit(e)}>
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
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
