// just my orders
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:5000/add_plan')
        fetch('http://localhost:5000/my_orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    useEffect(() => {
        const foundOrder = orders.filter(order => order?.owner === user?.email);
        console.log(foundOrder);
        setOrder(foundOrder);
    }, [user?.email, setOrder?.owner, orders]);


    // delete an user
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/add_plan/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingorders = order.filter(user => user._id !== id);
                        setOrder(remainingorders);
                    }
                })
        }
    }

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
                                    <th>Status</th>
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
                                            <td>{order.status}</td>
                                            <td><Button>Update</Button></td>
                                            <td><Button variant='danger' onClick={() => handleDeleteUser(order._id)
                                            }>Delete</Button></td>
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