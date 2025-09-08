import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage'
import Home from './Pages/Home'
import FarmerDashboard from './Components/Farmer/FarmerDashboard';
import CustomerDashboard from './Components/Customer/CustomerDashboard';
function App() {


  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/farmer-dashboard' element = {<FarmerDashboard/>}></Route>
      <Route path='/customer-dashboard'  element = {<CustomerDashboard/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
