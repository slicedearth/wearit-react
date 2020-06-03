import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button } from 'react-bulma-components';
const Styles = styled.div`
  background-color: palegreen;
  color: black;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
`;
const Status = () => {
  const [serverStatus, setServerStatus] = useState({
    message: '',
  });
  const getServerStatus = async () => {
    try {
      const res = await axios.get('/api/status');
      setServerStatus({ message: res.data });
    } catch (error) {
      if (error.response.status === 500) {
        setServerStatus({ message: 'The server is not running!' });
      } else {
        setServerStatus({ message: 'Unexpected Error!' });
      }
    }
  };
  return (
    <Styles>
      <div>
        <Button onClick={() => getServerStatus()}>Button</Button>
        <br />
        {serverStatus.message}
      </div>
    </Styles>
  );
};
export default Status;
