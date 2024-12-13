import React from 'react';
import './DepartmentModule.css';

function DepartmentModule() {
  const departments = [
    { id: 1, name: 'Mathematics', head: 'Dr. Alan Turing', numberOfTeachers: 10 },
    { id: 2, name: 'Science', head: 'Dr. Marie Curie', numberOfTeachers: 12 }
  ];

  return (
    <div className="departments">
      <h2>Departments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Head</th>
            <th>Number of Teachers</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.name}</td>
              <td>{department.head}</td>
              <td>{department.numberOfTeachers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentModule;