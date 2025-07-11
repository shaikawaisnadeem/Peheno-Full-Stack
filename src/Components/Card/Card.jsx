import React from 'react'
import './Card.css'
import Details from '../ProductDetails/Details';
import { useNavigate } from 'react-router-dom';


const Card = ({product}) => {
  const navigate = useNavigate();
  const viewInnerDetails = ()=>{
    navigate(`/product/${product._id}`)
  }
  return (
     <div className="product-grid">
      <div className="product-image-div">
        <img
          src={product.images && product.images.length > 0 ? product.images[0] : ''}
          alt={product.name}
          className="product-image"
        />
        <div className='button-overlay'>
          <button className='buynow-btn' onClick={viewInnerDetails}>Buy Now</button>
        </div>
      </div>
      <div className="product-content">
        <h1>{product.name}</h1>
        <p>{`${product.price}`}</p>
      </div>
    </div>
  )
}

export default Card