// THIRD PARTY IMPORTS
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button } from 'react-bulma-components';
// CUSTOM CSS FOR DIV
const Styles = styled.div`
  background-color: palegreen;
  color: black;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
`;
const Status = () => {
  // SET STATUS STATE
  const [serverStatus, setServerStatus] = useState({
    message: '',
  });
  const getServerStatus = async () => {
    try {
      // GET DATA FROM API ROUTE
      const res = await axios.get('/api/status');
      // SET STATUS CONTENT
      setServerStatus({ message: res.data });
    } catch (error) {
      // IF THE SERVER RESPONDS WITH A 500 RESPONSE CODE...
      if (error.response.status === 500) {
        // SET STATUS CONTENT
        setServerStatus({ message: 'The server is not running!' });
      } else {
        // SET STATUS CONTENT
        setServerStatus({ message: 'Unexpected Error!' });
      }
    }
  };
  return (
    <Styles>
      <div>
        {/* CHECK SERVER STATUS ON CLICK */}
        <Button onClick={() => getServerStatus()}>Check Server Status</Button>
        <br />
        <p className='is-family-code'>{serverStatus.message}</p>
      </div>
    </Styles>
  );
};
export default Status;
