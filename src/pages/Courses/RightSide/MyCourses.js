import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const MyCourses = () => {
    return (
        <Row>
            {
                [...Array(9)].map(item => <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='p-3 rounded-2' variant="top" src="https://i.ibb.co/RpxpBcT/image.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>)
            }

        </Row>
    );
};

export default MyCourses;