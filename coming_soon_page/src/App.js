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
          </section>
        </main>
    </Router>
  );
}


export default App;
