
import  { useState, useRef } from 'react';
import '../styles/VolumeSlider.css';

const VolumeSlider = () => {
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleVolumeChange = (event) => {
    const value = event.target.value;
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value / 100; 
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="volume-slider-container">

      <div className="audio-player">
        <p className="audio-title">Now Playing: Mathi Mathi</p>
        <button className="audio-button" onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      <label className="slider-label">Volume</label>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className={`volume-slider ${volume > 80 ? 'high-volume' : ''}`}
      />
      <div className="slider-value">{volume}%</div>

      <audio ref={audioRef} src="/Mathi Mathi-MobCup.vip.mp3" loop />
    </div>
  );
};

export default VolumeSlider;
