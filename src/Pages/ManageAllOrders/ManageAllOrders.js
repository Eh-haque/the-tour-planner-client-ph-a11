import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/add_plan')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Manage All Orders</h2>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>ID</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            {/* {
                    orders.map(order => {
                        order._id
                    })
                } */}
                            {
                                orders?.map((order, index) =>
                                    <tbody key={order._id}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{order.title}</td>
                                            <td>{order.owner}</td>
                                            <td>{order._id}</td>
                                            <td><Button>Update</Button></td>
                                            <td><Button variant='danger'>Delete</Button></td>
                                        </tr>
                                    </tbody>
                                )
                            }
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrders;