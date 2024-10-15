import React, { useState } from 'react';

function PricingSlider() {
  const [properties, setProperties] = useState(25);
  const pricePerProperty = 12;
  const price = properties * pricePerProperty;

  const handleSliderChange = (e) => {
    setProperties(Number(e.target.value));
  };

  return (
    <div className="pricing-slider-container">
      <div className="pricing-card">
        <h2 className="text-center">Everything You Want, All Included!</h2>
        <p className="text-center">Only pay for what you need. Our pricing scales as you grow.</p>
        
        <div className="slider-container">
        <div className="slider-labels">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={properties} 
            onChange={handleSliderChange} 
            className="slider-input"
          />

        </div>

        <div className="pricing-info">
          <p>
            For&nbsp;
            <input 
              type="number" 
              className="property-input" 
              value={properties} 
              onChange={(e) => setProperties(Number(e.target.value))} 
              min="0" 
              max="100"
            />
            &nbsp;properties, your pricing is <strong>${price}</strong> per month.
          </p>
        </div>

        <div className="text-center">
          <button className="signup-btn1">Sign Up Now!</button>
        </div>
      </div>
    </div>
  );
}

export default PricingSlider;
