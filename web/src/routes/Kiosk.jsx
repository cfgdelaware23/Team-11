import {React, useState, useEffect} from "react";
import importImg from './logo.png';
import "./Kiosk.css";
import pepsi from "../pepsi.webp";
import bubly from "../bubly.png";

const pictures = [
    ["pepsi", "bubly"],
    ["random", "random"],
    ["asdf", "asdfa"],
];
let i =  0;

export default function Kiosk() {
    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
            i++;
            i = i % pictures.length;
            setIsFading(true); 
            setTimeout(() => {
                setIndex(i);
                setIsFading(false); 
            }, 100); 
            console.log(i);
        }, 1500);
        
    }, []);

    return (<div>
        <div className="container">
            <img src={pepsi} alt="Pepsi" id="pepsi"/>
            <img src={bubly} alt="Bubly" id="bubly"/>
        </div>
        <div className="text">
            <div id="left"></div>
            <div id="right"></div>
        </div>
    </div>)
}