import React from "react";
import "./SideBar.css"

const Sidebar =()=>{
    return(
        <div className="sidebar">
        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Institute Profile</a></li>
            <li><a href="#">Department</a></li>
            <li><a href="#">Student</a></li>
            <li><a href="#">Subjects</a></li>
            <li><a href="#">Employees</a></li>
        </ul>
    </div>
    );
};



export default Sidebar;