import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const MyCourses = () => {
    const courses = useLoaderData();


    return (
        <div>
            {
                courses.map(item => <Card className="mb-4 shadow">
                    <Row>
                        <Col md={4}>
                            <Card.Img className='p-3 rounded-2' variant="top" src={item.picture} />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text style={{ textAlign: 'justify' }}>
                                    {item.description.slice(0, 150)}...
                                </Card.Text>
                                <Link to={`/course/${item.id}`}>
                                    <Button variant="primary">Show Details</Button>
                                </Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>)
            }

        </div>
    );
};

export default MyCourses;