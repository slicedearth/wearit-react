// THIRD PARTY IMPORTS
import React from 'react';
import { Footer as BulmaFooter, Content } from 'react-bulma-components';
import styled from 'styled-components';
// CUSTOM CSS FOR ANCHOR TAG
const A = styled.a`
  color: #bbb;
  &:hover {
    color: #00d1b2;
  }
`;
const Footer = () => {
  return (
    <BulmaFooter>
      <Content className='has-text-centered has-text-weight-semibold'>
        <p>Website built with Bulma and React 2020</p>
        <p>
          Illustrations courtesy of{' '}
          <A
            href='https://undraw.co/'
            rel='noopener noreferrer'
            target='_blank'
          >
            unDraw
          </A>
        </p>
        <p>
          Patterns courtesy of{' '}
          <A
            href='http://heropatterns.com/'
            rel='noopener noreferrer'
            target='_blank'
          >
            Hero Patterns
          </A>
        </p>
      </Content>
    </BulmaFooter>
  );
};
export default Footer;
