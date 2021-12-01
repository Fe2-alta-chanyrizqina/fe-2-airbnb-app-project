import { Container, Row, Col } from "react-bootstrap"
import './footer.css'

const Footer = () => {
    return  <>
                <div className="footer mb-3">
                    <Container>
                        <Row>
                            <Col>Support</Col>
                            <Col>Community</Col>
                            <Col>Hosting</Col>
                            <Col>About</Col>
                        </Row>
                        <hr />
                        <Row className="mt-3 pb-5">
                            <Col>© 2021 Airbnb, Inc. · Privacy · Terms · Sitemap</Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </>
}

export default Footer