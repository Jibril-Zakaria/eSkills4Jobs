
import React from "react";
//import LoginForm from "./LoginForm";
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero">
                <div className="hero-content">
                    <h1 className='text-white'>
                        Welcome To EduVerse, Your Online School Management Software.
                    </h1>
                    <p>
                        Now you can manage your school, college, or any educational center with EduVerse.
                    </p>
                    <div className="hero-actions">
                       {/* <button className="hero-btn sign-in">Sign In</button>*/}
                        {/*<button className="hero-btn login">Login</button>
                        {/* Use Link for navigation */}
                        {/*<a href="/learnmore" className="hero-btn more">Learn More</a>*/}
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/SM Images/image2.png" alt="Hero" />
                    
                </div>
               
            </div>
        </div>
        
        
        
    );
}

export default Hero;
