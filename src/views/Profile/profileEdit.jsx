import React, {useState} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom"
import { Col, Card, Container, Button, FloatingLabel, Form } from 'react-bootstrap'
import { MdOutlineArrowBackIos } from 'react-icons/md'
// import NavLogin from '../../components/navbarLogin'
// import Footer from '../../components/footer'
import "./style.css";

const ProfileEdit = () => {
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

	return  (
		<div className="w-100 p-5 row editProfile">
			<h2 classnameName="title mt-5"> <a className="cursor-pointer" onClick={()=>navigate(`/`)}><MdOutlineArrowBackIos/></a> Home</h2>
	
			<Container className="mt-3 d-flex justify-content-center align-items-center row">
				<div className="dataProfile col-8">
				<h3 className="text-center mb-5">Edit Profile</h3>

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
          <FloatingLabel label="Phone Number" className="mb-3 mt-3">
            <Form.Control type="text" placeholder="Phone Number" onChange={e => setField('phonenumber', e.target.value)} required
              isInvalid={ !!errors.phonenumber }/>
            <Form.Control.Feedback type='invalid'>
              { errors.phonenumber }
            </Form.Control.Feedback>
          </FloatingLabel>        
        </Form.Group>

				<Form.Group controlId="gender" >
          <Form.Label>Gender: </Form.Label>
          
            <div className="d-flex justify-content-between align-items-center">
            <Form.Check className="col-6 mb-5"
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
              
            <Form.Check className="col-6 mb-5"
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

				</div>
			</Container>

			<Card className="cardDel shadow-5 d-flex mb-5 justify-content-center align-items-center">
  			<Card.Body className="col-8 row">
					<Col className="col-10">
					<h5 ><strong>Delete Account</strong></h5>
      		<p >By deleting your account, you will lose all your data</p>
					</Col>
					<div className="col-2 d-flex justify-content-start align-items-center">
					<Button className="btEdit "> Delete </Button>
					</div>
					
				</Card.Body>
			</Card>
	
			<Container className="d-flex justify-content-center align-items-center">
				<div className="col-9">
					<Button className="col-12 btEdit"> Save Change </Button>
				</div>
			</Container>
			
	
		</div>
		)
	}

export default ProfileEdit;