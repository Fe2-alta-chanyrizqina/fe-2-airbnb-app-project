import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { useState } from 'react';
import Login from "./login.jsx" 
import Register from './register.jsx';

const Navigation = () => {
  // modal edit event //
	const [showLogin, setShowLogin] = useState(false);
	const [showRegist, setShowRegist] = useState(false);


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
          	  <NavDropdown.Item href="#action/3.1" onClick={() => setShowRegist(true)}>Register</NavDropdown.Item>
          	  <Register show={showRegist} close={() => setShowRegist(false)} />
						
						  <NavDropdown.Item href="#action/3.2" onClick={() => setShowLogin(true)}>Log in</NavDropdown.Item>
          	  <Login show={showLogin} close={() => setShowLogin(false)} />
						
						  <NavDropdown.Divider />
          	  <NavDropdown.Item href="/profile">Host your home</NavDropdown.Item>
        	</NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
  </>
}

export default Navigation