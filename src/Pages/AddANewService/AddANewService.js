import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';

const AddANewService = () => {
    const { user } = useAuth()
    const [orders, setPlans] = useState([]);
    const [addedPlan, setAddedPlan] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.owner = user?.email;
        data.owner_name = user?.displayName;
        fetch('https://protected-reef-66544.herokuapp.com/add_plan', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setAddedPlan(data);
                console.log(result);
            })

        console.log(data);
        reset();

        window.alert('Successfully Added Order');
    };

    // const [plans, setPlans] = useState([])

    useEffect(() => {
        fetch('https://protected-reef-66544.herokuapp.com/add_plan')
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [addedPlan]);

    // delete an user
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to Delete?');
        if (proceed) {
            fetch(`https://protected-reef-66544.herokuapp.com/add_plan/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingorders = orders.filter(user => user._id !== id);
                        setPlans(remainingorders);
                    }
                })
        }
    }

    return (
        <div>
            <Container>
                <Row className='my-5 rounded shadow-lg p-5'>
                    <Col>
                        <h2 className='pb-3 border-bottom'>Add A New Tour Plan</h2>
                        <div className='d-flex align-items-center justify-content-center'>
                            <form className='w-50' onSubmit={handleSubmit(onSubmit)}>

                                <div className='mb-3'>
                                    <input className='form-control' placeholder='Plane Name' {...register("title", { required: true })} />
                                </div>

                                <div className='mb-3'>
                                    <input className='form-control' placeholder='Image Live Url' {...register("img", { required: true })} />
                                </div>

                                <div className='mb-3'>
                                    <input className='form-control' placeholder='Short Description' {...register("desc", { required: true })} />
                                </div>

                                <div className='mb-3'>
                                    <input type='number' className='form-control' placeholder='Plan Cost' {...register("cost", { required: true })} />
                                </div>

                                <div className='mb-3'>
                                    <input className='form-control' type="date" {...register('date')} />
                                </div>

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input className='btn btn-success' type="submit" value='Add A New Tour Plan' />
                            </form>
                        </div>
                    </Col>
                </Row>

                {/* delete plan */}
                <Row className='my-5 rounded shadow-lg p-5'>
                    <Col>
                        <h2 className='border-bottom pb-3'>Manage All Orders</h2>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Plan Name</th>
                                    <th>Seller Name</th>
                                    <th>Seller Email</th>
                                    <th>Cost</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            {
                                orders?.map((order, index) =>
                                    <tbody key={order._id}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{order?.title}</td>
                                            <td>{order.owner_name}</td>
                                            <td>{order.owner}</td>
                                            <td>${order.cost}</td>

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

export default AddANewService;