import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import useTitle from '../../hooks/useTitle';


const Courses = () => {
    useTitle("All Courses")
    const allcourse = useLoaderData();


    return (
        <Container>
            <Row>
                <Col lg="3" className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col>
                    <div>

                        <h2>Total Course: {allcourse.length}</h2>
                        <div className='allcourse d-flex flex-wrap gap-4'>
                            {
                                allcourse.map(course => <CourseSummaryCard
                                    key={course._id}
                                    course={course}
                                ></CourseSummaryCard>)
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default Courses;