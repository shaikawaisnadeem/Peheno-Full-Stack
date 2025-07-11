import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
            <h1 className='peheno-footer-head'>Peheno</h1>
        <div className='footer'>
            <div className="newsletter">
        <h2>Subscribe to our mailing list &</h2>
        <h2>Earn 20% off code to your inbox</h2>
        <div className="email-input">
          <input type="email" placeholder="Enter Your Email" />
          <button>
            <span>&rarr;</span>
          </button>
        </div>
        <p>
          By joining our email list, you’re saying yes to style updates, cozy vibes, 
          and thoughtful emails. We’ll always treat your info with care.
        </p>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>PRODUCTS</h4>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Collections</li>
            <li>Categories</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>About us</li>
            <li>Journal</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>FIND US ON</h4>
          <ul>
            <li>Instagram</li>
            <li>Twitter/x.com</li>
            <li>Threads</li>
            <li>Etsy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>LEGAL</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>404</li>
          </ul>
        </div>
      </div>
        </div>
    </div>
    </div>
  )
}

export default Footer