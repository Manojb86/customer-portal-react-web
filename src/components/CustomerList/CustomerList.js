import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button  } from 'react-bootstrap';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    
    useEffect(() => {
      const getCustomerApiUrl = 'https://5eeca4b35e298b0016b69f91.mockapi.io/api/v1/customers';
      axios.get(getCustomerApiUrl).then((data) => {
        setCustomers(data.data);
      })
    }, [setCustomers]);

    return (  
        <div>
            <br></br>
            <div>
            <h3>All customers</h3>
            </div>
            <br></br>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Package</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((res) => {
                    return (
                        <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.name}</td>
                            <td>{res.packageName}</td>
                            <td>
                                <Button variant="primary">View</Button>
                                <Button variant="success">Edit</Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            </Table>
        </div>
    );
}

export default CustomerList;