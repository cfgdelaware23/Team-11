import React, {useState} from "react";
import './Feedback.css';
import logoImage from './logo.png';


export default function Feedback(){
    const [selectedNutritionRating, setSelectedNutritionRating] = useState(null);
    function handleNutritionRatingClick(rating) {
        setSelectedNutritionRating(rating);
    }
    const [selectedAffordableRating, setSelectedAffordableRating] = useState(null);
    function handleAffordableRatingClick(rating) {
        setSelectedAffordableRating(rating);
    }
    const [selectedProcessRating, setSelectedProcessRating] = useState(null);
    function handleProcessRatingClick(rating) {
        setSelectedProcessRating(rating);

    }
    const [selectedOverallRating, setSelectedOverallRating] = useState(null);
    function handleOverallRatingClick(rating) {
        setSelectedOverallRating(rating);
    }
    function request(){
        alert("Thank you, we have recieved your feedback!");

    }

    document.querySelectorAll('.ratingContainer, .rating2Container, .rating3Container, .rating4Container, .submitContainer').forEach(function(button) {
        button.addEventListener('click', function() {
            button.classList.add('pressed');
        });
    });
    return(
        
    <div className="Eligibility">
        <h1 className="header">Give us your feedback! </h1>
        {/* <img className="logo" src={logoImage} alt='import'></img><br/> */}
        <h1 className="questionsContainer">How nutrious would you rank our food?</h1>
        {[...Array(5)].map((x, i)=>{
            if (selectedNutritionRating === i+1){
                return <button key={`b1${i}`} className="ratingContainer pressed" onClick={() => handleNutritionRatingClick(i+1)}>{i+1}</button>
            }
            return <button key={`b1${i}`} className="ratingContainer" onClick={() => handleNutritionRatingClick(i+1)}>{i+1}</button>
        })}
        <h1 className="questionsContainer">How affordable are our products to you?</h1>
        <button className="rating2Container" onClick={() => handleAffordableRatingClick(1)}>1</button>
        <button className="rating2Container" onClick={() => handleAffordableRatingClick(2)}>2</button>
        <button className="rating2Container" onClick={() => handleAffordableRatingClick(3)}>3</button>
        <button className="rating2Container" onClick={() => handleAffordableRatingClick(4)}>4</button>
        <button className="rating2Container" onClick={() => handleAffordableRatingClick(5)}>5</button>
        <h1 className="questionsContainer">How easy has the process regarding membership?</h1>
        <button className="rating3Container" onClick={() => handleProcessRatingClick(1)}>1</button>
        <button className="rating3Container" onClick={() => handleProcessRatingClick(2)}>2</button>
        <button className="rating3Container" onClick={() => handleProcessRatingClick(3)}>3</button>
        <button className="rating3Container" onClick={() => handleProcessRatingClick(4)}>4</button>
        <button className="rating3Container" onClick={() => handleProcessRatingClick(5)}>5</button>
        <h1 className="questionsContainer">How satisfied are you with Wellfare?</h1>
        <button className="rating4Container" onClick={() => handleOverallRatingClick(1)}>1</button>
        <button className="rating4Container" onClick={() => handleOverallRatingClick(2)}>2</button>
        <button className="rating4Container" onClick={() => handleOverallRatingClick(3)}>3</button>
        <button className="rating4Container" onClick={() => handleOverallRatingClick(4)}>4</button>
        <button className="rating4Container" onClick={() => handleOverallRatingClick(5)}>5</button>
        <button className="submitContainer" onClick={request}>Submit</button>
        
    </div>
    
    )
}
