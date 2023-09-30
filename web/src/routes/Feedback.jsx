import React, {useState} from "react";
import './Feedback.css';
import logoImage from '../logo.png';


export default function FeedBack(){
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

        const getNutritionButtonClass = (rating) => {
          return selectedNutritionRating === rating ? 'ratingContainer selected' : 'ratingContainer';
        }
        const getAffordableButtonClass = (rating) => {
            return selectedAffordableRating === rating ? 'rating2Container selected' : 'rating2Container';
        }
        const getProcessButtonClass = (rating) => {
            return selectedProcessRating === rating ? 'rating3Container selected' : 'rating3Container';
        }
        const getOverallButtonClass = (rating) => {
            return selectedOverallRating === rating ? 'rating4Container selected' : 'rating4Container';
        }
      
      
        function request() {
          alert("Thank you, we have received your feedback!");
        }
    return(
        
    <div className="Eligibility">
        <img className="logo" src={logoImage} alt='import'></img><br/>
        <h1 className="questionsContainer">How nutrious would you rank our food?</h1>
        <button className={getNutritionButtonClass(1)} onClick={() => handleNutritionRatingClick(1)}>1</button>
      <button className={getNutritionButtonClass(2)} onClick={() => handleNutritionRatingClick(2)}>2</button>
      <button className={getNutritionButtonClass(3)} onClick={() => handleNutritionRatingClick(3)}>3</button>
      <button className={getNutritionButtonClass(4)} onClick={() => handleNutritionRatingClick(4)}>4</button>
      <button className={getNutritionButtonClass(5)} onClick={() => handleNutritionRatingClick(5)}>5</button>
        <h1 className="questionsContainer">How affordable are our products to you?</h1>
        <button className={getAffordableButtonClass(1)} onClick={() => handleAffordableRatingClick(1)}>1</button>
      <button className={getAffordableButtonClass(2)} onClick={() => handleAffordableRatingClick(2)}>2</button>
      <button className={getAffordableButtonClass(3)} onClick={() => handleAffordableRatingClick(3)}>3</button>
      <button className={getAffordableButtonClass(4)} onClick={() => handleAffordableRatingClick(4)}>4</button>
      <button className={getAffordableButtonClass(5)} onClick={() => handleAffordableRatingClick(5)}>5</button>
        <h1 className="questionsContainer">How easy has the process regarding membership?</h1>
        <button className={getProcessButtonClass(1)} onClick={() => handleProcessRatingClick(1)}>1</button>
      <button className={getProcessButtonClass(2)} onClick={() => handleProcessRatingClick(2)}>2</button>
      <button className={getProcessButtonClass(3)} onClick={() => handleProcessRatingClick(3)}>3</button>
      <button className={getProcessButtonClass(4)} onClick={() => handleProcessRatingClick(4)}>4</button>
      <button className={getProcessButtonClass(5)} onClick={() => handleProcessRatingClick(5)}>5</button>
        <h1 className="questionsContainer">How satisfied are you with Wellfare?</h1>
        <button className={getOverallButtonClass(1)} onClick={() => handleOverallRatingClick(1)}>1</button>
      <button className={getOverallButtonClass(2)} onClick={() => handleOverallRatingClick(2)}>2</button>
      <button className={getOverallButtonClass(3)} onClick={() => handleOverallRatingClick(3)}>3</button>
      <button className={getOverallButtonClass(4)} onClick={() => handleOverallRatingClick(4)}>4</button>
      <button className={getOverallButtonClass(5)} onClick={() => handleOverallRatingClick(5)}>5</button>
        <button className="submitContainer" onClick={request}>Submit</button>
        
    </div>
    
    )
}