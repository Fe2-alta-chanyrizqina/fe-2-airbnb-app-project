import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Image, Modal } from "react-bootstrap";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Female1 from "../../images/female/female_1.jpg";
import Female2 from "../../images/female/female_2.jpg";
import Female3 from "../../images/female/female_3.jpg";

// import Navigation from '../../components/navbar'
// import NavLogin from '../../components/navbarLogin'
// import Footer from '../../components/footer'

import "./style.css";
import ListMyhomestay from "../MyHomestay/listMyhomestay";

const Profile = () => {
  const navigate = useNavigate();

  const goToEditProfile = () => {
    navigate("/profileEdit");
  };

  const images = [Female1, Female2, Female3];

  // get DataUser //
  // const [user, getUser] = useState('')
  // const getDatauser = () => {
  //   axios.get("http://18.188.236.245/user/"+localStorage.getItem("id"), localStorage.getItem("token"))

  // }

  //   useEffect(() =>{
  //     const changeImage = () => {
  //       const randomNumber = Math.floor(Math.random() * images.length);
  //       this.setState({
  //         currentImageIndex: randomNumber
  //       });
  //     }
  //     changeImage()
  // });

  return (
    <div className="w-100 p-5 row">
      <h2 classnameName="title mt-5">
        {" "}
        <a className="cursor-pointer" onClick={() => navigate(`/`)}>
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
        <p className="mb-3">User Name</p>
        <h5>User Email</h5>
        <p className="mb-3">User Email</p>
        <h5>Phone Number</h5>
        <p className="mb-3">User Phone Number</p>
        <h5>Gender</h5>
        <p className="mb-5">User Gender</p>

        <Button className="col-12 btEdit" onClick={() => goToEditProfile()}>
          {" "}
          Edit Profile{" "}
        </Button>
      </Col>

      <div className="divider col-12"></div>

      {/* List MyHomestay */}
      <ListMyhomestay />
    </div>
  );
};

export default Profile;
