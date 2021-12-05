import axios from "axios";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
  Alert,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import "./homeDetails.css";

const Check = (props) => {
  const [startDate, setStartDate] = useState(null);

  const [status, setStatus] = useState("");
  const [longstay, setLongstay] = useState("");
  const [total, setTotal] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { checkIn, checkOut } = form;

  const showStatus = () => {
    if (status !== "") {
      if (status == "Available, please book now") {
        return (
          <Alert variant="primary">
            Not Available! Please choose another dates.
          </Alert>
        );
      }
      return (
        <Alert variant="warning">
          Not Available! Please choose another dates.
        </Alert>
      );
    }
    return "";
  };

  const cekStatus = () => {
    const config = {
      header: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    console.log(checkIn, checkOut);
    const body = {
      homestayid: props.id,
      checkin: checkIn,
      checkout: checkOut,
    };
    axios
      .post("http://3.132.11.210/reservations/check", body, config)
      .then((data) => {
        // console.log(data.data.totalprice);
        setLongstay(data.data.longstay);
        setTotal(data.data.totalprice);
        setStatus(data.data.message);
        // console.log(status);
        if (data.data.message == "Not Available") {
        } else {
          setShow(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
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
    return newErrors;
  };

  const handleAvail = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      const config = {
        header: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      };

      const body = {
        homestayid: props.id,
        checkin: checkIn,
        checkout: checkOut,
      };
      console.log(body);
      axios
        .post("http://3.132.11.210/reservations/check", body, config)
        .then((data) => {
          // console.log(data.data.totalprice);
          setLongstay(data.data.longstay);
          setTotal(data.data.totalprice);
          setStatus(data.data.message);
          // console.log(status);
          if (data.data.message == "Not Available") {
          } else {
            setShow(false);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  // button Book //
  const [show, setShow] = useState(true);
  // const handleShow = () => setShow(false);
  const returnSwitch = () => {
    if (show) {
      return (
        <div className="fix">
          {showStatus()}
          <Card style={{ width: "100%", color: "black" }}>
            <Card.Body>
              <Card.Title>Rp {props.price} / Night</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <Row className="g-2">
                  <Col md={6} sm={6} xs={6}>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Check-in Date"
                    >
                      <Form.Control
                        type="date"
                        placeholder="mm/dd/yyyy"
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
                    {/* <DatePicker
                      selected={startDate}
                      onChange={(date) => {
                        setStartDate(date);
                        console.log(date);
                      }}
                      minDate={checkIn}
                      placeholderText="Check-out"
                    /> */}

                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Check-out Date"
                    >
                      <Form.Control
                        type="date"
                        min="2021-12-6"
                        placeholder="mm/dd/yyyy"
                        onChange={(e) => setField("checkOut", e.target.value)}
                        required
                        isInvalid={!!errors.checkOut}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.checkOut}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>

                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={
                      <Tooltip id="tooltip-bottom">
                        check your dates here.
                      </Tooltip>
                    }
                  >
                    <Button
                      onClick={handleAvail}
                      variant="primary"
                      type="submit"
                      width="100%"
                    >
                      Check Availability
                    </Button>
                  </OverlayTrigger>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }
    return (
      <div className="fix">
        <Alert variant="primary">Available, please book now!</Alert>
        <Card style={{ width: "100%", color: "black" }}>
          <Card.Body>
            <Card.Title>Rp {props.price} / Night</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
              <Row className="g-3">
                <Col md={6} sm={6} xs={6}>
                  <FloatingLabel controlId="floatingInputGrid" label="Check-in">
                    <Form.Control
                      type="date"
                      placeholder="mm/dd/yyyy"
                      value={checkIn}
                      readOnly
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
                      placeholder="mm/dd/yyyy"
                      value={checkOut}
                      readOnly
                    />
                  </FloatingLabel>
                </Col>
                <Button
                  onClick={() => gotoPayment()}
                  variant="primary"
                  type="submit"
                  width="100%"
                >
                  Reserve Now
                </Button>
              </Row>
              <Row>
                <Col md={12} className="mt-3">
                  <Row>
                    <Col>
                      {" "}
                      Rp {props.price} X {longstay} night(s)
                    </Col>
                    <Col className="right-text"> Rp {total}</Col>
                    <hr />
                    <Col>
                      {" "}
                      <b>Total</b>{" "}
                    </Col>
                    <Col className="right-text">
                      <b>Rp {total}</b>{" "}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  const gotoPayment = () => {
    navigate(`/book/stays/${params.id}`);
    localStorage.setItem("check_in", checkIn);
    localStorage.setItem("check_out", checkOut);
    localStorage.setItem("long_stay", longstay);
    localStorage.setItem("total_price", total);
  };

  return <>{returnSwitch()}</>;
};

export default Check;
