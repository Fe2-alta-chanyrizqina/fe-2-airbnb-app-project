import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  Row,
  Col,
  ListGroup,
  Button,
  Modal,
  Spinner,
} from "react-bootstrap";
import Navigation from "../../components/navbar";
import { useParams, useNavigate } from "react-router";
import EditMyhomestay from "./editMyhomestay.jsx";
import swal from "sweetalert";
// import "./homeDetails.css";
// import Footer from "../../components/footer";

const DetailMyhomestay = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showEdit, setEdithomestay] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const handleCloseEdit = () => setEdithomestay(false);
  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);
  const [myhomes, getMyhomes] = useState({});
  const [room, setRoom] = useState({});
  const [features, setFeatures] = useState([]);

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => getAllDataMyhomes(), []);

  const getAllDataMyhomes = () => {
    setLoading(true);
    axios
      .get(`http://3.132.11.210/homestays/${params.id}`, config)
      .then((response) => {
        setRoom(response.data);
        setFeatures(response.data.Features);
        const AllData = response.data;
        getMyhomes(AllData);
      })
      .catch((err) => {
        if (err) {
          swal("Oh No!", err.message, "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDel = () => {
    setLoading(true);
    axios
      .delete(`http://3.132.11.210/homestays/${params.id}`, config)
      .then((response) => {
        const AllData = response.data.data;
        getMyhomes(AllData);
      })
      .catch((err) => {
        if (err) {
          swal("Oh No!", err.message, "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Spinner className="spinner" animation="grow" variant="" />;
  }
  return (
    <>
      <Navigation className="" />
      <Row className="d-flex m-5 pt-5">
        <Col md={6}>
          <h2 classnameName="title mt-5">{myhomes.Name}</h2>
          <h5>Type: {myhomes.Type}</h5>
        </Col>

        <Col md={6} classnameName="title mt-10 d-flex ">
          <h5>Rp. {myhomes.Price}</h5>
        </Col>
      </Row>
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
                <h3>{myhomes.Address} </h3>
                <h6>{myhomes.Description}</h6>
                <hr />
              </Col>
            </Row>

            <Row>
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
            <Row className="mt-5 mb-5 d-flex align-items-center justify-content-center">
              <Button
                className="btDell me-5 col-5"
                variant="danger"
                onClick={() => setShowDel(true)}
              >
                {" "}
                Delete Homestay{" "}
              </Button>

              <Button
                className="btEdit col-5"
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

      {/* Modal Confirm Delete Homestay */}
      <Modal
        show={showDel}
        onHide={() => handleCloseDel}
        backdrop="static"
        keyboard={false}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-5 d-flex justify-content-center align-items-center">
          <div>
            <p> Are you sure to change your Homestay data ? </p>

            <div className="divButton mt-5 d-flex justify-content-center align-items-center">
              <Button
                className="me-2 col-3 btCancel"
                variant="secondary"
                onClick={() => setShowDel(false)}
              >
                Cancel
              </Button>

              <Button
                className="col-3 btDel"
                variant="primary"
                onClick={handleDel}
              >
                Delete
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* <Footer /> */}
    </>
  );
};
export default DetailMyhomestay;
