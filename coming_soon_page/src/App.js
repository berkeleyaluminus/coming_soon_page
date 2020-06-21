import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import ReceiveEmails from "./components/receive-emails.component";
import Navbar from "./components/navbar.component";
function App() {
  return (
    <Router>
      <div className="container">

      <Navbar/>
      
        <main>
          <h1>Crowdfund Your College Experience</h1>
          <p class="subhead">Aluminus is a school-specific crowdfunding platform that allows university students
          with financial needs to crowdfund money from alumni donations.</p>
        </main>
        
        <Route path = "/" exact component = {ReceiveEmails} />

      </div>
    </Router>
  );
}


export default App;
