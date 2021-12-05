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
  Spinner,
} from "react-bootstrap";
import { MdOutlineArrowBackIos } from "react-icons/md";
import axios from "axios";
import "./payment.css";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";

const Payment = () => {
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState();
  // const [type, setType] = useState();
  // const [name, setName] = useState();
  // const [cvv, setCVV] = useState();
  // const [month, setMonth] = useState();
  // const [year, setYear] = useState();
  // const [number, setNumber] = useState();
  const navigate = useNavigate();
  const params = useParams();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://3.132.11.210/homestays/${params.id}`)
      .then(({ data }) => {
        // console.log(data.data);
        setRoom(data.data);
        console.log(room);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const { checkIn, checkOut, type, name, cvv, year, month, number } = form;

  const addReservation = () => {
    const config = {
      header: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    const body = {
      homestayid: 1,
      checkin: localStorage.check_in,
      checkout: localStorage.check_out,
      payment: {
        type,
        name,
        cvv: parseInt(cvv),
        month,
        year,
        number,
      },
    };
    axios
      .post("http://3.132.11.210/reservations", body, config)
      .then((data) => {
        // console.log(data);
        navigate(`/trips`);
        localStorage.removeItem("check_in");
        localStorage.removeItem("check_out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const goToRoom = () => {
    navigate(`/rooms/${params.id}`);
    localStorage.removeItem("check_in");
    localStorage.removeItem("check_out");
  };

  const goToTrip = () => {
    navigate(`/trips`);
    localStorage.removeItem("check_in");
    localStorage.removeItem("check_out");
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
    }
    const config = {
      header: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };

    const body = {
      homestayid: parseInt(params.id),
      checkin: localStorage.check_in,
      checkout: localStorage.check_out,
      payment: {
        type: type,
        name: name,
        cvv: parseInt(cvv),
        month: month,
        year: year,
        number: number,
      },
    };
    console.log(body, "body", localStorage.token);
    axios
      .post("http://3.132.11.210/reservations", body, config)
      .then((data) => {
        console.log(data.data);
        // console.log(body);
        goToTrip();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  if (loading) {
    <Navbar expand="lg" variant="light" bg="light" fixed="top"></Navbar>;
    return <Spinner className="spinner" animation="grow" variant="" />;
  }

  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">Airbnb</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-5 pt-5">
        <h2 classnameName="title">
          {" "}
          <a className="cursor-pointer" onClick={() => goToRoom()}>
            <MdOutlineArrowBackIos />
          </a>{" "}
          Payment & Confirm
        </h2>
      </Container>
      <Container className="">
        <Row>
          <Col md={6} sm={{ order: 2 }} xs={{ order: 2 }} className=" form">
            <h5 className="mt-5">Credit Card</h5>
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
                    <option value="master card">Master Card</option>
                    <option value="visa">Visa</option>
                    <option value="american express">American Express</option>
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
              <Col ms={8} sm={8} xs={8}>
                <FloatingLabel controlId="floatingPassword" label="Card number">
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
              <Col md={4} sm={12} xs={12}>
                <FloatingLabel controlId="floatingPassword" label="CVV">
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
              <Col md={4} sm={4} xs={4}>
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
                  <Form.Select
                    aria-label="Floating label select example"
                    onChange={(e) => setField("month", e.target.value)}
                    required
                    isInvalid={!!errors.month}
                    feedback={errors.month}
                    feedbackType="invalid"
                  >
                    <option>Select month</option>
                    {Array.from({ length: 12 }).map((_, idx) => (
                      <option value={idx + 1}>{idx + 1}</option>
                    ))}
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Year"
                  className="mt-3"
                >
                  <Form.Select
                    aria-label="Floating label select example"
                    onChange={(e) => setField("year", e.target.value)}
                    required
                    isInvalid={!!errors.year}
                    feedback={errors.year}
                    feedbackType="invalid"
                  >
                    <option>Select year</option>
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <option value={idx + 21}>{idx + 2021}</option>
                    ))}
                  </Form.Select>
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
          <Col md={6} sm={{ order: 1 }} xs={{ order: 1 }}>
            <h5 className="mt-5">Your Homestay</h5>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"></Card.Img>
                  </Col>
                  <Col>
                    <Card.Title>{room.Name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {room.Type}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Rp {room.Price} / Night
                    </Card.Subtitle>
                  </Col>
                </Row>
                <Card.Text>
                  <Row className="g-3 mt-1">
                    <Col md={6} sm={6} xs={12}>
                      <FloatingLabel
                        controlId="floatingInputGrid"
                        label="Check in"
                      >
                        <Form.Control
                          type="date"
                          placeholder="2021-12-01"
                          value={localStorage.check_in}
                          readOnly
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="Check out"
                      >
                        <Form.Control
                          type="date"
                          placeholder="12-01-2021"
                          value={localStorage.check_out}
                          readOnly
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={11} className="m-3 pr-3">
                      <Row>
                        <Col>
                          Rp {room.Price} X {localStorage.long_stay} night(s)
                        </Col>
                        <Col className="right-text">
                          {" "}
                          Rp {localStorage.total_price}
                        </Col>
                        <hr className="ml-2" />
                        <Col>
                          {" "}
                          <b>Total Price :</b>{" "}
                        </Col>
                        <Col className="right-text">
                          <b>Rp {localStorage.total_price}</b>{" "}
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
