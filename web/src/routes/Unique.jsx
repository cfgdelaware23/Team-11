import React, {useState} from "react";
import './Unique.css';
import logoImage from '../logo.png';

export default function Unique(){
    function request(){
        alert("Thank you, we have recieved your feedback!");

    }
    return(
        <div className = "Unique">
            <h1> hello!</h1>
            <img className="logo" src={logoImage} alt='import'></img><br/>
        </div>
    )
}
