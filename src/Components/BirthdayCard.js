import React from 'react';
import './BirthdayCard.css';

const BirthdayCard = () => {
  return (
    <div className="birthday-card">
      <h1>🎉 Happy Birthday! 🎉</h1>
      <h2>Wishing you all the best on your special day!</h2>
      <img src={require('./cake.png')} alt="Birthday Cake" className="cake-image" />

      <div className="balloons">
        🎈🎈🎈🎈
      </div>
    </div>
  );
};

export default BirthdayCard;
