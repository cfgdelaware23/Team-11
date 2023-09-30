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
        <div className="Eligibility w-full flex flex-col items-center">
            <img className="logo" src={logoImage} alt='import'></img>
            <h1 className="mt-4 text-lg">Are you part of Snap?</h1>
            <div className="flex m-2">
                <button className={`mr-2 p-2 px-5 ${getsnap?"bg-blue-600":"bg-blue-400"} h-10 text-lg text-white rounded`} onClick={() => setsnap(true)}>YES</button>
                {/* Add the NO button class and onClick handler */}
                <button className={`mr-2 p-2 px-5 ${!getsnap?"bg-red-600":"bg-red-400"} h-10 text-lg text-white rounded`} onClick={() => { setsnap(false); setSnapNoClicked(true); }}>NO</button>
            </div>
            <h1 className="text-lg">Are you part of EBT?</h1>
            <div className="flex">
                <button className={`mr-2 p-2 px-5 ${getebt?"bg-blue-600":"bg-blue-400"} h-10 text-lg text-white rounded`} onClick={() => setebt(true)}>YES</button>
                {/* Add the NO button class and onClick handler */}
                <button className={`mr-2 p-2 px-5 ${!getebt?"bg-red-600":"bg-red-400"} h-10 text-lg text-white rounded`} onClick={() => { setebt(false); setEbtNoClicked(true); }}>NO</button>
            </div>
            <h1 className="text-lg">Do you have public housing?</h1>
            <div>
                
            <button className={`mr-2 p-2 px-5 ${gethousing?"bg-blue-600":"bg-blue-400"} h-10 text-lg text-white rounded`} onClick={() => sethousing(true)}>YES</button>
            <button className={`mr-2 p-2 px-5 ${!gethousing?"bg-red-600":"bg-red-400"} h-10 text-lg text-white rounded`} onClick={() => { sethousing(false); setHousingNoClicked(true); }}>NO</button>
            </div>
            {/* Add the NO button class and onClick handler */}
            
            <button className="mt-3 text-lg bg-red-400 h-10 p-3 flex items-center  text-white rounded" onClick={() => addCustomerToDB(state.financialDetails)}>Submit</button>
        </div>
  )
}

    
    
    

