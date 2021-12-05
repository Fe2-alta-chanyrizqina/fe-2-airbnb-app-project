import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip, OverlayTrigger, Col, Button, Image } from "react-bootstrap";
import { MdOutlineArrowBackIos } from "react-icons/md";
// import Navigation from '../../components/navbar'
// import NavLogin from '../../components/navbarLogin'
// import Footer from '../../components/footer'
// import "./style.css";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="w-100 p-5 row">
      <h2 classnameName="title mt-5">
        {" "}
        <a className="cursor-pointer" onClick={() => navigate(`/`)}>
          <MdOutlineArrowBackIos />
        </a>{" "}
        Home
      </h2>

      <Col className="col-5 mt-3 d-flex justify-content-center align-items-center">
        {/* <Image src={Female1} rounded className="col-5 d-flex" /> */}
      </Col>

      <Col className="dataProfile col-7 mt-3 d-flex justify-content-center align-items-center row">
        <h3 className="text-center mb-2">Profile</h3>
        <h5>Name</h5>
        <p className="mb-3">User Name</p>
        <h5>User Email</h5>
        <p className="mb-3">User Email</p>
        <h5>Phone Number</h5>
        <p className="mb-3">User Phone Number</p>
        <h5>Gender</h5>
        <p className="mb-5">User Gender</p>

        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">Click Me!</Tooltip>}
        >
          <Button className="col-12 btEdit"> Edit </Button>
        </OverlayTrigger>
      </Col>
    </div>
  );
};

export default Profile;
