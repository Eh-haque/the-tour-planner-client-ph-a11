import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeServices = ({ tourPlan }) => {
    const { img, title, desc, date, _id, status } = tourPlan;

    return (
        <Col>
            <Card className='h-100 shadow-lg'>
                <Card.Img variant="top" className='img-fluid' style={{ 'height': '250px' }} src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <div className='d-flex justify-content-evenly'>
                        <p>Status: {status ? status : 'pre_pending'}</p>
                        <p>Date: {date ? date : 'Not Found'}</p>
                    </div>
                </Card.Body>
                <Button as={Link} to={`/place_order/${_id}`} >Book Now</Button>
            </Card>
        </Col>
    );
};

export default HomeServices;