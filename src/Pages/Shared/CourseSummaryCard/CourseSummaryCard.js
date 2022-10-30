import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye,  FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { IoBagAddOutline } from "react-icons/io5";

const CourseSummaryCard = ({ course }) => {
    const { _id, title, details, thumbnail_url, rating, total_Purchase } = course;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={thumbnail_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/course/${_id}`}>Read More</Link> </>
                            :
                            details
                    }
                </Card.Text>
                <Button variant="dark" className='text-center' ><Link to={`/course/${_id}`} style={{textDecoration:'none',color:'white'}}>GET THE COURSE</Link></Button>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <IoBagAddOutline className='me-2'></IoBagAddOutline>
                    <span>{total_Purchase}</span>
                </div>
            </Card.Footer>
        </Card>

    );
};

export default CourseSummaryCard;
