import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext)
    const [dark, setDark] = useState(false)
    console.log(user);

    const handleToggle = (e) => {
        setDark(e.target.checked);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-0'>
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <Image style={{height: '60px'}} src='https://e7.pngegg.com/pngimages/551/211/png-clipart-education-logo-pre-school-others-text-logo.png' />{' '}
                    Learning Zone
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    {/* navigation menus */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                        <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

                    </Nav>

                    {/* user and authencation part */}
                    <Nav>
                        {user?.displayName && <Nav.Link >{user?.displayName}</Nav.Link>}
                        {
                            user?.email ?
                                <Button variant="dark" onClick={logOut}>Logout</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        {/* toggle dark/light mode  */}
                        <div>
                            <input type="checkbox" onClick={handleToggle} className="btn-check" id="btn-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">{!dark ? 'Dark' : 'Light'}</label>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;