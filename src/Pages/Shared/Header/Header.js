import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
    const {user, handleLogout} = useFirebase()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" sticky='top' className='shadow-lg'>
                <Container>
                    <Navbar.Brand href="#home">Tour Planner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/my_orders">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/manage_all_orders">Manage All Orders</Nav.Link>
                            <Nav.Link as={Link} to="/add_new_service">Add New Service</Nav.Link>
                            {/* <Nav.Link as={Link} to="/place_order/:id">Place Order</Nav.Link> */}
                            {user?.email ?
                                <Button variant='danger' className='text-white navStyle rounded' onClick={handleLogout}><h5>Logout {user?.displayName ? user?.displayName : user?.email}</h5></Button> :
                                <Nav.Link as={Link} className='navStyle rounded navStyle' to="/login" eventKey="link-6"><h5>Login</h5></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;