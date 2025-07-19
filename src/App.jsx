import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Details from './Components/ProductDetails/Details';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import ReactContext from './Components/Context/Context.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/SignUp/SignUp.jsx';
import Cart from './Components/Pages/Cart/Cart.jsx';

const App = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetch( 'https://peheno-mern-stack-server.onrender.com/');
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

  const [coupon, setCoupon] = useState('');

  const generateCoupon = () => {
  const randomCoupon = `PEHENO${Math.floor(Math.random() * 10000)}`;
  setCoupon(randomCoupon);
};

  useEffect(() => {
  const savedCoupon = localStorage.getItem('couponCode');
  if (savedCoupon) {
    setCoupon(savedCoupon);
  }
}, []);

  return (
    <ReactContext.Provider
      value={{
        products: product,
        setProduct,
        productLoading: loading,
        productError: error,
        coupon,
        setCoupon: generateCoupon,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/product/:id" element={<ProtectedRoute><Details /></ProtectedRoute>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </ReactContext.Provider>
  );
};

export default App;