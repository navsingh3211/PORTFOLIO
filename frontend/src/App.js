/* eslint-disable no-unused-vars */

import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { useSelector } from "react-redux";
// import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Myprojects from "./components/MyProjects/MyProjects";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Experience from "./components/Experience/Experience";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home.jsx"

function App() {
  const isAuthenticated =useSelector((store)=>store.register.isAuthenticated);
  // const isAuthenticated = false;
  console.log(isAuthenticated,'isAuthenticated');
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Register />} />
      </Routes>
    </Router>
    
    
  )
}



export default App;
