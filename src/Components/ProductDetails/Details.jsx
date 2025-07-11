import React, { useContext, useState } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import ReactContext from '../Context/Context';
import Navbar from '../Navbar/Navbar';
import { MoonLoader } from 'react-spinners';
import { CiSaveUp1 } from "react-icons/ci";

import { FaBarcode } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const { products, coupon, setCoupon } = useContext(ReactContext);
  const [showCoupon, setShowCoupon] = useState(false);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const product = products?.find(p => p._id === id);

  const handleGenerateCoupon = () => {
    setCoupon();
    setShowCoupon(true);
  };

  if (!product) {
    return (
      <div className="loader-details">
        <MoonLoader color="#36d7b7" loading={true} size={50} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="product-page">
        <img src={product.images[0]} alt={product.name} className="product-image" />
        <div className='right-details-div'>
          <p className="breadcrumb">{product.gender}</p>
          <h1 className="title">{product.name}</h1>
          <p className="description">{product.description}</p>
          <p className="price">{product.price}</p>

          <div className="section">
            <p className="section-label">Size</p>
            <div className="options">
              {product.size.map(s => (
                <button
                  key={s}
                  className={`option-btn ${size === s ? 'selected' : ''}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <p className="section-label">Color</p>
            <div className="options">
              {product.color.map(c => (
                <button
                  key={c}
                  className={`option-btn ${color === c ? 'selected' : ''}`}
                  onClick={() => setColor(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className='coupon-section'>
                <div className='coupon-generator'>
            {showCoupon && (
              <div className='random-text show-coupon'>
                <p>{coupon}</p>
              </div>
            )}
            <div className='coupon-text'>
              <p>Generate Coupon</p>
              <p>
                <FaBarcode
                  size={40}
                  onClick={handleGenerateCoupon}
                  className='barcode'
                  style={{ cursor: 'pointer' }}
                  title="Click to generate coupon"
                />
              </p>
            </div>
          </div>
            <div className='save-coupon'>
              <p>Save this coupon for future use</p>
              <CiSaveUp1 size={30} style={{cursor:'pointer'}}/>
            </div>
          </div>

          <div className="action-buttons">
            <button className="buy-now">Buy Now</button>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;