import React, { use } from 'react';
import './PehenoDreams.css';
import Card from '../Card/Card';
import { MoonLoader } from 'react-spinners'; 
import ReactContext from '../Context/Context';

const PehenoDreams = () => {
  const { products, productLoading: loading, productError: error } = use(ReactContext);
  return (
    <div className='main-product-div'>
      <h1 className='peheno-head'>Peheno Dreams</h1>
      <p className='peheno-para'>Soft hues, bold styles — embrace the pastel aesthetic.</p>

      {loading && <MoonLoader color="#36d7b7" loading={loading} size={50} />}

      <div className='main-grid'>   
        {products.map((product) => (
          <div className='product-grid' key={product._id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PehenoDreams;
