import React from 'react';
import './CollectonCards.css';

const CollectionsCard = () => {
  return (
    <div className="collections-card">
      <div className="image-container">
        <img
          src="https://framerusercontent.com/images/XCqSP5aYlNqtDpMOIqzC7uwq4G4.png?scale-down-to=512"
          alt="Collections"
          className="collections-image"
        />
      </div>
      <div className="collections-text">
        <a>All Collections</a>
        <a>Pastel Dreams</a>
        <a>Summer 2025</a>
      </div>
    </div>
  );
};

export default CollectionsCard;
