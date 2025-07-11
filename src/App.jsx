import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Details from './Components/ProductDetails/Details';
import ReactContext from './Components/Context/Context.jsx';

const App = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/');
        const responseData = await response.json();
        setProduct(responseData.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    data();
  }, []);

  return (
    <ReactContext
      value={{
        products: product,
        setProduct,
        productLoading: loading,
        productError: error
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ReactContext>
  );
};

export default App;
