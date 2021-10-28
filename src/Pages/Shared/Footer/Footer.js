import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='shadow-lg pt-5'>
            <Container>
                <Row className='border-bottom' xs={1} md={3}>
                    <Col>
                        <h2>Tour Planner</h2><hr />
                        <p>
                            <strong>Holiday Planners sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.</strong>
                        </p>
                        <div>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter Your Email"
                                    aria-label="Enter Your Email"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Submit
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col>
                        <h2>Navigation</h2><hr />
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/my_orders">My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/manage_all_orders">Manage All Orders</Nav.Link>
                        <Nav.Link as={Link} to="/add_new_service">Add New Service</Nav.Link>
                        <Nav.Link as={Link} to="/place_orders">Place Order</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Col>
                    <Col>
                        <h2>Need Help?</h2>
                        <hr />
                        <div className='border-left'>
                            <h6>Call Us</h6>
                            <h4>+123 456 7890</h4>
                        </div>
                        <div className='border-left'>
                            <h6>Email Us</h6>
                            <h5>holidayplanners@gmail.com</h5>
                        </div>
                        <div className='border-left'>
                            <h6>Location</h6>
                            <h5>+123 Dhaka</h5>
                        </div>
                        <div className='border-left'>
                            <h6>Follow Us</h6>
                            <h5>+123 456 7890</h5>
                        </div>
                    </Col>
                </Row>
                <p>Copyright © 2021 Geek Code Lab. All Rights Reserved.</p>
                <p className='m-0 pb-2'>Privacy Policy || Terms of Use Cookie Policy</p>
            </Container>
        </div>
    );
};

export default Footer;