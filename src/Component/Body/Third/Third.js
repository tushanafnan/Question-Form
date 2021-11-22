import React from 'react';
import './Third.css'
import { Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const Third = () => {
    return (
        <div className='container w-50'>
   
   <Card className="box">
  <Card.Body>
   <Container>
  <Row>
    <Col xs={{ order: 'last' }}>
        <div>
    <h4 className='color'>What is the size of the Earth?</h4>
    <Form>
    <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
    <Form.Control className='drop-color' placeholder='Paragraph' as="textarea" rows={3} />
  </Form.Group>
  </Form>
  </div>

    </Col>
    


    <Col xs={{ order: 'first' }}>
        <div className='vl'>
   
    <div className="dropdown h-100 w-100">
  <button className="btn drop-color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   <b> Paragraph </b>
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

export default Third;