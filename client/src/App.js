// import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import Food from "./components/Food/Food";
import Home from "./components/Home/Home";
import Exercise from "./components/Exercise/Exercise";
import Target from "./components/Target/Target";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Dashboard from './components/Dashboard/Dashboard';
import Contact from "./components/Contact/Contact";
import Cards from "./components/Home/Cards/Cards"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />   
          <Route path="/food" element={<Food />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/targets" element={<Target />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<Contact/>}/>
          <Route path="/cards" element={<Cards/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
