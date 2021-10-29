// just my orders
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/add_plan')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    useEffect(() => {
        const foundOrder = orders.filter(order => order?.owner === user?.email);
        console.log(foundOrder);
        setOrder(foundOrder);
    }, [user?.email, setOrder?.owner, orders]);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Manage All Orders</h2>
                        <Table striped bordered hover>
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
                            {
                                order?.map((order, index) =>
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

export default MyOrders;