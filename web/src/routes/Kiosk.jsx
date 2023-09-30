import {React, useState, useEffect} from "react";
import importImg from './logo.png';
import "./Kiosk.css";
import pepsi from "../pepsi.webp";
import bubly from "../bubly.png";

export default function Kiosk() {

    return (<div>
        <p id="heading">American Heart Association recommends less than 35g sugar daily</p>
        <div className="container">
            <img src={pepsi} alt="Pepsi" id="pepsi"/>
            <img src={bubly} alt="Bubly" id="bubly"/>
        </div>
        <div className="text">
            <p id="caption1">39g sugar</p>
            <p id="caption1">0g sugar</p>
        </div>
    </div>)
}