import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const course = useLoaderData();

    return (
        <Container className='pt-5' data-aos="fade-zoom-in">
            <Card>
                <Row>
                    <Col md={4}>
                        <Card.Img className='p-3 rounded-2' variant="top" src={course.courseThumb} />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title className='fs-1'>{course.courseName}</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>
                                {course.description}
                            </Card.Text>
                            <Link to={`/checkout/${course.id}`}>
                                <Button variant="primary">Get Premium Access</Button>
                            </Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default SingleCourse;