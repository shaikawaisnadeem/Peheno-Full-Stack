import React, { useState, useEffect } from 'react';
import './Signup.css';
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchingForm = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/data/signup');
        const resData = await res.json();
        console.log('Existing signup data:', resData);
      } catch (err) {
        console.error('Error fetching signup data:', err);
      }
    };
    fetchingForm();
  }, []);
  const navig = useNavigate()
  const navigatetoSign = ()=>{
    navig('/login')
  } 

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const toggleShowPassword = () => setShowPassword(prev => !prev);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(prev => !prev);

  const isFormValid = username && email && password && confirmPassword && (password === confirmPassword);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/api/data/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmpassword: confirmPassword, 
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess("Account created successfully!");
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      setError(data.message || 'Signup failed');
    }
  } catch (err) {
    setError('Network error: ' + err.message);
  }
};


  return (
    <div className='signup-page'>
      <div className="signup-wrapper">
        <div className="signup-card">
          <h1 className="signup-brand-title">PEHENO</h1>
          <p className="signup-brand-tagline">Fashion Forward</p>

          <form className="signup-form-section" onSubmit={handleSubmit}>
            <h2 className="signup-form-title">Create Account</h2>
            <p className="signup-form-subtitle">Join us to get started</p>

            {error && <p style={{ color: 'salmon', marginBottom: '10px' }}>{error}</p>}
            {success && <p style={{ color: 'lightgreen', marginBottom: '10px' }}>{success}</p>}

            <label className="signup-form-label">Username</label>
            <div className="signup-form-input-box">
              <span className="signup-form-icon"><FaUser /></span>
              <input
                type="text"
                placeholder="your username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>

            <label className="signup-form-label">Email Address</label>
            <div className="signup-form-input-box">
              <span className="signup-form-icon"><MdEmail /></span>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <label className="signup-form-label">Password</label>
            <div className="signup-form-input-box">
              <span className="signup-form-icon"><RiLockPasswordLine /></span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span className="signup-form-eye-icon" onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <label className="signup-form-label">Confirm Password</label>
            <div className="signup-form-input-box">
              <span className="signup-form-icon"><RiLockPasswordLine /></span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <span className="signup-form-eye-icon" onClick={toggleShowConfirmPassword} style={{ cursor: 'pointer' }}>
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <button
              type="submit"
              className="signup-form-btn"
              disabled={!isFormValid}
              title={!isFormValid ? "Fill all fields and ensure passwords match" : ""}
            >
              Sign Up →
            </button>

            <div className="signup-divider">
              <hr />
              <span>OR CONTINUE WITH</span>
              <hr />
            </div>

            <div className="signup-social-buttons">
              <button type="button" className="signup-google-btn">G &nbsp; Google</button>
              <button type="button" className="signup-facebook-btn">f &nbsp; Facebook</button>
            </div>

            <p className="signup-footer-link">
              Already have an account? <a onClick={navigatetoSign} style={{ cursor: "pointer" }}>Sign In</a>
            </p>
          </form>
        </div>

        <footer className='signup-footer-text'>© 2025 Peheno. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default Signup;
