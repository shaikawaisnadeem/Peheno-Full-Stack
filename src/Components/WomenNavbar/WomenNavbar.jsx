import React from 'react';
import './WomenNavbar.css';

const WomenNavbar = () => {

  return (
    <div className="women-div">
      <div className="image-div">
        <img
          className="image-women"
          src="https://framerusercontent.com/images/J7DsbXFS4IW39a6rQjCrFNzdljs.png?scale-down-to=512"
          alt="Women"
        />
      </div>
      <div className="content-women">
        <a>Shop all</a>
                <a>Outwear</a>
                <a>Tops</a>
                <a>Bottom</a>
                <a>Accessories</a>
      </div>
    </div>
  );
};

export default WomenNavbar;
