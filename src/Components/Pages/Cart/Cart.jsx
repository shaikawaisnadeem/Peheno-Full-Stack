import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Card from '../../Card/Card.jsx';
import { use } from 'react';
import './Cart.css'
import ReactContext from '../../Context/Context.jsx';
import product from '../../../../../server/models/pehenoProducts.js';

const Cart = () => {
  const [cookies] = useCookies(['token']);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const {products} = use(ReactContext)
  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = cookies.token?.trim();
        if (!token) {
          setError('No token found');
          setLoading(false);
          return;
        }

        const res = await fetch( 'https://peheno-mern-stack-server.onrender.com/addtocarts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.message || 'Fetch failed');
        }

        const data = await res.json();
        setCartData(data.cart.products);
        console.log(data.cart.products)
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [cookies]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cartData.length > 0 ? (
        <ul>
          {cartData.map((item) => {
            const pro =  products.find((each) => each._id == item.productId);
           return  (
            <div className='cart-products'>

           <Card key = {product._id} product={pro}/>
            </div>)
               
})}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
