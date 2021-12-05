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
import { MdApartment } from "react-icons/md";

const HomeStay = () => {
  const [loading, setLoading] = useState(false);
  const [homes, setHomes] = useState([]);
  const [house, setHouse] = useState([]);
  const [apart, setApart] = useState([]);
  const [unique, setUnique] = useState([]);
  const [bed, setBed] = useState([]);
  const [pool, setPool] = useState([]);
  const [balcony, setBalcony] = useState([]);
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/rooms/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://3.132.11.210/homestays")
      .then(({ data }) => {
        console.log(data.data);
        setHomes(data.data);
        // console.log(homes);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  useEffect(() => {
    axios
      .get("http://3.132.11.210/homestays/type/house")
      .then(({ data }) => {
        console.log(data.data);
        setHouse(data.data);
        // console.log(homes);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  useEffect(() => {
    axios
      .get("http://3.132.11.210/homestays/feature/pool")
      .then(({ data }) => {
        console.log(data.data);
        setPool(data.data);
        // console.log(homes);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  useEffect(() => {
    axios
      .get("http://3.132.11.210/homestays/feature/Balcony")
      .then(({ data }) => {
        console.log(data.data);
        setBalcony(data.data);
        // console.log(homes);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://3.132.11.210/homestays/type/apartment")
      .then(({ data }) => {
        console.log(data.data);
        setApart(data.data);
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
      .get("http://3.132.11.210/homestays/type/unique space")
      .then(({ data }) => {
        console.log(data.data);
        setUnique(data.data);
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
      .get("http://3.132.11.210/homestays/type/Bed and breakfast")
      .then(({ data }) => {
        console.log(data.data);
        setBed(data.data);
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
    return <Spinner className="spinner" animation="border" variant="" />;
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
            <Row xs={1} md={3}>
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
                      src={el.Url}
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
          <Tab eventKey="house" title="House">
            <Row xs={1} md={3}>
              {house.map((el, idx) => (
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
          <Tab eventKey="apart" title="Apartment">
            <Row xs={1} md={3}>
              {apart.map((el, idx) => (
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
          <Tab eventKey="unique" title="Unique Space">
            <Row xs={1} md={3}>
              {unique.map((el, idx) => (
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
          <Tab eventKey="bed" title="Bed and Breakfast">
            <Row xs={1} md={3}>
              {bed.map((el, idx) => (
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
            <Row xs={1} md={3}>
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
          <Tab eventKey="balcony" title="Balcony">
            <Row xs={1} md={3}>
              {balcony.map((el, idx) => (
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
      <Footer />
    </>
  );
};

export default HomeStay;
