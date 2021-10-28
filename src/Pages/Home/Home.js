import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeServices from '../HomeServices/HomeServices';
import './Home.css'

const Home = () => {
    const [tourPlans, setTourPlans] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/add_plan')
            .then(res => res.json())
            .then(data => setTourPlans(data))
    }, [])
    return (
        <div>
            {/* banner / carousel*/}
            <div className='banner d-flex justify-content-center align-items-center'>
                <h2 className='text-white shadow-lg p-4 rounded'>Tour List</h2>
            </div>

            <Container>
                {/* main offering min-6* + spinner */}
                <h2 className='pt-5'>Tour Plans</h2>
                <Row className='py-5 g-5' xs={1} md={2} lg={3}>
                    {
                        tourPlans.map(tourPlan => <HomeServices tourPlan={tourPlan} key={tourPlan._id} />)
                    }
                </Row>
                {/* two extra section */}
            </Container>
        </div>
    );
};

export default Home;