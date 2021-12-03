import { useNavigate } from "react-router-dom";
import Navigation from "../../components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Spinner,
  Tab,
  Tabs,
  Figure,
} from "react-bootstrap";
import "./listStay.css";
import Footer from "../../components/footer";

const HomeStay = () => {
  const [loading, setLoading] = useState(false);
  const [homes, setHomes] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [pool, setPool] = useState([]);
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/rooms/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://18.188.236.245/homestays")
      .then(({ data }) => {
        console.log(data.data);
        setHomes(data.data);
        // console.log(homes);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://18.188.236.245/homestays/type/hotel")
      .then(({ data }) => {
        console.log(data.data);
        setHotel(data.data);
        // console.log(homes);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://18.188.236.245/homestays/feature/pool")
      .then(({ data }) => {
        console.log(data.data);
        setPool(data.data);
        // console.log(homes);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    <Navigation />;
    return <Spinner className="spinner" animation="grow" variant="" />;
  }
  return (
    <>
      {/* type: hotel, pool */}
      <Navigation />
      <Container className="g-4 mt-5 pt-5">
        <Tabs
          defaultActiveKey="all"
          transition={true}
          id="noanim-tab-example"
          className="mb-5"
        >
          <Tab eventKey="all" title="All Home">
            <Row xs={1} md={4}>
              {homes.map((el, idx) => (
                <Col>
                  <Card
                    className="cursor-pointer border"
                    onClick={() => goToDetail(el.ID)}
                    key={idx}
                    className="mb-5"
                  >
                    <Card.Img
                      className="image-homestay"
                      variant="bottom"
                      src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="home-name">{el.Name}</Card.Title>
                      <Card.Text>
                        <Row>
                          <Col className="">{el.Type}</Col>
                          <Col className="right-text">Rp {el.Price}</Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="hotel" title="Hotel">
            <Row xs={1} md={4}>
              {hotel.map((el, idx) => (
                <Col>
                  <Card
                    className="cursor-pointer"
                    onClick={() => goToDetail(el.ID)}
                    key={idx}
                    className="mb-5"
                  >
                    <Card.Img
                      className="image-homestay"
                      variant="bottom"
                      src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="home-name">{el.Name}</Card.Title>
                      <Card.Text>
                        <Row>
                          <Col className="">{el.Type}</Col>
                          <Col className="right-text">Rp {el.Price}</Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="pool" title="Pool">
            <Row xs={1} md={4}>
              {pool.map((el, idx) => (
                <Col>
                  <Card
                    className="cursor-pointer"
                    onClick={() => goToDetail(el.ID)}
                    key={idx}
                    className="mb-5"
                  >
                    <Card.Img
                      className="image-homestay"
                      variant="bottom"
                      src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="home-name">{el.Name}</Card.Title>
                      <Card.Text>
                        <Row>
                          <Col className="">{el.Type}</Col>
                          <Col className="right-text">Rp {el.Price}</Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>
      <Container></Container>
      <Footer />
    </>
  );
};

export default HomeStay;
