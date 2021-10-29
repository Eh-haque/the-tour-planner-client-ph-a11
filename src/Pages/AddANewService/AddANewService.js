import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';


const AddANewService = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.owner = user?.email;
        fetch('http://localhost:5000/add_plan', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(data);
        reset();
    };

    // console.log(watch("example"));

    return (
        <div>
            <Container>
                <h2 className='pt-5 pb-3'>Add A New Tour Plan</h2>
                <div className='d-flex align-items-center justify-content-center shadow-lg p-5 rounded'>
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
                            <input className='form-control' type="date" {...register('date')} />
                        </div>

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className='btn btn-success' type="submit" value='Add Tour Plan' />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AddANewService;