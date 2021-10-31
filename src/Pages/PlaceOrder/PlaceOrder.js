import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();
    // console.log(user, id);


    // const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({})

    useEffect(() => {
        fetch(`https://protected-reef-66544.herokuapp.com/add_plan/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])

    /* useEffect(() => {
        fetch('http://localhost:5000/add_plan')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    useEffect(() => {
        const foundOrder = orders.find(order => order._id === id)
        console.log(orders);
        console.log(foundOrder);
        setOrder(foundOrder);
    }, [id, orders]); */

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.owner = user?.email;
        data.status = 'pending';
        data.order = { order }
        fetch('https://protected-reef-66544.herokuapp.com/my_orders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(data);
        reset();
    };

    return (
        <Container className='my-5'>
            <Row>
                <Col md={8}>
                    <div className='d-flex justify-content-evenly bg-primary  text-white pt-2 rounded mb-5'>
                        <p>User Name : {order?.owner_name}</p>
                        <p>Owner Email : {order?.owner}</p>
                    </div>
                    <h2 className='text-success'>{order?.title?.toUpperCase()}</h2><hr />
                    <div className=' my-5'>
                        <Image fluid src={order?.img} />
                        <div>
                            <p className='p-5' style={{ 'textAlign': 'justify' }}>{order?.desc}</p>
                            <p>Plan Cost: ${order?.cost}</p>
                        </div>
                    </div>
                    {/* <Button as={Link} to={'/shipping'} variant='outline-primary'>Proceed to Order</Button> <br /><hr /> */}
                    <Button as={Link} to='/' variant='success'>Back To Home</Button>
                </Col>
                <Col md={4} >
                    <div style={{ 'position': 'sticky', 'top': 0, }}>
                        <h2 className='pt-5 pb-3'>Add your Information</h2>
                        <div className='d-flex align-items-center justify-content-center shadow-lg p-5 rounded'>
                            <form className='w-50' onSubmit={handleSubmit(onSubmit)}>

                                <div className='mb-3'>
                                    <input defaultValue={user?.displayName} className='form-control' placeholder='Your Name' {...register("name", { required: true })} />
                                </div>

                                <div className='mb-3'>
                                    <input className='form-control' placeholder='Your Location' {...register("location", { required: true })} />
                                </div>

                                <div className='mb-3'>
                                    <input type='number' className='form-control' placeholder='Phone Number' {...register("phone", { required: true })} />
                                </div>

                                <div className='mb-3'>
                                    <input defaultValue={order?.cost} className='form-control' placeholder='Tour Cost' {...register("cost", { required: true })} />
                                </div>

                                <div className='mb-3'>
                                    <input className='form-control' type="date" {...register('date')} />
                                </div>

                                {errors.email && <span>This field is required</span>}

                                <input className='btn btn-success' type="submit" value='Add Tour Plan' />
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;