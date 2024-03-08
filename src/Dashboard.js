// Dashboard.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';


function Dashboard() {
  return (
    <div className='main-container'>
      <Container>
      <h1 className='text-center mt-3'>Dataneuron Admin</h1>
      <Row className='m-5'>
        <Col md={6} lg={4}>
      <Card1 />
      </Col>
      <Col md={6} lg={8}>
      <Card2 />
      </Col>
      <Col md={12} lg={12}>
      <Card3 />
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
