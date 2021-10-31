import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeServices = ({ tourPlan }) => {
    const { img, title, desc, date, _id, cost } = tourPlan;

    return (
        <Col className='g-4'>
            <Card className='h-100 shadow-lg'>
                <Card.Img variant="top" className='img-fluid' style={{ 'height': '250px' }} src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{ 'textAlign': 'justify' }}>
                        {desc.substr(0, 100)}
                    </Card.Text>
                    <div className='d-flex justify-content-evenly'>
                        <p>Plan Cost: ${cost}</p>
                        <p>Tour Date: {date ? date : 'Not Found'}</p>
                    </div>
                </Card.Body>
                <Button as={Link} to={`/place_order/${_id}`} >Book Now</Button>
            </Card>
        </Col>
    );
};

export default HomeServices;