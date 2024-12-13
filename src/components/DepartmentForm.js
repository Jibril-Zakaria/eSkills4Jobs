import React, { useState } from "react";
import './DepartmentForm.css';

const DepartmentForm = ({ onSubmit, initialData = {}, onCancel }) => {
  const [formData, setFormData] = useState({
    id: initialData.id || "",
    name: initialData.name || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="department-form-container">
      <form className="department-form" onSubmit={handleSubmit}>
        <h2>{initialData.id ? "Edit Department" : "Create Department"}</h2>

        <div className="form-group">
          <label htmlFor="id">Department ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Enter Department ID"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Department Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Department Name"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            {initialData.id ? "Update" : "Create"}
          </button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepartmentForm;