import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Form,
  FloatingLabel,
  Modal,
} from "react-bootstrap";
import { useState } from "react";
import NavLogin from "../../components/navbarLogin";
import Footer from "../../components/footer";
import "./trip.css";

const Trip = () => {
  const [modalShow, setModalShow] = useState(false);
  function confirmationDelete() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reservation Cancellation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure want to cancel your reservation ?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>No</Button>
          <Button>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <NavLogin />
      <Container>
        <h2 className="mt-5 pt-5">Trip</h2>
        <hr className="line" />
        {Array.from({ length: 4 }).map((_, idx) => (
          <Card className="mb-5">
            <Card.Header>Villa Bali</Card.Header>
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title> */}
              <Card.Text>
                <Row className="g-3">
                  <Col md={6} sm={6} xs={12}>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Check-in"
                    >
                      <Form.Control
                        type="date"
                        placeholder="2021-11-12"
                        value="2021-11-12"
                        readOnly
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={6} sm={6} xs={12}>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Check-out"
                    >
                      <Form.Control
                        type="date"
                        placeholder="name@example.com"
                        value="2021-11-14"
                        readOnly
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mt-3">
                    <Row>
                      <Col> $36 X 2 malam</Col>
                      <Col className="right-text"> $72</Col>
                      <hr />
                      <Col>
                        {" "}
                        <b>Total</b>{" "}
                      </Col>
                      <Col className="right-text">
                        <b>$72</b>{" "}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Text>
              <Button
                className="right-btn"
                onClick={() => setModalShow(true)}
                variant="danger"
              >
                Cancel
              </Button>
            </Card.Body>
          </Card>
        ))}
        {confirmationDelete()}
      </Container>
      <Footer />
    </>
  );
};

export default Trip;
