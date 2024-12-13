import React from "react";
import './Gallery.css';

function Gallery() {
    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Gallery</h2>
            <div className="gallery-grid">
                <div className="gallery-item">
                    <img src="SM Images/s3.jpeg" alt="School" />
                </div>
                <div className="gallery-item">
                    <img src="SM Images/s2.jpeg" alt="School lif" />
                </div>
                <div className="gallery-item">
                    <img src="SM Images/s3.jpeg"  alt="Student" />
                </div>
                <div className="gallery-item">
                    <img src="SM Images/s1.jpeg" alt="Class" />
                </div>
                <div className="gallery-item">
                    <img src="SM Images/s5.jpeg" alt="Happy kid" />
                </div>
                <div className="gallery-item">
                    <img src="SM Images/s4.jpeg" alt="Beutiful calss" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;