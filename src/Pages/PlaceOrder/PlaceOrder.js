import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const {user} = useAuth();
    console.log(user);
    const { id } = useParams()

    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/add_plan')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    useEffect(() => {
        const foundOrder = orders.find(order => order._id === id)
        console.log(orders);
        console.log(foundOrder);
        setOrder(foundOrder);
    }, [id, orders]);

    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <h2 className='text-success'>{order?.title?.toUpperCase()}</h2><hr />
                    <div className=' my-5'>
                        <Image fluid className='p-5' src={order?.img} />
                        <div><h3 className='p-5'>{order?.desc}</h3><Button variant='outline-success'>Book Now</Button></div>
                    </div>
                    <Button as={Link} to='/' variant='success'>Back To Home</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;