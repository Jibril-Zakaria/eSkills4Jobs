import React from 'react';
import './Department.css';

const Department = () => {
  return (
    <div className="department-container">
      <h1 className="department-title">Departments</h1>
      <ul className="department-list">
        <li className="department-item">Human Resources</li>
        <li className="department-item">Finance</li>
        <li className="department-item">Engineering</li>
        <li className="department-item">Marketing</li>
      </ul>
    </div>
  );
};

export default Department;
