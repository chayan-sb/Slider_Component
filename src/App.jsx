
import BrightnessSlider from './components/VerticalSliders/BrightnessSlider';
import VolumeSlider from './components/VerticalSliders/VolumeSlider';
import ContrastSlider from './components/VerticalSliders/ContrastSlider';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Sliders Control Panel</h1>
      <div className="sliders-container">
        <div className="slider-card">
          <BrightnessSlider />
        </div>
        <div className="slider-card">
          <ContrastSlider />
        </div>
        <div className="slider-card">
          <VolumeSlider />
        </div>
      </div>
    </div>
  );
};

export default App;

