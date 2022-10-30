import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Checkout = () => {
    const course = useLoaderData();
    const { title ,_id } = course;
    return (
        <div>
            <Container className='w-50 p-4 shadow d-flex flex-column align-items-center gap-4'>
                <h1>Checkout</h1>
                <div >
                    <Card style={{ width: '28rem' }}>
                        <Card.Body className=' d-flex flex-column align-items-center gap-4'>
                            <Card.Title>Course Name: {title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Course ID: {_id}</Card.Subtitle>
                            <div className='d-flex'>
                            <Button variant="btn btn-outline-primary" className='me-5'>Buy</Button>
                            <Button variant="btn btn-outline-secondary">Cancel</Button>
                            
                            {/* <Card.Link href="#">Cancel</Card.Link> */}
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Checkout;

