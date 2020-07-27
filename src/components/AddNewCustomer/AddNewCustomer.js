import React from 'react';
import { Form, Button  } from 'react-bootstrap';

const AddNewCustomer = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                <Form.Text className="text-muted">
                Please enter customer name here.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Age" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddNewCustomer;