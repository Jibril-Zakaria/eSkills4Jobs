
import React from "react";
//import Sidebar from "../components/SideBar";
import './MainPage.css';
//import Department from '../components/Department';
//import DeparmentModule from '../components/DepartmentModule'
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
//import DepartmentForm from "../components/DepartmentForm";
import Header from "../components/Header";
//import Home from './Home';


const MainPage = () => {
    return (
       
        
            <div className="flexpage">
            
                <div className="main-content">
                    <Header/>
                    
                    <Hero/>
                   
                    <Gallery/>
                
                    <Footer/>
                </div>
                
            </div>
       
    );
};

export default MainPage;