
import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/Home/home.jsx'
import HomeStay from './views/ListStay/listStay.jsx'
import HomeDetails from './views/ListStay/homeDetail';
import Payment from './views/Payment/payment';
import Trip from './views/Trip/trip';
import Profile from './views/Profile/profile.jsx'
import ProfileEdit from './views/Profile/profileEdit.jsx'
import DetailMyhomestay from './views/MyHomestay/detailMyhomestay'

const App = () => {

  return (
  <Router >

    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/profile/:id" element={<Profile />}/>
      <Route path="/profileEdit/:id" element={<ProfileEdit />}/>

      <Route path="/homes" element={<HomeStay/>}/>
      <Route path="/rooms/:id" element={<HomeDetails/>}/>
      <Route path="/book/stays/:id" element={<Payment/>}/>
      <Route path="/trips" element={<Trip/>}/>

      <Route path="/myhomes/:id" element={<DetailMyhomestay/>}/>

    </Routes>
    </Router>
  );
}


}
export default App;

