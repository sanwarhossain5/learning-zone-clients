import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();
const SingleCourse = () => {
    const course = useLoaderData();

    return (
        <Container className='pt-5' data-aos="fade-zoom-in">
            
            <ReactToPdf targetRef={ref}
            filename = "code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}
                >Generate Pdf</button>}
            </ReactToPdf>
            <Card ref={ref}>
            
                <Row>
                    <Col md={4}>
                        <Card.Img className='p-3 rounded-2' variant="top" src={course.picture} />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title className='fs-1'>{course.title}</Card.Title>
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