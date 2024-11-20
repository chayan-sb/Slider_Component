import  { useState } from 'react';
import '../styles/ContrastSlider.css';

const ContrastSlider = () => {
  const [contrast, setContrast] = useState(100);

  const handleContrastChange = (event) => {
    const value = event.target.value;
    setContrast(value);

   
    document.documentElement.style.filter = `contrast(${value}%)`;
  };

  return (
    <div className="contrast-slider-container">
      <label className="slider-label">Contrast</label>
      <input
        type="range"
        min="0"
        max="100"
        value={contrast}
        onChange={handleContrastChange}
        className="contrast-slider"
      />
      <div className="slider-value">{contrast}%</div>
    </div>
  );
};

export default ContrastSlider;
