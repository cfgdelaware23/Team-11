import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./landing.css"
import importImg from './logo.png';

export default function Landing() {
  const navigate = useNavigate();

  const redirect = (path) => {
          navigate('/' + path, {
      });
  }
  return (
    <div>
      <div className = "contentContainer">
      <img className="logo" src={importImg} alt='import'></img><br/>
      <button className="buttonContainer" onClick={() => redirect("Register")}>LOGIN</button>
      <button className="buttonContainer" onClick={() => redirect("Register")}>REGISTER</button>
      <button className="buttonContainer" onClick={() => redirect("Products")}>PRODUCT OF THE DAY</button>
      </div>

    </div>
  );
};

