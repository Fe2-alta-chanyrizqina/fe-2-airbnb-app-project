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
import Maps from "./maps";

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
      .get(`http://3.132.11.210/homestays/${params.id}`)
      .then(({ data }) => {
        // console.log(data.data);
        setRoom(data.data);
        setFeatures(data.data.Features);
        console.log(room);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Check Availability //
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(false);
  const returnSwitch = () => {
    if (show) {
      return (
        <Check
          handleShow={() => handleShow()}
          price={room.Price}
          id={room.ID}
        />
      );
    }
    return <Reserve onClick={() => gotoPayment()} />;
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
          <Col xs={6} md={6} className="pb-3">
            <Image src={room.Url} width="100%"></Image>
          </Col>
          <Col xs={6} md={6} className="pb-3">
            <Image src={room.Url} width="100%"></Image>
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
                <h6>
                  {room.Guests} guests · {room.Bedrooms} bedroom · {room.Beds}{" "}
                  bed · {room.Bathrooms} bath
                </h6>
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
                <Row xs={2} md={2}>
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
            <div className="location border">
              <Maps room={room} />
            </div>

            <hr />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomeDetails;
