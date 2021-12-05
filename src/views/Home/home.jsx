import { Image, Row, Col, Card, Container, Button } from "react-bootstrap";
import Navigation from "../../components/navbar";
import NavLogin from "../../components/navbarLogin";
import Footer from "../../components/footer";
import "./home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate(`/homes/location/Jakarta`);
  };
  const navSwitch = () => {
    if (localStorage.token) {
      return <NavLogin />;
    }
    return <Navigation />;
  };
  return (
    <>
      {navSwitch()}

      <Card className="mt-5 border" width="100%">
        <Card.Img
          className="header"
          src="https://www.befreetour.com/img/attraction/kuta-beach20191021095950.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title className="center-text">
            Not sure where to go? <br /> Perfect.
          </Card.Title>
          <Button href="/homes" className="center-button">
            {" "}
            I'm flexible{" "}
          </Button>
        </Card.ImgOverlay>
      </Card>
      <Container className="pt-5">
        <h2 className="pb-3">Inspiration for your next trip</h2>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card
              className="city pb-5 cursor-pointer"
              onClick={() => goToHome()}
            >
              <Card.Img
                className="city-img"
                variant="top"
                src="https://a.cdn-hotels.com/gdcs/production30/d1534/252e446f-0cfb-4318-a888-9d71834de4ba.jpg"
              />
              <Card.Body>
                <Card.Title>Jakarta</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="city pb-5">
              <Card.Img
                className="city-img"
                variant="top"
                src="https://a.cdn-hotels.com/gdcs/production30/d1534/252e446f-0cfb-4318-a888-9d71834de4ba.jpg"
              />
              <Card.Body>
                <Card.Title>Kuta</Card.Title>
                <Card.Text>362 kilometers away</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="city pb-5">
              <Card.Img
                className="city-img"
                variant="top"
                src="https://a.cdn-hotels.com/gdcs/production30/d1534/252e446f-0cfb-4318-a888-9d71834de4ba.jpg"
              />
              <Card.Body>
                <Card.Title>Kuta</Card.Title>
                <Card.Text>362 kilometers away</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="city pb-5">
              <Card.Img
                className="city-img"
                variant="top"
                src="https://a.cdn-hotels.com/gdcs/production30/d1534/252e446f-0cfb-4318-a888-9d71834de4ba.jpg"
              />
              <Card.Body>
                <Card.Title>Kuta</Card.Title>
                <Card.Text>362 kilometers away</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="pt-5">
        <h2 className="pb-3">Discover Airbnb Experiences</h2>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 2 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1607349658516-9fb46b47ce53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Card className="text-white mt-5" width="100%">
        <Card.Img
          src="https://hccu.coop/wp-content/uploads/2017/08/VacationClub_HeaderImage.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title className="shadow-text">
            Questions <br /> about <br /> hosting?
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Footer />
    </>
  );
};

export default Home;
