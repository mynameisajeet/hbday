import React, { useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusicToggle = () => {
    const audio = document.getElementById('birthdayMusic');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-container">
      <button onClick={handleMusicToggle} className="music-button">
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
      <audio id="birthdayMusic" src={require('./happy-birthday.mp3')} loop />
    </div>
  );
};

export default MusicPlayer;
