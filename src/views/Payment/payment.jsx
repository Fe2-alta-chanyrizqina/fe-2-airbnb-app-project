import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Navbar,
  Col,
  Row,
  FloatingLabel,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./payment.css";
import Footer from "../../components/footer";

const Payment = () => {
  const navigate = useNavigate();
  const params = useParams();

  const goToRoom = () => {
    navigate(`/rooms/${params.id}`);
  };

  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">Airbnb</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-5 pt-5">
        <h2 classnameName="title mt-5">
          {" "}
          <a className="cursor-pointer" onClick={() => goToRoom()}>
            <MdOutlineArrowBackIos />
          </a>{" "}
          Payment & Confirm
        </h2>
      </Container>
      <Container className="mt-5">
        <Row>
          <h5>Credit Card</h5>
          <Col md={7} className="p-1 mb-2 form pe-5">
            <Row>
              <Col md={12}>
                <FloatingLabel controlId="floatingSelect" label="Type">
                  <Form.Select aria-label="Floating label select example">
                    <option value="1">Master Card</option>
                    <option value="2">Visa</option>
                    <option value="2">American Express</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name on card"
                  className="mb-3 mt-3"
                >
                  <Form.Control type="text" placeholder="Name on card" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col ms={8}>
                <FloatingLabel controlId="floatingPassword" label="Card number">
                  <Form.Control type="text" placeholder="Card number" />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel controlId="floatingPassword" label="CVV">
                  <Form.Control type="number" placeholder="CVV" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form>
                  <Form.Group
                    className="mt-4 ms-2 g-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label> Expired Date</Form.Label>
                  </Form.Group>
                </Form>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Month"
                  className="mt-3"
                >
                  <Form.Control type="number" placeholder="Month" />
                </FloatingLabel>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Year"
                  className="mt-3"
                >
                  <Form.Control type="number" placeholder="Year" />
                </FloatingLabel>
              </Col>
              <Col md={12}>
                <Button
                  variant="primary"
                  className="confirm mt-3"
                  size="lg"
                  width="100%"
                >
                  Confirm and Pay
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"></Card.Img>
                  </Col>
                  <Col>
                    <Card.Title>Villa Malang</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                  </Col>
                </Row>
                <Card.Text>
                  <Row className="g-3 mt-1">
                    <Col md={6} sm={6} xs={6}>
                      <FloatingLabel
                        controlId="floatingInputGrid"
                        label="Check-in"
                      >
                        <Form.Control
                          type="date"
                          placeholder="2021-12-01"
                          value="2021-12-12"
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md={6} sm={6} xs={6}>
                      <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="Check-out"
                      >
                        <Form.Control
                          type="date"
                          placeholder="12-01-2021"
                          value="2021-12-21"
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={11} className="m-3 pr-3">
                      <Row>
                        <Col> $36 X 2 nights</Col>
                        <Col className="right-text"> $72</Col>
                        <hr className="ml-2" />
                        <Col>
                          {" "}
                          <b>Total Price :</b>{" "}
                        </Col>
                        <Col className="right-text">
                          <b>$72</b>{" "}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Payment;
