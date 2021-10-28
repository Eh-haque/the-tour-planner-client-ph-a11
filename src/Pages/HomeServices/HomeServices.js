import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const HomeServices = ({ tourPlan }) => {
    const { img, title, desc, date, _id } = tourPlan;
    const handleButtonClick = (id) => {
        console.log(id);
    }
    return (
        <Col>
            <Card className='h-100 shadow-lg'>
                <Card.Img variant="top" className='img-fluid' style={{ 'height': '250px' }} src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <p>Date: {date ? date : 'Not Found'}</p>
                </Card.Body>
                <Button onClick={() => handleButtonClick(_id)}>Book Now</Button>
            </Card>
        </Col>
    );
};

export default HomeServices;