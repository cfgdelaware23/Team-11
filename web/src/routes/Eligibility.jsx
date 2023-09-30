import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './Eligibility.css';
import logoImage from '../logo.png';

export default function Eligibility() {
  const navigate = useNavigate();

    const [getsnap, setsnap] = useState(false);
    const [snapNoClicked, setSnapNoClicked] = useState(false);
    const [getebt, setebt] = useState(false);
    const [ebtNoClicked, setEbtNoClicked] = useState(false);
    const [gethousing, sethousing] = useState(false);
    const [housingNoClicked, setHousingNoClicked] = useState(false);
    const {state} = useLocation();

    const addCustomerToDB = (financialDetails) => {
        let qualifiers = new Set();
        if (getsnap){
            qualifiers.add("snap");
        }
        if (getebt){
            qualifiers.add("ebt");
        }
        if (gethousing){
            qualifiers.add("housing");
        }

        console.log(state);

        fetch(`http://localhost:3000/user/signup`, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        user: {
                            name: state.first_name + " " + state.last_name,
                            username: state.username,
                            qualifiers: {
                                publicHousing: qualifiers.has("housing"),
                                EBT: qualifiers.has("ebt"),
                                SNAP: qualifiers.has("snap"),
                            }
                        }
                    }
                ),
            }
            
        )

        navigate('/home', {
            state: state,
        });
        
        
    }

    const buttonClass = (isActive) => {
        return isActive ? 'yesContainer clicked' : 'yesContainer';
      }
    
      // Modify the NO button classes
      const nobuttonClass = (isActive, noClicked) => {
        return isActive ? (noClicked ? 'noContainer clicked' : 'noContainer') : 'noContainer';
      }

 return (
    <div className="Eligibility">
      <img className="logo" src={logoImage} alt='import'></img><br />
      <h1 className="snapContainer">Are you part of Snap?</h1>
      <div className="yes1Container"></div>
      <button className={buttonClass(getsnap)} onClick={() => setsnap(true)}>YES</button>
      {/* Add the NO button class and onClick handler */}
      <button className={nobuttonClass(!getsnap, snapNoClicked)} onClick={() => { setsnap(false); setSnapNoClicked(true); }}>NO</button>
      <h1 className="ebtContainer">Are you part of EBT?</h1>
      <button className={buttonClass(getebt)} onClick={() => setebt(true)}>YES</button>
      {/* Add the NO button class and onClick handler */}
      <button className={nobuttonClass(!getebt, ebtNoClicked)} onClick={() => { setebt(false); setEbtNoClicked(true); }}>NO</button>
      <h1 className="housingContainer">Do you have public housing?</h1>
      <button className={buttonClass(gethousing)} onClick={() => sethousing(true)}>YES</button>
      {/* Add the NO button class and onClick handler */}
      <button className={nobuttonClass(!gethousing, housingNoClicked)} onClick={() => { sethousing(false); setHousingNoClicked(true); }}>NO</button>
      <button className="submitContainer" onClick={() => addCustomerToDB(state.financialDetails)}>Submit</button>
    </div>
  )
}

    
    
    

