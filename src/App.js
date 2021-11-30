import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/Home/home.jsx'
import HomeStay from './views/ListStay/listStay.jsx'
import HomeDetails from './views/ListStay/homeDetail';

const App = () => {
  return  <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/list-home-stay" element={<HomeStay/>}/>
              <Route path="/home-stay-details/:id" element={<HomeDetails/>}/>
            </Routes>
          </Router>

}
export default App;
