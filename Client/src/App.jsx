import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import Sales from "./pages/Sales"
import Reports from "./pages/Reports"
import Login from "./pages/Login"
import Inventory from "./pages/Inventory"
import Service from "./pages/Service"
import UserManagement from "./pages/UserManagement"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Bookshop from "./pages/Bookshop"
import Restaurant from './pages/Restaurant'
import Bottlewater from "./pages/Bottlewater"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<HomePage />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/management' element={<UserManagement />} />
          <Route path='/sales' element={<Sales />} />
          <Route path='/service' element={<Service />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path="/" element={<Login />} />
          <Route path='/inventory/bookshop' element={<Bookshop />} />
          <Route path='/inventory/restaurant' element={<Restaurant />} />
          <Route path='/inventory/bottle-water' element={<Bottlewater />} />
          <Route path='/inventory/grocery' element={<header />} />
          
        </Routes>
      </Router>
    </>
  );
};

export default App;