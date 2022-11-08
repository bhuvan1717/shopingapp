import React from 'react'
import { Nav, Navbar, Container, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { FaCartPlus, FaUserAlt } from 'react-icons/fa';

function Navi({ count }) {




    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Shoping-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/search'>Search</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/cart'><FaCartPlus /> <sup> <Badge bg="secondary">{count}</Badge></sup> </Nav.Link>
                            <Nav.Link as={Link} to='/Profile'><FaUserAlt /></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>


                </Container>
            </Navbar >
        </div>
    )
}

export default Navi