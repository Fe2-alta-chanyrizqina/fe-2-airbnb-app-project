import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/Home/home.jsx'
import HomeStay from './views/ListStay/listStay.jsx'
import HomeDetails from './views/ListStay/homeDetail';
import Payment from './views/Payment/payment';
import Trip from './views/Trip/trip';

const App = () => {
  return  <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/homes" element={<HomeStay/>}/>
              <Route path="/rooms/:id" element={<HomeDetails/>}/>
              <Route path="/book/stays/:id" element={<Payment/>}/>
              <Route path="/trips" element={<Trip/>}/>
            </Routes>
          </Router>

}
export default App;

