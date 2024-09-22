import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css'

const App = () => {
  const firstName = 'John'; // Replace with your first name or leave empty

  return (
    <Container>
      <Card>
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : 'there!'}</p>
      {firstName && <Image />}
    </Container>
  );
};

export default App;