
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import {
  Col,
  Card,
  Container,
  Button,
  FloatingLabel,
  Form,
  OverlayTrigger,
  Tooltip,
  Modal,
  Spinner,
} from "react-bootstrap";
import Footer from "../../components/footer";
import swal from "sweetalert";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./style.css";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const params = useParams();

  const goToProfile = () => {
    navigate("/profile/");
  };

  const goToHome = () => {
    navigate(`/`);
  };

  const [loading, setLoading] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);

  const [form, setForm] = useState({});
  const [user, getUser] = useState({});
  const [errors, setErrors] = useState({});
  const { name, email, phonenumber, gender } = form;

  const [namedb, setnamedb] = useState({});
  const [emaildb, setemaildb] = useState({});
  const [genderdb, setgenderdb] = useState({});
  const [phonedb, setphonedb] = useState({});

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const newErrors = {};
    //eslint-disable-next-line
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // name errors
    if (!name || name === "") newErrors.name = "cannot be blank!";
    // email errors
    if (!email || email === "") newErrors.email = "cannot be blank!";
    else if (regexEmail.test(email) === false)
      newErrors.email = "email is not valid!";
    // phone errors
    if (!phonenumber || phonenumber === "")
      newErrors.phonenumber = "cannot be blank!";
    // gender errors
    if (!gender || gender === "") newErrors.gender = "please choose!";

    return newErrors;
  };

  useEffect(() => getAllDataUSer(), []);

  const getAllDataUSer = () => {
    console.log(localStorage.getItem("id"));
    setLoading(true);
    axios
      .get("http://3.132.11.210/users/" + localStorage.id, config)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data);
        setnamedb(response.data.data.Name);
        setemaildb(response.data.data.Email);
        setphonedb(response.data.data.PhoneNumber);
        setgenderdb(response.data.data.Gender);

        const AllData = response.data.data;
        getUser(AllData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDel = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .delete("http://3.132.11.210/users/" + localStorage.id, config)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.message);

        goToHome();

        swal(response.data.message);
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

  const cekEdit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
      console.log("show err");
    } else {
      console.log("show");
      handleShowEdit();
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setLoading(true);

    const objData = {
      Name: name,
      Email: email,
      PhoneNumber: phonenumber,
      Gender: gender,
    };

    axios
      .put(
        "http://3.132.11.210/users/" + localStorage.getItem("id"),
        objData,
        config
      )
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data.data);
        goToProfile();
        const AllData = response.data.data;
        getUser(AllData);
        swal(response.data.message, "success");
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
      {/* {navSwitch()} */}
      <div className="w-100 p-5 row editProfile">
        <h2 classnameName="title mt-8">
          {" "}
          <a className="cursor-pointer" onClick={() => goToProfile()}>
            <MdOutlineArrowBackIos />
          </a>{" "}
          Profile
        </h2>

        <Container className="mt-3 d-flex justify-content-center align-items-center row">
          <div className="dataProfile col-8">
            <h3 className="text-center mb-5">Edit Profile</h3>

            <Form.Group className="mb-2">
              <FloatingLabel label="Name" className="mb-3 mt-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  defaultValue={namedb}
                  onChange={(e) => setField("name", e.target.value)}
                  required
                  isInvalid={!!errors.name}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-2">
              <FloatingLabel label="Email" className="mb-3 mt-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  defaultValue={emaildb}
                  onChange={(e) => setField("email", e.target.value)}
                  required
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-2">
              <FloatingLabel label="Phone Number" className="mb-3 mt-3">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  defaultValue={phonedb}
                  onChange={(e) => setField("phonenumber", e.target.value)}
                  required
                  isInvalid={!!errors.phonenumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phonenumber}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender: </Form.Label>

              <div className="d-flex justify-content-between align-items-center">
                <Form.Check
                  className="col-6 mb-5"
                  inline
                  value="male"
                  type="radio"
                  aria-label="radio 1"
                  label="Male"
                  onChange={(e) => setField("gender", e.target.value)}
                  checked={gender === "male"}
                  required
                  isInvalid={!!errors.gender}
                  feedback={errors.gender}
                  feedbackType="invalid"
                />

                <Form.Check
                  className="col-6 mb-5"
                  inline
                  value="female"
                  type="radio"
                  aria-label="radio 2"
                  label="Female"
                  onChange={(e) => setField("gender", e.target.value)}
                  checked={gender === "female"}
                  required
                  isInvalid={!!errors.gender}
                  feedback={errors.gender}
                  feedbackType="invalid"
                />
              </div>
            </Form.Group>
          </div>
        </Container>

        <Card className="cardDel shadow-5 d-flex mb-5 justify-content-center align-items-center">
          <Card.Body className="col-8 row">
            <Col className="col-10">
              <h5>
                <strong>Delete Account</strong>
              </h5>
              <p>By deleting your account, you will lose all your data</p>
            </Col>
            <div className="col-2 d-flex justify-content-start align-items-center">
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">Are you sure ? :"( </Tooltip>
                }
              >
                <Button
                  className="btDel "
                  onClick={handleShowDel}
                  variant="danger"
                >
                  {" "}
                  Delete{" "}
                </Button>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Card>

        <Container className="d-flex mb-5 justify-content-center align-items-center">
          <div className="col-9">
            <Button className="col-12 btEdit" onClick={cekEdit}>
              Save Change
            </Button>
          </div>
        </Container>

        {/* Modal Edit Profile */}
        <Modal
          show={showEdit}
          onHide={handleCloseEdit}
          backdrop="static"
          keyboard={false}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-5 d-flex justify-content-center align-items-center">
            <div>
              <p> Are you sure to change your profile data ? </p>

              <div className="divButton mt-5 d-flex justify-content-center align-items-center">
                <Button
                  className="me-2 col-3 btCancel"
                  variant="secondary"
                  onClick={handleCloseEdit}
                >
                  Cancel
                </Button>

                <Button
                  className="col-3 btEdit"
                  variant="primary"
                  onClick={handleEdit}
                >
                  Save
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Modal Delete Profile */}
        <Modal
          show={showDel}
          onHide={handleCloseDel}
          backdrop="static"
          keyboard={false}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-5 d-flex justify-content-center align-items-center">
            <div>
              <p> Are you really.. really sure to delete your profile ? :"( </p>

              <div className="divButton mt-5 d-flex justify-content-center align-items-center">
                <Button
                  className="me-2 col-3 btCancel"
                  variant="secondary"
                  onClick={handleCloseDel}
                >
                  Cancel
                </Button>

                <Button
                  className="col-3 btEdit"
                  variant="primary"
                  onClick={handleDel}
                >
                  Save
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <Footer />
    </>
  );
};

export default ProfileEdit;
