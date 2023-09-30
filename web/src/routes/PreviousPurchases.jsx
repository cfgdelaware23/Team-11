import React, {useState} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './PreviousPurchases.css';
import logoImage from '../logo.png';
export default function PreviousPurchases(){
    function request(){
        alert("Thank you, we have recieved your feedback!");

    }
    return(
        <div className="PreviousPurchases">
        <img className="logo" src={logoImage} alt='import'></img><br/>
        <h1 className="ViewContainer">Here are your previous purchases: </h1>
        <div className="PreviousContainer"></div>
        </div>
    )
}