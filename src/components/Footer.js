import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>EduVerse</h3>
                    <p>Your trusted online school management software, simplifying education administration for institutions worldwide.</p>
                </div>
                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#academics">Academics</a></li>
                        <li><a href="#admissions">Admissions</a></li>
                        <li><a href="#students">Students</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p>Email: support@eduverse.com</p>
                    <p>Phone: +123-456-7890</p>
                    <p>Address: 123 EduVerse Lane, Education City</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 EduVerse. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;