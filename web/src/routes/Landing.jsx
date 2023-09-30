import React, { useState, useEffect } from "react";
import "./landing.css"
import importImg from './logo.png';

export default function Landing() {
  function redirect() {
    alert('You clicked me!');
  }
  return (
    <div>
      <div className = "contentContainer">
      <img className="logo" src={importImg} alt='import'></img><br/>
      <button className="buttonContainer" onClick={redirect}>LOGIN</button>
      <button className="buttonContainer" onClick={redirect}>REGISTER</button>
      <button className="buttonContainer" onClick={redirect}>PRODUCT OF THE DAY</button>
      </div>

    </div>
  );
};

