import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import ReceiveEmails from "./components/receive-emails.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path = "/" exact component = {ReceiveEmails} />
      </div>
    </Router>
  );
}


export default App;
