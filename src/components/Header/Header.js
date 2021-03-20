import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>
                    E-Ticket
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link as={Link} to="/" style={{ fontWeight: "500" }}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination" style={{ fontWeight: "500" }}>Destination</Nav.Link>
                        {loggedInUser.name ? <Nav.Link style={{ fontWeight: "700", color: "black"}}>{loggedInUser.name}</Nav.Link> :
                            <>
                                <Nav.Link as={Link} to="/login" style={{ fontWeight: "500" }}>Sign in</Nav.Link>
                                <Nav.Link style={{ fontWeight: "500" }}>Sign up</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;