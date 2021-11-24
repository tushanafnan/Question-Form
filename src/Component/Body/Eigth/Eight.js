import React from 'react';
import './Eight.css'
import { Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
const Eight = () => {
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
         <Form.Group className="mb-3 text-center">
   <Form.Control value={`5
                        Marks`}  className="mb-2 text-center color" placeholder="Marks" disabled/>
  </Form.Group>
       </Form.Group>
       <Form.Group className="mb-3 color">
         <Form.Label>Negative Marks</Form.Label>
         <Form.Group className="mb-3 text-center">
   <Form.Control value={`-
                        Marks`}  className="mb-2 text-center color" placeholder="Marks" disabled />
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
     <br /> <br />
     <div className='container text-end'>
     
                 <button type="button" class="btn btn-two border-0 me-3">Discard</button>
                 <button type="button" class="btn btn-background border-rounded">Publish</button> 
                 </div>
             </div>
    );
};

export default Eight;