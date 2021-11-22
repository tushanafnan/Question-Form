import React from 'react';
import { Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Six.css'
const Six = () => {
    return (
    <div className='container w-50'>
    
    <Card className="box vh">
    <Card.Body>
    <Container>
    <Row>
        <Col xs={{ order: 'last' }}>
            <div>
        
    <Form>
    <Form.Control className='border-0' type="text" placeholder="Type your questions here" />
    <hr />
    </Form>
        <h2 className='text-center mb-5 mt-5 fs-1 or-color'> <b>OR</b> </h2>
        <Form>
    <Form.Control className='border-0' type="text" placeholder="Type your questions here" />
    <hr />
    </Form>
    </div>

        </Col>
        


        <Col xs={{ order: 'first' }}>
            <div >
    
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
    <Form.Group className="mb-3 color">
        <Form.Label>No. of question mandatory to attempt</Form.Label>
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

export default Six;