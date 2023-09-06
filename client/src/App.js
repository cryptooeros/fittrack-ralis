import { Route, Routes, BrowserRouter} from "react-router-dom";
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
import {  AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route exact path="/home" element={<Home />} />   
          <Route exact path="/food" element={<Food />} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/targets" element={<Target />} />
          <Route exact path="/exercise" element={<Exercise />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contactus" element={<Contact/>}/>
          <Route exact path="/cards" element={<Cards/>}/>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
