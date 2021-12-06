import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Form,
  FloatingLabel,
  Modal,
  Spinner,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import NavLogin from "../../components/navbarLogin";
import Navigation from "../../components/navbarLogin";
import Footer from "../../components/footer";
import axios from "axios";
import "./trip.css";
import { Navigate, useNavigate } from "react-router";

const Trip = () => {
  const [loading, setLoading] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [ID, setID] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, [reservations]);

  useEffect(() => {
    setLoading(true);
    const config = {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    };
    // console.log(config);
    axios
      .get("http://3.132.11.210/reservations", config)
      .then(({ data }) => {
        setReservations(data.data);
        // console.log(reservations);
      })
      .catch((err) => {
        console.log(err.message);
        navigate(`/`);
        return <>You must log in first</>;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const deleteTrip = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    console.log(id);
    // return;
    axios
      .delete(`http://3.132.11.210/reservations/${id}`, config)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  if (loading) {
    return <Spinner className="spinner" animation="border" variant="" />;
  }
  const confirmationDelete = () => {
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
          <Button
            onClick={() => {
              console.log(ID);
              deleteTrip(ID);
              setModalShow(false);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const navSwitch = () => {
    if (localStorage.token) {
      return <NavLogin />;
    }
    return <Navigation />;
  };

  return (
    <>
      {navSwitch()}
      <Container>
        <h2 className="mt-5 pt-5">Trip</h2>
        <hr className="line" />
        {reservations.map((el, idx) => (
          <Card className="mb-5">
            <Card.Header>{el.Name}</Card.Header>
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
                        value={el.Check_In.slice(0, 10)}
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
                        value={el.Check_Out.slice(0, 10)}
                        readOnly
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mt-3">
                    <Row>
                      <Col>
                        Rp {el.Price} X {el.Long_Stay} night(s)
                      </Col>
                      <Col className="right-text">Rp {el.Total_Price}</Col>
                      <hr />
                      <Col>
                        {" "}
                        <b>Total</b>{" "}
                      </Col>
                      <Col className="right-text">
                        <b>Rp {el.Total_Price}</b>{" "}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Text>
              <Button
                className="right-btn"
                onClick={() => {
                  setID(el.ID);
                  setModalShow(true);
                }}
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
