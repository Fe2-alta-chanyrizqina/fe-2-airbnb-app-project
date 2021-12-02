import { Navbar, Nav, Container, NavDropdown, Form, Button, Modal } from 'react-bootstrap'
import { useState } from 'react';

const Navigation = () => {
    // modal edit event //
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const returnModalLogin = () => {
        if(show){
            return  <>
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
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
                        <NavDropdown.Item href="#action/3.1">Sign up</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" onClick={()=>handleShow()}>Log in</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Host your home</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            {returnModalLogin()}
            </>
}

export default Navigation