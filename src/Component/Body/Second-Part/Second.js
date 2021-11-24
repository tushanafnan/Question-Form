import React from 'react';
import './Second.css'
import { Card, Col, Container, Form, FormControl, InputGroup, Nav, Row } from 'react-bootstrap';

const Second = () => {
    return (
        <div className=' container d-flex cont-wrap ' >
             <div className='container me-5 text-center w-100'>
   <Card className="box wrap-box">
  <Card.Body>
   <Container>
  <Row>
    <Col xs={{ order: 'last' }}>
        <div>
    <h2 className='color  fs-3'>What is size of Earth?</h2>
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
  </div>
  <i className="fas fa-plus-circle color fs-4 mt-3 ms-5"> Add Optional</i>
    </Col>
  </Row>
</Container>
</Card.Body>
</Card>
</div>


<div  className='wrap-side d-flex justify-content-between container  mb-5 rounded-3 fs-4 text-center i-color'>
             <Nav  className="border rounded-3 flex-column nav-color">
             <i className=" mt-3 fas fa-plus-circle "> </i>
             <i class="mt-5 fas fa-images "></i>
             <i class=" mt-5 far fa-clone"></i>
             <i class="mt-5 far fa-trash-alt"></i>
             <i class="mt-5 mb-3 rounded-cricle fas fa-equals"></i>
              </Nav>
             </div>



             </div>

    );
};

export default Second;