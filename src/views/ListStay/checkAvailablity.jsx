import axios from "axios";
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
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import "./homeDetails.css";

const Check = (props) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [status, setStatus] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const gotoPayment = () => {
    navigate(`/book/stays/${params.id}`);
  };

  useEffect(() => {
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
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [checkIn, checkOut]);

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
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Check-out Date"
                  >
                    <Form.Control
                      type="date"
                      placeholder="name@example.com"
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
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
                    onClick={() => gotoPayment()}
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
