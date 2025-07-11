import React, { use, useState } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';

const Details = () => {
     const { id } = useParams();
  const [products] = use(ReactContext);
  const product = products.find(p => p._id === id);
  const [size, setSize] = useState('XS');
  const [color, setColor] = useState('Cool Blue');
  const [quantity, setQuantity] = useState(1);
  const stock = 5;

  return (
    <div className="product-page">
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
              className={`option-btn ${color === c ? 'selected' : ''} ${c !== 'Cool Blue' ? 'disabled' : ''}`}
              onClick={() => c === 'Cool Blue' && setColor(c)}
              disabled={c !== 'Cool Blue'}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* <div className="quantity-row">
        <div className="quantity-controls">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => Math.min(stock, q + 1))}>+</button>
        </div>
        <span className="stock-text">{stock} in stock</span>
      </div> */}

      <div className="action-buttons">
        <button className="buy-now">Buy Now</button>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Details;
