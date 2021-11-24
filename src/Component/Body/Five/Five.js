import React from 'react';
import { Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Five.css'
const Five = () => {
    return (
        <div className='container w-50'>
   
   <Card className="box">
  <Card.Body>
   <Container>
  <Row>
    <Col xs={{ order: 'last' }}>
        <div>
    
<Form>
<Form.Control className='border-0' type="text" placeholder="Type your questions here" />
  <hr />
</Form>
<Form>
    <InputGroup className="mb-3">
    <InputGroup.Checkbox   aria-label="Checkbox for following text input" />
    <FormControl aria-label="Text input with checkbox"   placeholder=' [A]              Option one' disabled />
  </InputGroup>
    <InputGroup className="mb-3">
    <InputGroup.Checkbox   aria-label="Checkbox for following text input" />
    <FormControl aria-label="Text input with checkbox"   placeholder=' [B]              Option two' disabled />
  </InputGroup>
    <InputGroup className="mb-3">
    <InputGroup.Checkbox   aria-label="Checkbox for following text input" />
    <FormControl aria-label="Text input with checkbox"   placeholder=' [C]              Option three ' disabled />
  </InputGroup>
    <InputGroup className="mb-3">
    <FormControl aria-label="Text input with checkbox"  className='text-center'  placeholder=" Add Option " />
  </InputGroup>
    
  </Form>
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
    <Form.Group className="mb-3 text-center">
   <Form.Control value={`5
                        Marks`}  className="mb-2 text-center color" placeholder="Marks" disabled/>
  </Form.Group>
  </Form.Group>
  <Form.Group className="mb-3 color">
    <Form.Label>Negative Marks</Form.Label>
    <Form.Group className="mb-3 text-center">
   <Form.Control value={`1
                        Marks`}  className="mb-2 text-center color" placeholder="Marks" disabled/>
  </Form.Group>
  </Form.Group>


  </Form>
  <i className="fas fa-plus-circle color fs-4 mt-3 ms-5"> Add Optional</i>
  </div>
    </Col>
  </Row>
</Container>
</Card.Body>
</Card>
            
        </div>
    );
};

export default Five;