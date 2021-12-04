import axios from "axios";
import { useState } from "react";
import {
  Card,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import "./homeDetails.css";

const Check = (props) => {
  const [status, setStatus] = useState({});
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { checkIn, checkOut } = form;
  const params = useParams();

  const navigate = useNavigate();
  const gotoPayment = () => {
    navigate(`/book/stays/${params.id}`);
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
      console.log(checkIn, checkOut);
      const body = {
        homestayid: props.id,
        checkin: checkIn,
        checkout: checkOut,
      };
      axios
        .post("http://18.188.236.245/reservations/check", config, body)
        .then((data) => {
          console.log(data.data);
          console.log(body);
          gotoPayment();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <>
      <div className="fix">
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
                      placeholder="2021-12-01"
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
                    label="Check-out Date"
                  >
                    <Form.Control
                      type="date"
                      placeholder="Check-out Date"
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
    </>
  );
};

export default Check;
