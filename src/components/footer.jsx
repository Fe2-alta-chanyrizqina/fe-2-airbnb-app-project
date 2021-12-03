import { Container, Row, Col } from "react-bootstrap"
import './footer.css'

const Footer = () => {
    return  <>
                <div className="footer">
                    <Container>
                        <Row>
                            <Col md={3} xs={12}><b>Support</b></Col>
                            <Col md={3} xs={12}><b>Community</b></Col>
                            <Col md={3} xs={12}><b>Hosting</b></Col>
                            <Col md={3} xs={12}><b>About</b></Col>
                        </Row>
                        <hr />
                        <Row className="mt-3 pb-5">
                            <Col>© 2021 Airbnb, Inc.</Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </>
}

export default Footer