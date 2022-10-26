import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';
import LeftSide from './LeftSide';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="3">
                    <LeftSide />
                </Col>

                <Col lg="9">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;