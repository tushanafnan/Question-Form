import React from 'react';
import './Header.css'
import { Card, Form } from 'react-bootstrap';


const Header = () => {
    return (
       <div className='container w-50'>
<Card className="box">
  <Card.Body>
  <div className=' w-25 '>
  <Form>
  <Form.Control className='border-0 fs-4' size="lg" type="text" placeholder="Section Name" />

  <Form.Control className='border-0 fs-7' size="sm" type="text" placeholder="  Description (optional)" />
  <br />
 
    <div className="box-color">
      <Form.Check label={`Suffle Questions`}
      />

    </div>
</Form>
</div>
  </Card.Body>
</Card>
    
      </div>
    );
};

export default Header;