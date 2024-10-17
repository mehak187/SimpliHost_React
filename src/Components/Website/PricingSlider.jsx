import React, { useState } from "react";

function PricingSlider() {
  const [properties, setProperties] = useState(25);
  const pricePerProperty = 12;
  const price = properties * pricePerProperty;

  const handleSliderChange = (e) => {
    setProperties(Number(e.target.value));
  };

  const sliderBackgroundStyle = {
    background: `linear-gradient(to right, #3551B6 0%, #3551B6 ${properties}%, #E8FEFF ${properties}%, #E8FEFF 100%)`,
  };

  return (
    <div className="pricing-slider-container">
      <div className="container">
        <div className="pricing-card position-relative">
          <h2 className="text-center fw-semi text-blue">
            Everything You Want, All Included!
          </h2>
          <p className="text-center">
            Only pay for what you need. Our pricing scales as you grow.
          </p>

          <div className="slider-container">
            <div className="slider-labels">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          
            <input
              id="myinput"
              type="range"
              min="0"
              max="100"
              value={properties}
              onChange={handleSliderChange}
              className="slider-input text-blue"
              style={sliderBackgroundStyle}
            />
          </div>

          <div className="pricing-info">
            <p>
              For
              <input
                type="number"
                className="property-input text-blue fw-semi mx-2"
                value={properties}
                onChange={(e) => setProperties(Number(e.target.value))}
                min="0"
                max="100"
              />
              properties, your pricing is{" "}
              <strong className="text-blue">${price}</strong> per month.
            </p>
          </div>

          <div className="text-center position-sign">
            <button className="signup-btn1 rounded-pill py-3 px-sm-4 small" data-bs-toggle="modal" data-bs-target="#signupModal">
              Sign Up Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSlider;
