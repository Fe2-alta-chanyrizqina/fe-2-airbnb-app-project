
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Button, Image, Spinner } from "react-bootstrap";
import { MdOutlineArrowBackIos } from "react-icons/md";
import swal from "sweetalert";
import Female1 from "../../images/female/female_1.jpg";
import Footer from "../../components/footer";

import "./style.css";
import ListMyhomestay from "../MyHomestay/listMyhomestay";

const Profile = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [user, getUser] = useState("");

  const [loading, setLoading] = useState(false);

  const goToEditProfile = () => {
    navigate(`/profileEdit/`);
  };

  const goToHome = () => {
    navigate(`/`);
  };

  const images = [Female1, Female2, Female3];

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => getAllDataUSer(), []);

  const getAllDataUSer = () => {
    setLoading(true);
    console.log(localStorage.getItem("id"));
    axios
      .get("http://3.132.11.210/users/" + localStorage.getItem("id"), config)
      .then((response) => {
        const AllData = response.data.data;
        // swal(response.data.message, "success");
        getUser(AllData);
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
      <div className="w-100 p-5 row">
        <h2 classnameName="title mt-8">
          {" "}
          <a className="cursor-pointer" onClick={() => goToHome()}>
            <MdOutlineArrowBackIos />
          </a>{" "}
          Home
        </h2>

        {/* Profile Picture  */}
        <Col className="profpict col-5 mt-3 d-flex justify-content-center align-items-center">
          <Image src={Female1} rounded className="col-5 d-flex" />
        </Col>

        {/* Detail Profile */}
        <Col className="dataProfile col-7 mt-3 mb-5 d-flex justify-content-top align-items-center row">
          <h3 className="text-center mb-2">Profile</h3>
          <h5>Name</h5>
          <p className="mb-3">{user.Name}</p>
          <h5>User Email</h5>
          <p className="mb-3">{user.Email}</p>
          <h5>Phone Number</h5>
          <p className="mb-3">{user.PhoneNumber}</p>
          <h5>Gender</h5>
          <p className="mb-5">{user.Gender}</p>

          <Button className="col-12 btEdit" onClick={() => goToEditProfile()}>
            {" "}
            Edit Profile{" "}
          </Button>
        </Col>

        <div className="divider col-12"></div>

        {/* List MyHomestay */}
        <ListMyhomestay />
      </div>

      <Footer />
    </>
  );
};

export default Profile;
