import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/Home/home.jsx'
import HomeStay from './views/ListStay/listStay.jsx'
import HomeDetails from './views/ListStay/homeDetail';
import Payment from './views/Payment/payment';
import Trip from './views/Trip/trip';
import Login from './components/login';
import Register from './components/register';
import ProfileEdit from './views/Profile/profileEdit';
import Profile from './views/Profile/profile';
import HomeStayLocation from './views/ListStay/ListByLocation';
import "react-datepicker/dist/react-datepicker.css"


const App = () => {
  return  <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/homes" element={<HomeStay/>}/>
              <Route path="/homes/location/:location" element={<HomeStayLocation/>}/>
              <Route path="/rooms/:id" element={<HomeDetails/>}/>
              <Route path="/book/stays/:id" element={<Payment/>}/>
              <Route path="/trips" element={<Trip/>}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>  
              <Route path="/profile" element={<Profile />}/>
              <Route path="/profileEdit" element={<ProfileEdit />}/>
            </Routes>
          </Router>

}
export default App;

