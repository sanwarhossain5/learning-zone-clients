import React from 'react';
import { BreadcrumbItem, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const items = [
        'profile', 'payment', 'about', 'review', 'gallery'
    ]



    return (
        <ListGroup>
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