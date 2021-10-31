import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import HomeServices from '../HomeServices/HomeServices';
import './Home.css';
import { FaAmericanSignLanguageInterpreting, FaExchangeAlt, FaFly, FaSearchLocation } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const [tourPlans, setTourPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://protected-reef-66544.herokuapp.com/add_plan')
            .then(res => res.json())
            .then(data => setTourPlans(data))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <Spinner animation='border' variant='danger' />
    }

    return (
        <div>
            {/* banner / carousel*/}
            <div className='banner d-flex justify-content-center align-items-center'>
                <h2 className='text-white shadow-lg p-4 rounded'>Tour List</h2>
            </div>

            <Container>
                {/* main offering min-6* + spinner */}
                <h2 className='pt-5'>Tour Plans</h2>

                <Row className='py-5' xs={1} md={2} lg={3}>
                    {
                        tourPlans.map(tourPlan => <HomeServices tourPlan={tourPlan} key={tourPlan._id} />)
                    }
                </Row>

                {/* two extra section */}
                <div className='my-5'>
                    <h4>Plan your Trip</h4>
                    <h2 className='pb-3'>to Bangladesh</h2>
                    <Row xs={1} md={2} lg={4} className='g-3'>
                        <Col>
                            <div className=' p-3 shadow-lg rounded'>
                                <FaSearchLocation className='text-success' style={{ 'fontSize': '5rem' }} />
                                <h3>Personalized trip
                                </h3>
                                <p>A complete day by day itinerary
                                    based on your preferences</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='p-3 shadow-lg rounded'>
                                <FaExchangeAlt className='text-success' style={{ 'fontSize': '5rem' }} />
                                <h3>Customize it</h3>
                                <p>Refine your trip. We'll find the
                                    best routes and schedules</p>
                            </div>
                        </Col>
                        <Col>
                            <div className=' p-3 shadow-lg rounded'>
                                <FaFly className='text-success' style={{ 'fontSize': '5rem' }} />
                                <h3>Book it</h3>
                                <p>Choose from the best hotels
                                    and activities. Up to 50% off</p>
                            </div>
                        </Col>
                        <Col>
                            <div className=' p-3 shadow-lg rounded'>
                                <FaAmericanSignLanguageInterpreting className='text-success' style={{ 'fontSize': '5rem' }} />
                                <h3>Manage it</h3>
                                <p>Everything in one place.
                                    Everyone on the same page.</p>
                            </div>
                        </Col>
                    </Row>
                    <Button className='mt-4' as={Link} to='/add_new_service'>Start Planning</Button>
                </div>

                <div className='py-5'>
                    <h4>About us</h4>
                    <h2 className='pb-3'>Plan Your Trip with Us</h2>
                    <Row className='align-items-center'>
                        <Col md={12} lg={6}>
                            <Image className='img-fluid' src='https://html.geekcodelab.com/holiday-planners/assets/images/destination-img1.jpg'></Image>
                        </Col>
                        <Col md={12} lg={6}>
                            <p style={{ 'textAlign': 'justify' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline</p>
                            <Button>Read More</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Home;