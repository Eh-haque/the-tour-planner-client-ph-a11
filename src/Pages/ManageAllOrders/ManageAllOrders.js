import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [approved, setApproved] = useState({});

    useEffect(() => {
        fetch('https://protected-reef-66544.herokuapp.com/my_orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [approved]);

    // useEffect(()=>{
    //     fetch('https://protected-reef-66544.herokuapp.com/my_orders')
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])

    // delete an user
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to Delete?');
        if (proceed) {
            fetch(`https://protected-reef-66544.herokuapp.com/my_orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingorders = orders.filter(user => user._id !== id);
                        setOrders(remainingorders);
                    }
                })
        }
    }

    // update status
    const handleUpdateStatus = (id, status) => {
        const proceed = window.confirm('Are you sure, you want to Approve?');
        if (proceed) {

            fetch(`https://protected-reef-66544.herokuapp.com/my_orders/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orders)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        setApproved(data.modifiedCount)
                        alert('Approved Successfully')
                    }
                    if (data.modifiedCount === 0) {
                        alert('Already Approved, please reload to see updated status')
                    }
                    // const remainingorders = orders.push(user => user._id === id);
                    // setOrders(remainingorders);
                    console.log(data);
                })
        }
    }

    return (
        <div>
            <Container className='my-5 shadow-lg rounded p-5'>
                <Row>
                    <Col>
                        <h2 className='border-bottom pb-3'>Manage All Orders</h2>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Update Status</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            
                            {
                                orders?.map((order, index) =>
                                    <tbody key={order._id}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{order?.order?.order?.title}</td>
                                            <td>{order.owner}</td>
                                            <td>{order.status}</td>
                                            <td>{order.status === "Approved" ?
                                                <Button disabled>Approved</Button> :
                                                <Button onClick={() => handleUpdateStatus(order._id, order.status)}>Approve</Button>}</td>
                                            <td><Button onClick={() => handleDeleteUser(order._id)} variant='danger'>Delete</Button></td>
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