import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Row, Card, Container, Button, Spinner } from "react-bootstrap";
import AddMyhomestay from "./addHomestay.jsx";
import "./style.css";

const ListMyhomestay = () => {
  const navigate = useNavigate();

  const [showNew, setNewhomestay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [homes, setHomes] = useState([]);

  const goToDetailMyHomestay = (id) => {
    navigate(`/myhomes/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://3.132.11.210/homestays/my")
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

  if (loading) {
    // <Navigation />;
    return <Spinner className="spinner" animation="grow" variant="" />;
  }
  return (
    <div className="w-100 mt-5 row">
      <div className="col-12 row d-flex justify-content-end align-items-center">
        <div className="col-9">
          <h2 classnameName="titleMyhomestay"> My HomeStay</h2>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <Button className="btAddHomey " onClick={() => setNewhomestay(true)}>
            {" "}
            Add New Homestay{" "}
          </Button>
          <AddMyhomestay show={showNew} close={() => setNewhomestay(false)} />
        </div>
      </div>

      <Container>
        <Row xs={1} md={2} className="g-4 mt-3">
          {homes.map((el, idx) => (
            <Col>
              <Card
                className="cursor-pointer"
                onClick={() => goToDetailMyHomestay(el.ID)}
                key={idx}
              >
                <div className="col-12 row d-flex justify-content-end align-items-top">
                  <div className="col-6">
                    <Card.Img
                      className="image-homestay"
                      variant="bottom"
                      src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg"
                    />
                  </div>
                  <div className="col-6 ">
                    <Card.Body>
                      <Card.Title>{el.Name}</Card.Title>
                      <Row>
                        <Col className="">{el.Type}</Col>
                        <Col className="right-text">Rp {el.Price}</Col>
                      </Row>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListMyhomestay;
