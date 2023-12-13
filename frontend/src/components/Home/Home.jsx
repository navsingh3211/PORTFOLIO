/* eslint-disable no-unused-vars */
import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Myprojects from "../MyProjects/MyProjects";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Experience from "../Experience/Experience";
// import Register from "../Register/Register";

const Home = () =>{
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
    
  );
}

export default Home;
