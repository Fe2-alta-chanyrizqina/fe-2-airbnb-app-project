import { Card, Row, Col, FloatingLabel, Form, Button } from "react-bootstrap";

const Check = (props) => {
  return (
    <>
      <Card style={{ width: "100%", color: "black" }}>
        <Card.Body>
          <Card.Title>$36 / Malam</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            <Row className="g-2">
              <Col md={6} sm={6} xs={6}>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Check-in Date"
                >
                  <Form.Control type="date" placeholder="2021-12-01" />
                </FloatingLabel>
              </Col>
              <Col md={6} sm={6} xs={6}>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Check-out Date"
                >
                  <Form.Control type="date" placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
              <Button
                onClick={props.handleShow}
                variant="primary"
                type="submit"
                width="100%"
              >
                Check Availability
              </Button>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Check;
