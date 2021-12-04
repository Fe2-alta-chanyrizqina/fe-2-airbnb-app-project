import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
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
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  const goToRoom = () => {
    navigate(`/rooms/${params.id}`);
  };
  const gotoHome = () => {
    navigate(`/`);
  };

  const { checkIn, checkOut, type, name, cvv, year, month, number } = form;
  const config = {
    header: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  const body = {
    homestayid: params.id,
    checkin: checkIn,
    checkout: checkOut,
    payment: {
      type: type,
      name: name,
      cvv: cvv,
      month: month,
      year: year,
      number: number,
    },
  };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const newErrors = {};
    // checkIn errors
    if (!checkIn || checkIn === "") newErrors.checkIn = "pick the date!";
    // checkOut errors
    if (!checkOut || checkOut === "") newErrors.checkOut = "pick the date!";
    // type errors
    if (!type || type === "") newErrors.type = "pick the type!";
    // name errors
    if (!name || name === "") newErrors.name = "cannot be blank!";
    // cvv errors
    if (!cvv || cvv === "") newErrors.cvv = "cannot be blank!";
    else if (cvv.length > 3) newErrors.cvv = "number cvv is too long!";
    else if (cvv.length < 3) newErrors.cvv = "number cvv is too short!";
    // month errors
    if (!month || month === "") newErrors.month = "cannot be blank!";
    else if (month.length > 2) newErrors.year = "wrong format!";
    // year errors
    if (!year || year === "") newErrors.year = "cannot be blank!";
    else if (year.length > 4) newErrors.year = "wrong format!";
    // number errors
    if (!number || number === "") newErrors.number = "cannot be blank!";
    return newErrors;
  };

  const handlePay = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);

      console.log(body);
    } else {
      axios
        .post("http://18.188.236.245//reservations", config, body)
        .then((data) => {
          console.log(data.data);
          console.log(body);
          gotoHome();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
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
                  <Form.Select
                    aria-label="Floating label select example"
                    onChange={(e) => setField("type", e.target.value)}
                    required
                    isInvalid={!!errors.type}
                    feedback={errors.type}
                    feedbackType="invalid"
                  >
                    <option value="">- choose type -</option>
                    <option value="Master Card">Master Card</option>
                    <option value="Visa">Visa</option>
                    <option value="American Express">American Express</option>
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
                  <Form.Control
                    type="text"
                    placeholder="Name on card"
                    onChange={(e) => setField("name", e.target.value)}
                    required
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col ms={8}>
                <FloatingLabel
                  controlId="floatingCardnumber"
                  label="Card number"
                >
                  <Form.Control
                    type="text"
                    placeholder="Card number"
                    onChange={(e) => setField("number", e.target.value)}
                    required
                    isInvalid={!!errors.number}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.number}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel controlId="floatingCVV" label="CVV">
                  <Form.Control
                    type="number"
                    placeholder="CVV"
                    onChange={(e) => setField("cvv", e.target.value)}
                    required
                    isInvalid={!!errors.cvv}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cvv}
                  </Form.Control.Feedback>
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
                  <Form.Control
                    type="number"
                    placeholder="Month"
                    onChange={(e) => setField("month", e.target.value)}
                    required
                    isInvalid={!!errors.month}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.month}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Year"
                  className="mt-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Year"
                    onChange={(e) => setField("year", e.target.value)}
                    required
                    isInvalid={!!errors.year}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.year}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md={12}>
                <Button
                  onClick={handlePay}
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
                          placeholder="Check-in"
                          onChange={(e) => setField("checkIn", e.target.value)}
                          required
                          isInvalid={!!errors.checkIn}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.checkIn}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col md={6} sm={6} xs={6}>
                      <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="Check-out"
                      >
                        <Form.Control
                          type="date"
                          placeholder="Check-out"
                          onChange={(e) => setField("checkOut", e.target.value)}
                          required
                          isInvalid={!!errors.checkOut}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.checkOut}
                        </Form.Control.Feedback>
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
