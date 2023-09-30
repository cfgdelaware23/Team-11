import React, {useState} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './Eligibility.css';
import logoImage from '../logo.png';
export default function Eligibility(){
    const navigate = useNavigate();

    const [getsnap, setsnap] = useState(false);
    const [getebt, setebt] = useState(false);
    const [gethousing, sethousing] = useState(false);
    const {state} = useLocation();
    
    const addCustomerToDB = (financialDetails) => {
        // if getsnap is true, add "snap" to financialDetails, if getebt is true, add "ebt" to financialDetails, if gethousing is true, add "housing" to financialDetails
        if (getsnap){
            financialDetails.push("snap");
        }
        if (getebt){
            financialDetails.push("ebt");
        }
        if (gethousing){
            financialDetails.push("housing");
        }
        state.financialDetails = financialDetails;
        navigate('/home', {
            state: state,
        });
        
        

        
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
            <button className="submitContainer" onClick={() => addCustomerToDB(state.financialDetails)}>Submit</button>
        </div>
    
    )
    
    
    
}
