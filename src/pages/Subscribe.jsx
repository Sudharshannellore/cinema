import React from "react";
import "../styles/pages/Subscribe.css"

const Subscribe =()=>{
    return(<>
        <div className="logo">
            <img src="/Icons/playIcon.png" alt="playIcon" />
            <h3>Cinema</h3>
        </div>
    <div className="sub-cont">
   <div>
    <img src="/Icons/film-reel.png" alt="film"/>
    </div>       
  <form class="plan-chooser">
  <div class="header">
  <span class="title">Choose your plan</span>
  </div>
  <div class="plan-option">
  <input value="free" id="free" name="plan" type="radio"/>
  <label for="free">
  <div class="plan-info">
  <span class="plan-cost">$10</span>
  <span class="plan-name">Day plan </span>
  </div>
  </label>
  </div>
  <div class="plan-option">
  <input value="monthly" id="monthly" name="plan" type="radio"/>
  <label for="monthly">
  <div class="plan-info">
  <span class="plan-cost">$30/month</span>
  <span class="plan-name">Monthly plan</span>
  </div>
  </label>
  </div>
  <div class="plan-option">
  <input value="annual" id="annual" name="plan" type="radio"/>
  <label for="annual">
       <div class="plan-info">
      <span class="plan-cost">$20/month</span>
      <span class="plan-name">$250 billed in a year</span>
      </div>
      <span class="reduction"> Save 20% </span>
    </label>
  </div>
   <button class="choose-btn"> Buy Now </button>
</form>
    </div>
    </>)
}
export default Subscribe;