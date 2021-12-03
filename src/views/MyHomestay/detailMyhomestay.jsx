import React from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import Navigation from "../../components/navbar";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import EditMyhomestay from "./editMyhomestay.jsx";
// import "./homeDetails.css";
// import Footer from "../../components/footer";

const DetailMyhomestay = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [showEdit, setEdithomestay] = useState(false);

  return (
    <>
      <Navigation className="" />
      <Row className="d-flex m-5 pt-5">
        <Col md={6}>
          <h2 classnameName="title mt-5">Villa Malang</h2>
          <h5>Type: House</h5>
          {/* </Container> */}
        </Col>

        <Col md={6}>
          <h5 classnameName="title mt-5 d-flex ">Price</h5>
        </Col>
      </Row>
      {/* </Col> */}
      <Container>
        <Row className="">
          <Col xs={12} md={6} className="pb-3">
            <Image
              src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
              width="100%"
            ></Image>
          </Col>
          <Col xs={6} md={3}>
            <Row>
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
                width="100%"
              ></Image>
            </Row>
            <Row className="pt-3">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
                width="100%"
              ></Image>
            </Row>
          </Col>
          <Col xs={6} md={3}>
            <Row>
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
                width="100%"
              ></Image>
            </Row>
            <Row className="pt-3">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
                width="100%"
              ></Image>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="">
          <Col md={12}>
            <Row>
              <Col md={12}>
                <h3>Jl. Tugu Nomor 1, Malang </h3>
                <h6>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </h6>
                <hr />
              </Col>
            </Row>

            <Row>
              <h3>Facility</h3>
              <Col md={12}>
                <Row>
                  <Col>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
                <hr />
              </Col>
            </Row>
            <Row>
              <Button
                className="btAddHomey "
                onClick={() => setEdithomestay(true)}
              >
                {" "}
                Edit Homestay{" "}
              </Button>
              <EditMyhomestay
                show={showEdit}
                close={() => setEdithomestay(false)}
              />
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  );
};
export default DetailMyhomestay;
