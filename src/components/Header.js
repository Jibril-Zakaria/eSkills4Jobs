
import React from "react";
import './Header.css';

function Header() {
    return (
        <header className="header-container">
            <div className="header">
                {/* Logo Section */}
                <div className="logo">
                    <img src="SM Images/Schoollogo.png" alt="School log" className="logo-image" />
                    <h2 className="logo-text">YoungDuuni FS</h2>
                </div>

                {/* Navigation Menu */}
                <nav className="nav-menu">
                    <ul className="menu-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#academics">Academics</a></li>
                        <li><a href="#admissions">Admissions</a></li>
                        <li><a href="#students">Students</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </nav>

                {/* Sign In Section */}
                <div className="auth-buttons">
                    <a href="./signin.html" className="signin-btn">Sign In</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
