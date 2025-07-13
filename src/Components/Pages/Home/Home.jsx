import React from 'react';
import './Home.css';
import Navbar from '../../Navbar/Navbar';
import PehenoDreams from '../../Peheno Dreams/PehenoDreams';
import Footer from '../../Footer/Footer';
import Login from '../../Login/Login';
import Signup from '../../SignUp/SignUp';

const Home = () => {
    return (
        <>
                <div className="home-container">
            <video autoPlay loop muted className="bg-video">
                <source src="/bg.mp4" type="video/mp4" />
            </video>

            <div className="navbar-overlay">
                <Navbar />
            </div>

            <div className="hero-content">
                <h1>Effortless Style, <br />
                    Thoughtfully Made</h1>
                <p className='hero-conteent-para'>Modern essentials in soft tones and timeless cuts —<br /> designed to feel good and look even better.</p>
                <div className='buttons'>
                    <button className='shop-women-btn'>Shop Women</button>
                    <button className='shop-men-btn'>Shop Men</button>
                </div>
            </div>
        </div>
        <PehenoDreams/>
        <Footer />
        </>

    );
};

export default Home;
