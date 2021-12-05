import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../../components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import "./listStay.css";
import Footer from "../../components/footer";
import { MdApartment } from "react-icons/md";

const HomeStayLocation = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(params.location);
  const [home, setHome] = useState([]);

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/rooms/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://3.132.11.210/homestays/location/${location}`)
      .then(({ data }) => {
        console.log(data.data);
        setHome(data.data);
        // console.log(homes);
        console.log(location);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [location]);

  if (loading) {
    <Navigation />;
    return <Spinner className="spinner" animation="border" variant="grow" />;
  }

  return (
    <>
      <Navigation />
      <Container className="mt-5 pt-5">
        <Row className="">
          <Col></Col>
          <Col md>
            <FloatingLabel controlId="floatingSelectGrid" label="Location">
              <Form.Select
                aria-label="Floating label select example"
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>- select location -</option>
                <option value="Jakarta">Jakarta</option>
                {/* <option value="Surabaya">Surabaya</option> */}
                <option value="Badung">Badung</option>
                <option value="Makassar">Makassar</option>
                <option value="Perugia">Perugia</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col className="center">
            <h2>{location}</h2>
          </Col>
        </Row>
        <Row xs={1} md={3} className="mt-5">
          {home.map((el, idx) => (
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
      </Container>
      <Footer />
    </>
  );
};

export default HomeStayLocation;
