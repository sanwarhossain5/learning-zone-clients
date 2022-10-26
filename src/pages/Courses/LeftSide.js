import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const items = [
        'profile', 'payment', 'about', 'review', 'gallery'
    ]



    return (
        <ListGroup className="shadow">
            <ListGroup.Item
                as={Link}
                to='/courses'
                action
            >
                COURSES
            </ListGroup.Item>
            {
                items.map(item => <ListGroup.Item
                    as={Link}
                    to={`${item}`}
                    action
                    key={item}
                >
                    {item.toUpperCase()}
                </ListGroup.Item>)
            }
        </ListGroup>
    );
};

export default LeftSide;