import React, {useState} from "react";
import './Eligibility.css';
import logoImage from '../logo.png';
export default function Eligibility(props){

    const [getsnap, setsnap] = useState(false);
    const [getebt, setebt] = useState(false);
    const [gethousing, sethousing] = useState(false);

    function redirect(){
        alert("Go to next page")
    }
    return (
        
        <div className="Eligibility">
            <img className="logo" src={logoImage} alt='import'></img><br/>
            <h1 className="snapContainer">Are you part of Snap?</h1>
            <div className="yes1Container"></div>
            <button className="yesContainer" onClick={() => setsnap(true)}>YES</button>
            <button className="noContainer" onClick={() => setsnap(false)}>NO</button>
            <h1 className="ebtContainer">Are you part of EBT?</h1>
            <button className="yesContainer" onClick={() => setebt(true)}>YES</button>
            <button className="noContainer" onClick={() => setebt(false)}>NO</button>
            <h1 className="housingContainer">Do you have public housing?</h1>
            <button className="yesContainer" onClick={() => sethousing(true)}>YES</button>
            <button className="noContainer" onClick={() => sethousing(false)}>NO</button>
            <button className="submitContainer" onClick={redirect}>Submit</button>
        </div>
     
    )
    if (getsnap){
        props.append(true);
    }
    if (getebt){
        props.append(true);
    }
    if (gethousing){
        props.append(true);
    }
    
    
}
