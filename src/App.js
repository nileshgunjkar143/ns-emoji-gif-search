import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Emoji from "./Emoji";
import Gif from "./Gif";
import './App.css';

function App() {
  return (
    <Router>
      <div className="head">
      <h1>You can Search Gif and Emoji just click here</h1>
      <Link to="/Gif" id='gif'>Gif  &nbsp;&nbsp;&nbsp;</Link>
      <Link to="/Emoji" id='emoji'>Emoji </Link>
      
      </div>
      <Routes>
      <Route exact path='/Gif' element={< Gif />}></Route>
      <Route exact path='/Emoji' element={< Emoji />}></Route>
      
      </Routes>
    </Router>
  )
}

export default App
