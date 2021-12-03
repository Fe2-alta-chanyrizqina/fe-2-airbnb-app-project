import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  FloatingLabel,
  Col,
  Row,
  Container,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditMyhomestay = (props) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { name, address, description, facility, price, type } = form;

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
    // email errors
    if (!name || name === "") newErrors.name = "cannot be blank!";
    // password errors
    if (!address || address === "") newErrors.address = "cannot be blank!";
    // description errors
    if (!description || description === "")
      newErrors.description = "cannot be blank!";
    // price errors
    if (!price || price === "") newErrors.price = "cannot be blank!";
    // feature errors
    if (!facility || facility === "") newErrors.facility = "cannot be blank!";
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
      const objData = {
        name: name,
        type: type,
        description: description,
        facility: facility,
        price: price,
        address: address,
      };

      console.log(objData);

      // axios
      //   .post("http://18.188.236.245/login", objData)
      //   .then((response) => {
      //     const message = response.data.message;
      //     console.log(response.data.token);
      //     console.log(response.data.message);
      //     console.log(response.data.status);
      //     console.log(response.data.id);
      //     console.log(response.data.name);

      //     localStorage.setItem("token", response.data.token);
      //     localStorage.setItem("id", response.data.id);
      //     localStorage.setItem("name", response.data.name);

      //     if (props.close) {
      //       props.close();
      //     }

      //     alert(response.data.message);

      //     // navigate(`/`);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  return (
    <>
      <Modal
        className="modalAddhomestay"
        backdrop="static"
        keyboard={false}
        dialogClassName="col-10"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
      >
        <Modal.Body className="p-5">
          <div>
            <h3 className="text-center mb-4">Edit My Homestay</h3>
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
                  <Form.Select aria-label="Select Type">
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
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please write the price.
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

            <Container>
              <Form.Label>Facility :</Form.Label>
              <Row xs={1} md={3} className="g-3">
                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Parking" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Wifi" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Safety Box" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Kitchen" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Pool" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Breakfast" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Balcony" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Gym" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Smoke Alarm" />
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
                Edit Homestay
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default EditMyhomestay;
