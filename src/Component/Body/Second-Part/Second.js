import React from 'react';
import './Second.css'
import { Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const Second = () => {
    return (
        <div className='container w-50'>
   
   <Card className="box">
  <Card.Body>
   <Container>
  <Row>
    <Col xs={{ order: 'last' }}>
        <div>
    

    
  </div>

    </Col>
    


    <Col xs={{ order: 'first' }}>
        <div className='vl'>
   
    <div className="dropdown h-100 w-100">
  <button className="btn drop-color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   <b> Single Choice</b>
  </button>
  </div>
  <br />
  <Form>
  <Form.Group className="mb-3 color">
    <Form.Label>Total Marks</Form.Label>
  </Form.Group>
  <Form.Group className="mb-3 color">
    <Form.Label>Negative Marks</Form.Label>
  </Form.Group>


  </Form>
  </div>
    </Col>
  </Row>
</Container>
</Card.Body>
</Card>
            
        </div>
    );
};

export default Second;