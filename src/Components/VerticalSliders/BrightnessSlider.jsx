
import  { useState, useEffect } from 'react';
import '../styles/BrightnessSlider.css';

const BrightnessSlider = () => {
  const [brightness, setBrightness] = useState(100);

  const handleChange = (event) => {
    setBrightness(event.target.value);
  };

  useEffect(() => {
    document.body.style.filter = `brightness(${brightness}%)`;
  }, [brightness]);

  return (
    <div className="brightness-slider-container">
      <label className="slider-label" >Brightness</label>
      <div className="slider-wrapper">
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={handleChange}
          className="brightness-slider"
        />
        <div
          className="slider-fill"
          style={{ height: `${brightness}%` }}
        ></div>
      </div>
      <div className="slider-value">{brightness}%</div>
    </div>
  );
};

export default BrightnessSlider;

