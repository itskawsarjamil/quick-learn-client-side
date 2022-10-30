import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Course = () => {
    const course = useLoaderData();
    const { title, details, thumbnail_url, _id } = course;

    return (
        <Container className='w-50 d-flex justify-content-center ' >
            <Card className='d-flex mb-5' style={{ width: '30rem', boxShadow: '10px 10px 10px 0', padding: '2em' }}>
                <Card.Img variant="top" src={thumbnail_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text  ref={ref}>
                        {details}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <Button variant='secondary' onClick={toPdf}>Download Pdf</Button>}
                        </Pdf>
                        {/* <Link to={`/pdf`}>
                            <Button variant="primary">Download to Pdf</Button>
                        </Link> */}
                        <Link to={`/checkout/${_id}`}>
                            <Button variant="warning">Premium Access</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Course;
