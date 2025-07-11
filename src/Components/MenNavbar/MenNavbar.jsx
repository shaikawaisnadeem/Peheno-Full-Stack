import React from 'react'
import './MenNavbar.css'

const MenNavbar = () => {
  return (
    <div className="men-div">
      <div className="image-div">
        <img
          className="image-men"
          src="https://framerusercontent.com/images/50AU2k1yi7O5Kq8DYBa9hHC14.png?scale-down-to=1024"
          alt="Men"
        />
      </div>
      <div className="content-men">
        <a>Shop all</a>
        <a>Outwear</a>
        <a>Tops</a>
        <a>Bottom</a>
        <a>Accessories</a>
      </div>
    </div>
  )
}

export default MenNavbar
