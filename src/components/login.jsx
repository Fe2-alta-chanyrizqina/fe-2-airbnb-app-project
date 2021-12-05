import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Navigation from "./navbar";
import "./style.css";

const Login = (props) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { email, password } = form;

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
    const regexEmail =
      // eslint-disable-next-line
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const newErrors = {};
    // email errors
    if (!email || email === "") newErrors.email = "cannot be blank!";
    else if (regexEmail.test(email) === false)
      newErrors.email = "email is not valid!";
    // password errors
    if (!password || password === "") newErrors.password = "cannot be blank!";
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      setLoading(true);

      const objData = {
        email: email,
        password: password,
      };

      console.log(objData);

      axios
        .post("http://3.132.11.210/login", objData)
        .then((response) => {
          console.log(response.data.token);
          console.log(response.data.message);
          console.log(response.data.status);
          console.log(response.data.id);
          console.log(response.data.name);

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);

          swal("Yaaay!", response.data.message, "success");

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
    <Navigation />;
    return <Spinner className="spinner" animation="grow" variant="" />;
  }
  return (
    <>
      <Modal
        className="modalLogin"
        backdrop="static"
        keyboard={false}
        dialogClassName="col-7"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
      >
        <Modal.Body className="p-5 transparent-style">
          <div>
            <h3 className="text-center mb-4">Login</h3>
            <Form.Group className="mb-2">
              <FloatingLabel label="Email" className="mb-3 mt-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
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
              <FloatingLabel label="Password" className="mb-3 mt-3">
                <Form.Control
                  type="password"
                  onChange={(e) => setField("password", e.target.value)}
                  placeholder="Password"
                  required
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <div className="divButton mt-4 d-flex justify-content-between align-items-center">
              <Button
                className="me-2 col-6 btCancel"
                variant="secondary"
                onClick={props.close}
              >
                Cancel
              </Button>

              <Button
                className="col-6 btLogin"
                variant="primary"
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
