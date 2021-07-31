import React from 'react';
import { Row, Button } from "react-bootstrap";


const PresentRegistration = ({handleShowForm}) =>{
 return(<>
       <Row className="justify-content-center m-3 p-3">
          <h1>Registration Page</h1>
        </Row>
       <Button variant="primary" onClick={handleShowForm} >
            Open Registration Form
          </Button>
          </>)
}

export default PresentRegistration;