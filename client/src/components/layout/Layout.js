import React from 'react';
import { Section, Container } from 'react-bulma-components';

const Layout = (props) => (
  <Section>
    <Container>{props.children}</Container>
  </Section>
);

export default Layout;
