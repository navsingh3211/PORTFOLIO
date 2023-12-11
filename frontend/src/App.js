/* eslint-disable no-unused-vars */

import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Myprojects from "./components/MyProjects/MyProjects";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Myprojects/>
        <Contacts/>
        <Footer/>

    </>
  )
}



export default App;
