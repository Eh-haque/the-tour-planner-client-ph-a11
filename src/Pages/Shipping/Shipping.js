import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';


const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.owner = user?.email;
        data.name = data?.title;
        console.log(data);

        fetch('https://protected-reef-66544.herokuapp.com/my_order', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
        })
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
            <Container className='pb-5'>
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
                            <input className='form-control' placeholder='Phone Number' {...register("phone", { required: true })} />
                        </div>

                        <div className='mb-3'>
                            <input defaultValue='43543' className='form-control' placeholder='Tour Cost' {...register("cost", { required: true })} />
                        </div>

                        <div className='mb-3'>
                            <input className='form-control' type="date" {...register('date')} />
                        </div>

                        {errors.email && <span>This field is required</span>}

                        <input className='btn btn-success' type="submit" value='Add Tour Plan' />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Shipping;