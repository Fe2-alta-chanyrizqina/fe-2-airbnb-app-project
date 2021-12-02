import React, {useState} from "react";

import axios from "axios";
import { Button, Modal, Form, FloatingLabel} from "react-bootstrap";
import { useNavigate} from "react-router-dom"

const Register = (props) => {
  const navigate = useNavigate()

  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})
  const { name, email, password, phonenumber, gender} = form

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    // Check and see if errors exist, and remove them from the error object:
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const findFormErrors = () => {
    const newErrors = {}
    //eslint-disable-next-line
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    // name errors
    if ( !name || name === '' ) newErrors.name = 'cannot be blank!'
    // email errors
    if ( !email || email === '' ) newErrors.email = 'cannot be blank!'
    else if(regexEmail.test(email) === false) newErrors.email = 'email is not valid!'
    // password errors
    if ( !password || password === '' ) newErrors.password = 'cannot be blank!'
    else if ( password.length < 4 ) newErrors.password = 'password is too short!'
    // password errors
    if ( !phonenumber || phonenumber === '' ) newErrors.phonenumber = 'cannot be blank!'
    else if ( phonenumber.length < 6 ) newErrors.phonenumber = 'phone number is too short!'
    // gender errors
    if ( !gender || gender === '' ) newErrors.gender = 'please choose!'
    
    return newErrors
}

  const handleRegist = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors()
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors)
    } else { 
      const objData = {
        "username"    : name,
        "email"       : email,
        "password"    : password,
        "phonenumber" : phonenumber,
        "gender"      : gender
      }
  
      console.log(objData);

  axios.post('http://18.188.236.245/register',objData)
  .then((response) => {
    console.log(response.data.message);

    navigate(`/`);
  })
  .catch(err => {
    console.log(err);
  })
    }
};


  return (
    
  <>
    <Modal 
      backdrop="static" keyboard={false}
      dialogClassName="col-7"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show} 
      >

      <Modal.Body className="p-5">
        <div>
          <h3  className="text-center">Create Account</h3>
          <Form.Group className="mb-2">
          <FloatingLabel label="Name" className="mb-3 mt-3">
            <Form.Control type="text" placeholder="Name" onChange={e => setField('name', e.target.value)} required
              isInvalid={ !!errors.name }/>
            <Form.Control.Feedback type='invalid'>
              { errors.name }
            </Form.Control.Feedback>
          </FloatingLabel>        
        </Form.Group>

				<Form.Group className="mb-2">
          <FloatingLabel label="Email" className="mb-3 mt-3">
            <Form.Control type="email" placeholder="Email" onChange={e => setField('email', e.target.value)} required
              isInvalid={ !!errors.email }/>
            <Form.Control.Feedback type='invalid'>
              { errors.email }
            </Form.Control.Feedback>
          </FloatingLabel>        
        </Form.Group>

        <Form.Group className="mb-2">
          <FloatingLabel label="Password" className="mb-3 mt-3">
            <Form.Control type="password" placeholder="Password" onChange={e => setField('password', e.target.value)} required
              isInvalid={ !!errors.password }/>
            <Form.Control.Feedback type='invalid'>
              { errors.password }
            </Form.Control.Feedback>
          </FloatingLabel>        
        </Form.Group>

				<Form.Group className="mb-2">
          <FloatingLabel label="Phone Number" className="mb-3 mt-3">
            <Form.Control type="text" placeholder="Phone Number" onChange={e => setField('phonenumber', e.target.value)} required
              isInvalid={ !!errors.phonenumber }/>
            <Form.Control.Feedback type='invalid'>
              { errors.phonenumber }
            </Form.Control.Feedback>
          </FloatingLabel>        
        </Form.Group>

          <Form.Group controlId="gender" className="mb-4 ">
          <Form.Label>Gender: </Form.Label>
          
            <div className="d-flex justify-content-between align-items-center">
            <Form.Check className="col-6"
            inline
            value="male"
            type="radio"
            aria-label="radio 1"
            label="Male"
            onChange={e => setField('gender', e.target.value)}
            checked={gender === "male"} required
            isInvalid={ !!errors.gender }
            feedback={ errors.gender }
            feedbackType="invalid"/>
              
            <Form.Check className="col-6"
            inline
            value="female"
            type="radio"
            aria-label="radio 2"
            label="Female"
            onChange={e => setField('gender', e.target.value)}
            checked={gender === "female"} required
            isInvalid={ !!errors.gender }
            feedback={ errors.gender }
            feedbackType="invalid"/>
            </div>
            
          </Form.Group>
          

          <div className="divButton mt-3 d-flex justify-content-between align-items-center">
            <Button className="me-2 col-6 btCancel" variant="secondary" onClick={props.close}>
              Cancel
            </Button>

            <Button className="col-6 btRegister" variant="primary" onClick={handleRegist}>
              Register
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  </>
  );
}


export default Register;