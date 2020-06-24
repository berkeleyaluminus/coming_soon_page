import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import ReceiveEmails from "./components/receive-emails.component";
import Navbar from "./components/navbar.component";



function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <section className="presentation">
          <div className="col1">
              <div className="product-description">
                <div className="description-text">
                  <h1>Crowdfund Your College Experience.</h1>
                  <p class="subhead">
                    Aluminus is a school-specific crowdfunding platform that lets university students
                    with financial needs crowdfund money from alumni donations.
                  </p>
                </div>
                <div class="more-info">
                  <div class="email-collect">
                    <Route path = "/" exact component = {ReceiveEmails} />
                  </div>
                </div>
              </div>
              <div className = "main-image">
                <img src={require('./images/woman-tossing-her-hat-3028514-removebg-preview.png')} alt="university-student"/>
              </div>
         </div>
          <div className="col2">
          <h1 className="about-us-tag">Aluminus for</h1>
          </div>
        </section>


          <section className="about-us">
            <div class="student-info">
              <h1>Students</h1>
              <p>
                As a student, connect with university alumni to support your college education. Garner financial support and personalized mentorship from supporters who have been in your shoes.
              </p>
            </div>
            <div className="alumni-info">
              <h1>Alumni</h1>
              <p>
                As an alum, discover high-potential students and empower them to succeed at your alma mater. Witness the direct impact of your contributions through the students whom you support.
              </p>
            </div>
          </section>

          <h1 className="partners-tag">Partners</h1>

          <section className="partners">
            <img className="mozlogo" src={require('./images/mozillalogo.png')} alt="mozillalogo"/>
            <img className="CAAlogo" src={require('./images/CAAlogo.png')} alt="CAAlogo"/>
        </section>
      </main>
    </Router>
  );
}


export default App;
