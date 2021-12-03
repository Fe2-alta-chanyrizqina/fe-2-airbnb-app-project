import { Card, Row, Col, FloatingLabel, Form, Button } from "react-bootstrap";

const Reserve = (props) => {
  return (
    <>
      <h5>Your room is still available !</h5>
      <Card style={{ width: "100%", color: "black" }}>
        <Card.Body>
          <Card.Title>$36 / Malam</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            <Row className="g-3">
              <Col md={6} sm={6} xs={6}>
                <FloatingLabel controlId="floatingInputGrid" label="Check-in">
                  <Form.Control type="date" placeholder="2021-12-01" />
                </FloatingLabel>
              </Col>
              <Col md={6} sm={6} xs={6}>
                <FloatingLabel controlId="floatingSelectGrid" label="Check-out">
                  <Form.Control type="date" placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
              <Button
                onClick={props.onClick}
                variant="primary"
                type="submit"
                width="100%"
              >
                Reserve
              </Button>
            </Row>
            <Row>
              <Col md={12} className="mt-3">
                <Row>
                  <Col> $36 X 2 malam</Col>
                  <Col> $72</Col>
                  <hr />
                  <Col>
                    {" "}
                    <b>Total</b>{" "}
                  </Col>
                  <Col>
                    <b>$72</b>{" "}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Reserve;
