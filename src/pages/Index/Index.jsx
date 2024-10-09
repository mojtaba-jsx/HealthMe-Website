import React from "react";
import "./Index.css";
import Navbar from "../../components/Navbar/Navbar";
import Landing from '../../components/Landing/Landing'
function Index() {
  return (
    <>
      <div className="home-page">
        <div className="container">
        <Navbar />
        <Landing/>
        </div>
      </div>
    </>
  );
}

export default Index;
