import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    useTitle("Category");
    const categorycourse = useLoaderData();
    return (
        <Container>
            <Row>
                <Col lg="3" className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col>
                    <div>
                        <h2>This is Category has Course: {categorycourse.length}</h2>
                        <div  className='allcourse d-flex flex-wrap gap-4 mt-4'>
                        {
                            categorycourse.map(course => <CourseSummaryCard
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

export default Category;