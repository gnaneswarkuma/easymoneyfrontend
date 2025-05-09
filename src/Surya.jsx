// App.js
import React, { useState,useEffect  } from 'react';
import './Surya.css';
import { useNavigate } from 'react-router-dom';
import CardCarousel from './NEW.jsx';

import { gsap } from "gsap";
import {NavLink} from "react-router-dom";

  

function Surya() {
  const [activeSection, setActiveSection] = useState('home');
  const navigate=useNavigate();

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleStudentLogin = () => {
    navigate('/s/home')
  };

  const handleServiceProviderLogin = () => {
    navigate('/e/home')
  };

  return (
    <>
    <div className="App" style={{ 
  backgroundImage: `url('https://www.printasia.in/media/catalog/product/c/a/catering_service_visiting_card_004a.png')`, 
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  height: '100vh', 
  width: '100%' 
}}> <nav className="navbar">
        <div className="navbar-container">
          <img src="https://vignanits.ac.in/wp-content/uploads/2023/06/vignan-logo-1024x341.png" alt="Test Image" className="navbar-image"/>
          <a href="#home" className="navbar-logo" onClick={() => handleNavClick('home')}></a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>Contact</a>
            </li>
          </ul> 
          <img src="https://th.bing.com/th/id/OIP.4LnnCbisZG6DYh4Jn2ITEAHaFu?w=245&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{position:"absolute",left:"1790px",top:"10px",width:"240px"}} alt="Test Image" />

        </div>
      </nav>

      <main>
      <section id="home">
          <div className="hometext">
            <h1 className="title">Easy Money</h1>
            <h3>
                -Student jobs meet catering needs.     
            </h3>
            <div className="login-options">
              <div className="login-card">
                <h2>Student Login</h2>
                <p>Looking for part-time catering jobs?</p>
                <button className="login-btn student" onClick={handleStudentLogin}>
                  Login/Signin
                </button>
              </div>
              <div className="login-card">
                <h2>Service Provider Login</h2>
                <p> Need skilled students for your catering service? </p>
                <button className="login-btn service-provider" onClick={handleServiceProviderLogin}>
                  Login/Signin
                </button>
              </div>
              
            </div>
            
          </div>
           
          <div onClick={handleStudentLogin}> <CardCarousel/></div>
                
          
        </section>

        <section id="about">
        <h1 className='title'>About Our Platform</h1>
          <div className="about-container">
            
            <div className="about-card" >
              <h2>For Students</h2>
              <ul>
                <li>Login and provide your details.</li>
                <li>Search catering services by date or location.</li>
                <li>View service info and click "Confirm" to contact provider.</li>
              </ul>
            </div>
            <div className="about-card" >
              <h2>For Service Providers</h2>
              <ul>
                <li>Login to your account.</li>
                <li>Post your service and list student requirements.</li>
                <li>Contact interested students directly.</li>
              </ul>
              
            </div>
           
          </div>
          
        </section>


        <section id="contact">
          <h2 className="title">Meet Our Team</h2>
          <p className="team-intro">
            We are passionate individuals building Easy Money to bridge students and catering opportunities.<br/>
            Connect with us!
          </p>
          <div className="team-container">
            <div className="team-card">
              <img className="profile-photo" src="https://th.bing.com/th/id/OIP.tuMahMmYSKOCL4dw20cmJwHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.6&pid=1.7" alt="Gnani"/>
              <h3>Gnani</h3>
              <p>Front-End Developer</p>
              <a href="mailto:gnani@email.com" className="contact-link">Email</a>
              <a href="https://www.linkedin.com/in/gnani" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="team-card">
              <img className="profile-photo" src="https://th.bing.com/th/id/OIP.tuMahMmYSKOCL4dw20cmJwHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.6&pid=1.7" alt="Surya"/>
              <h3>Surya</h3>
              <p>Back-End Developer</p>
              <a href="mailto:surya@email.com" className="contact-link">Email</a>
              <a href="https://www.linkedin.com/in/surya" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="team-card">
              <img className="profile-photo" src="https://th.bing.com/th/id/OIP.tuMahMmYSKOCL4dw20cmJwHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.6&pid=1.7" alt="Chandu"/>
              <h3>Chandu</h3>
              <p>UI/UX Designer</p>
              <a href="mailto:chandu@email.com" className="contact-link">Email</a>
              <a href="https://www.linkedin.com/in/chandu" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="team-card">
              <img className="profile-photo" src="https://th.bing.com/th/id/OIP.tuMahMmYSKOCL4dw20cmJwHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.6&pid=1.7" alt="Phani"/>
              <h3>Phani</h3>
              <p>Database Management</p>
              <a href="mailto:phani@email.com" className="contact-link">Email</a>
              <a href="https://www.linkedin.com/in/phani" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="team-card">
              <img className="profile-photo" src="https://th.bing.com/th/id/OIP.tuMahMmYSKOCL4dw20cmJwHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.6&pid=1.7" alt="Jashwanth"/>
              <h3>Jashwanth</h3>
              <p>Data Analyst</p>
              <a href="mailto:jashwanth@email.com" className="contact-link">Email</a>
              <a href="https://www.linkedin.com/in/jashwanth" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>


      </main>
      
    </div>
    {/* <div style={{width:"30vw",height:"100vh",backgroundColor:"transprent",zIndex:"1000",}}><Showcase/></div> */}
   
    </>
  );
}

export default Surya;