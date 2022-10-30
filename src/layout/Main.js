import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Outlet></Outlet>
            </Container>
            {/* <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;