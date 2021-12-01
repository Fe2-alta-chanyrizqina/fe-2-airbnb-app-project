import { Container, Card, Button, Row, Col, Form, FloatingLabel } from "react-bootstrap"
import NavLogin from "../../components/navbarLogin"
import Footer from "../../components/footer"
import './trip.css'

const Trip = () => {
    return  <>
                <NavLogin/>
                <Container>
                    <h2 className="mt-5 pt-5">Trip</h2>
                    <hr className="line"/>
                    {Array.from({ length: 4 }).map((_, idx) => (
                    <Card className="mb-5">
                        <Card.Header>Villa Bali</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            <Row className="g-3">
                                    <Col md={6} sm={6} xs={6}>
                                        <FloatingLabel controlId="floatingInputGrid" label="Check-in">
                                            <Form.Control type="date" placeholder="2021-12-01" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6} sm={6} xs={6}>
                                        <FloatingLabel controlId="floatingSelectGrid" label="Check-out">                                                
                                            <Form.Control type="date" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>                                   
                                </Row>
                                <Row>
                                    <Col md={12} className="mt-3">
                                        <Row>
                                            <Col > $36 X 2 malam</Col>
                                            <Col > $72</Col>
                                            <hr />
                                            <Col> <b>Total</b> </Col>
                                            <Col><b>$72</b> </Col>
                                        </Row>
                                    </Col>
                                </Row> 
                           
                            </Card.Text>
                            <Button variant="danger">Cancel</Button>
                        </Card.Body>
                    </Card>
                ))}
                </Container>
                <Footer/>
            </>
}

export default Trip