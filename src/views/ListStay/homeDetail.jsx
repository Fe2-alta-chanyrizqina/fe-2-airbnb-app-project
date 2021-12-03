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
  Spinner,
} from "react-bootstrap";
import Navigation from "../../components/navbar";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import "./homeDetails.css";
import Footer from "../../components/footer";
import Check from "./checkAvailablity";
import Reserve from "./reserveForm";

const HomeDetails = () => {
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState({});
  const [features, setFeatures] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const gotoPayment = () => {
    navigate(`/book/stays/${params.id}`);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://18.188.236.245/homestays/${params.id}`)
      .then(({ data }) => {
        // console.log(data.data);
        setRoom(data.data);
        setFeatures(data.data.Features);
        console.log(features);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://18.188.236.245/homestays/${params.id}`)
  //     .then(({ data }) => {
  //       // console.log(data.data);
  //       setRoom(data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [room]);

  // Check Availability //
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(false);
  const returnSwitch = () => {
    // if (show) {
    return (
      <Check handleShow={() => handleShow()} price={room.Price} id={room.ID} />
    );
    // }
    // return <Reserve onClick={() => gotoPayment()} />;
  };

  if (loading) {
    <Navigation />;
    return <Spinner className="spinner" animation="grow" variant="" />;
  }

  return (
    <>
      <Navigation className="" />
      <Container className="mt-5 pt-5">
        <h2 classnameName="title mt-5">{room.Name}</h2>
        <p>
          4.32 (34 ulasan) · {room.Type} <br />
          {room.Address}
        </p>
      </Container>
      <Container>
        <Row className="">
          <Col xs={12} md={6} className="pb-3">
            <Image
              src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
              width="100%"
            ></Image>
          </Col>
          <Col xs={12} md={6} className="pb-3">
            <Image
              src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
              width="100%"
            ></Image>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="">
          <Col md={7}>
            <Row>
              <Col md={12}>
                <h3>{room.Name}</h3>
                <h6>2 guests · 1 bedroom · 1 bed · 1 bath</h6>
                <hr />
              </Col>
            </Row>
            {/* <Row className="mt-5 mb-5">
              <Col md={12}>
                <h3>Kamar Anda</h3>
                <ListGroup horizontal>
                  <ListGroup.Item>
                    <h5>
                      <b>Kamar Tidur</b>
                    </h5>
                    <h5>1 Tempat Tidur Ganda</h5>
                  </ListGroup.Item>
                </ListGroup>
                <hr />
              </Col>
            </Row> */}
            <Row className="mt-5 mb-5">
              <Col md={12}>
                <h3>Description</h3>
                <p>{room.Description}</p>
                <hr />
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <h3>What this place offers</h3>
              <Col md={12}>
                <Row xs={1} md={2}>
                  {features.map((el, idx) => (
                    <Col>
                      <ListGroup variant="flush">
                        <ListGroup.Item>{el}</ListGroup.Item>
                      </ListGroup>
                    </Col>
                  ))}
                </Row>
                <hr />
              </Col>
            </Row>
          </Col>
          <Col md={5} xs={12}>
            {returnSwitch()}
          </Col>
          <hr />
        </Row>
        <Row className="mt-5 mb-5">
          <Col md={12}>
            <h3>Where you’ll be</h3>
            <div className="location border"></div>
            <hr />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomeDetails;
