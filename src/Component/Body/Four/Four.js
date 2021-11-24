import React from 'react';
import './Four.css'
import { Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const Four = () => {
    return (
        <div className='container w-50'>
   
        <Card className="box">
       <Card.Body>
        <Container>
       <Row>
         <Col xs={{ order: 'last' }}>
             <div>
         <h4 className='color'>What is the <hr /></h4>
         <div>
             <Form>
             <Form.Group controlId="formFile" className="mb-3">
    <Form.Label> <span className='color'> File Upload </span></Form.Label>
    <Form.Control type="file" />
  </Form.Group>
             </Form>
         </div>
       </div>
     
         </Col>
         
     
     
         <Col xs={{ order: 'first' }}>
             <div className='vl'>
        
         <div className="dropdown h-100 w-100">
       <button className="btn drop-color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <b> File Upload</b>
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
   <Form.Control value={`-
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
    );
};

export default Four;