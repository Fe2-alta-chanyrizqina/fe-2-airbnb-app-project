import { Navbar, Nav, Container, NavDropdown, Form, Button, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router';

const NavLogin = () => {
    // modal edit event //
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()
    const goToTrip = () =>{
        navigate(`/trips`)
    }

    const returnModalLogin = () => {
        if(show){
            return  <>
                    <Modal show={show}  backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Login</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="email" value="" />                                     
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="password" value=""/>
                                    </Form.Group>                            
                                    <Button variant="primary" type="submit" className="btn-add"> 
                                        Add
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </>  
        }
    }

    return  <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                <Navbar.Brand href="/">Airbnb</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">      
                    </Nav>
                    <Nav>
                    <Nav.Link href="/homes">Places to stay</Nav.Link>                    
                    <NavDropdown className="me-3" title="User" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                        <NavDropdown.Item href="/trips" >Trip </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" >My home </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/" >Log out</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            {returnModalLogin()}
            </>
}

export default NavLogin