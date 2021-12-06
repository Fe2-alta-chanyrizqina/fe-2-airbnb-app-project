import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  FloatingLabel,
  Col,
  Row,
  Container,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddMyhomestay = (props) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  // const [singleFile, setSingleFile] = useState("");
  const [file, setFile] = useState();

  const navigate = useNavigate();
  const { name, address, description, facility, price, type } = form;

  const onImageUpload = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  // const SingleFileChange = (e) => {
  //   setSingleFile(e.target.files[0]);
  // };

  // const uploadSingleFile = async () => {
  //   const formData = new FormData();
  //   formData.append("file", singleFile);
  //   await singleFileUpload(formData);
  //   console.log(singleFile);
  // };

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
    // name errors
    if (!name || name === "") newErrors.name = "cannot be blank!";
    // address errors
    if (!address || address === "") newErrors.address = "cannot be blank!";
    // description errors
    if (!description || description === "")
      newErrors.description = "cannot be blank!";
    // price errors
    if (!price || price === "") newErrors.price = "cannot be blank!";
    // feature errors
    // if (!facility || facility === "") newErrors.facility = "cannot be blank!";
    // type errors
    if (!type || type === "") newErrors.type = "cannot be blank!";
    return newErrors;
  };

  const handleAddnew = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      facility = [1, 2, 3];
      const objData = {
        name: name,
        type: type,
        description: description,
        facility: facility,
        price: price,
        address: address,
        file: file,
      };

      const data = new FormData();
      data.append("name", name);
      data.append("type", type);
      data.append("description", description);
      data.append("price", price);
      data.append("address", address);
      data.append("file", file);

      console.log(objData);
      console.log(data);

      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .post("http://3.132.11.210/homestays", objData, config)
        .then((response) => {
          console.log(response.data.Type);
          console.log(response.data.Description);
          console.log(response.data.Price);
          console.log(response.data.Address);
          console.log(response.data.Features);
          console.log(response.data.Url);
          console.log(response.message);
          console.log(response.message);

          swal({
            text: response.data.message,
            icon: "success",
          });

          navigate(`/profile`);

          if (props.close) {
            props.close();
          }
        })
        .catch((err) => {
          if (err) {
            swal("Oh No!", err.message, "error");
          } else {
            swal.stopLoading();
            swal.close();
          }

          if (props.close) {
            props.close();
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  if (loading) {
    return <Spinner className="spinner" animation="grow" variant="" />;
  }
  return (
    <>
      <Modal
        className="modalAddhomestay"
        backdrop="static"
        keyboard={false}
        size="lg"
        // dialogClassName="col-10"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
      >
        <Modal.Body className="p-5">
          <div>
            <h3 className="text-center mb-4">Add New Homestay</h3>
            {/* Name Homestay */}
            <Form.Group className="mb-2">
              <FloatingLabel label="Name" className="mb-3 mt-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setField("name", e.target.value)}
                  required
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <div className="d-flex row">
              <Form.Group className="mb-2 col-6 align-items-center justify-content-center ">
                <FloatingLabel controlId="floatingSelect" label="Type">
                  <Form.Select
                    aria-label="Select Type"
                    onChange={(e) => setField("type", e.target.value)}
                    required
                    isInvalid={!!errors.type}
                    feedback={errors.type}
                    feedbackType="invalid"
                  >
                    <option value="">- choose type -</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="secondary unit">Secondary Unit</option>
                    <option value="unique space">Unique Space</option>
                    <option value="bed and breakfast">Bed and breakfast</option>
                    <option value="boutique hotel">Boutique hotel</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                controlId="validationCustomPrice"
                className="mb-2 col-6 d-flex align-items-end justify-content-end"
              >
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">Rp.</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    aria-describedby="inputGroupPrepend"
                    onChange={(e) => setField("price", e.target.value)}
                    placeholder="Price"
                    required
                    isInvalid={!!errors.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </div>

            {/* Address */}
            <Form.Group className="mb-2">
              <FloatingLabel label="Address" className="mb-3 mt-3">
                <Form.Control
                  type="text"
                  onChange={(e) => setField("address", e.target.value)}
                  placeholder="Address"
                  required
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-2">
              <FloatingLabel label="Description" className="mb-3 mt-3">
                <Form.Control
                  as="textarea"
                  onChange={(e) => setField("description", e.target.value)}
                  placeholder="Descrition"
                  style={{ height: "100px" }}
                  required
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            {/* Upload File */}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Homestay Picture</Form.Label>
              <Form.Control type="file" onChange={(e) => onImageUpload(e)} />
            </Form.Group>

            <Container>
              <Form.Label>Facility :</Form.Label>
              <Row xs={1} md={3} className="g-3">
                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      value="1"
                      label="Parking Area"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" value="2" label="Wifi" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" value="3" label="Smart TV" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" value="4" label="AC" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" value="5" label="Kitchen" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" value="6" label="Balcony" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" value="7" label="Smoke Area" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      value="8"
                      label="Security Camera"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" value="9" label="Pool" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      value="10"
                      label="Internet Area"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" value="11" label="Toilet" />
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <div className="divButton mt-4 d-flex justify-content-between align-items-center">
              <Button
                className="me-2 col-6 btCancel"
                variant="secondary"
                onClick={props.close}
              >
                Cancel
              </Button>

              <Button
                className="col-6 btAddnew"
                variant="primary"
                onClick={handleAddnew}
              >
                Add New Homestay
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddMyhomestay;
