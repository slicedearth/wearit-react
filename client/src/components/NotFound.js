import React from 'react';
import styled from 'styled-components';
const H1 = styled.h1`
  font-size: 4rem;
  color: red;
`;
const NotFound = () => {
  return (
    <div>
      <H1 className='has-text-weight-bold has-text-centered'>404 Not Found</H1>
    </div>
  );
};

export default NotFound;
