import React, { useState } from 'react';
import './Login.css';
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cookies, setCookie] = useCookies(['token']);
  const nav = useNavigate()
  const navigateToSignUp = () => {
    nav('/signup')
  }

  const showPasswordFun = () => {
    setShowPassword(prev => !prev);
  };

  const setPasswordFun = (e) => {
    setPassword(e.target.value);
  };

  const setEmailFun = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/data/signin' || 'https://peheno-mern-stack-server.onrender.com/api/data/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
      } else {
        setCookie('token', data.jwt_token);
        nav('/')
      }

    } catch (err) {
      setError('Network error. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className='login-page'>
      <div className="login-wrapper">
        <div className="login-card">
          <h1 className="brand-title">PEHENO</h1>
          <p className="brand-tagline">Fashion Forward</p>

          <form className="form-section" onSubmit={handleLoginSubmit}>
            <h2 className="form-title">Welcome Back</h2>
            <p className="form-subtitle">Sign in to your account to continue</p>

            {error && <p style={{ color: 'salmon', marginBottom: '10px' }}>{error}</p>}

            <label className="form-label">Email Address</label>
            <div className="form-input-box">
              <span className="form-icon"><MdEmail /></span>
              <input
                type="email"
                placeholder="your@email.com"
                onChange={setEmailFun}
                value={email}
                required
              />
            </div>

            <label className="form-label">Password</label>
            <div className="form-input-box">
              <span className="form-icon"><RiLockPasswordLine /></span>
              <input
                type={showPassword ?"password"   : "text"}
                placeholder="Enter your password"
                onChange={setPasswordFun}
                value={password}
                required
              />
              <span className="form-eye-icon" onClick={showPasswordFun}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <div className="form-forgot">
              <a href="#">Forgot password?</a>
            </div>

            <button className="form-signin-btn" type="submit">Sign In →</button>

            <div className="form-divider">OR CONTINUE WITH</div>

            <div className="social-login-buttons">
              <button type="button" className="google-btn">G &nbsp; Google</button>
              <button type="button" className="facebook-btn">f &nbsp; Facebook</button>
            </div>

            <p className="signup-link-text">
              Don't have an account? <a onClick={navigateToSignUp} style={{ cursor: "pointer" }}>Sign Up</a>
            </p>
          </form>
        </div>

        <footer className='login-footer-text'>© 2025 Peheno. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default Login;
