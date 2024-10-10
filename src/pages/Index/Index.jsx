import React from "react";
import "./Index.css";
import Navbar from "../../components/Navbar/Navbar";
import Landing from '../../components/Landing/Landing'
import BMIFeature from '../../components/BMIFeature/BMIFeature'
function Index() {
  return (
    <>
      <div className="home-page">
        <div className="container">
        <Navbar />
        <Landing/>
        <BMIFeature/>
        </div>
      </div>
    </>
  );
}

export default Index;
