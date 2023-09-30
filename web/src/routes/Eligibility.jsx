import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './Eligibility.css';
import logoImage from '../logo.png';

export default function Eligibility() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [getsnap, setsnap] = useState(false);
  const [getebt, setebt] = useState(false);
  const [gethousing, sethousing] = useState(false);

  // State variables for NO buttons
  const [snapNoClicked, setSnapNoClicked] = useState(false);
  const [ebtNoClicked, setEbtNoClicked] = useState(false);
  const [housingNoClicked, setHousingNoClicked] = useState(false);

  const addCustomerToDB = (financialDetails) => {
    if (getsnap) {
      financialDetails.push("snap");
    }
    if (getebt) {
      financialDetails.push("ebt");
    }
    if (gethousing) {
      financialDetails.push("housing");
    }
    state.financialDetails = financialDetails;
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
