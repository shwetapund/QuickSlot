import React from "react";
import "./Home.css";
import Dashboard from "../Dashboard/Dashboard";
import { Link } from "react-router-dom";
import Navbar from './../../components/Navbar/Navbar';

function Home() {
  return (
    <>
      <div className="homecss">
       <Navbar/>
       
      </div>
    </>
  );
}

export default Home;
