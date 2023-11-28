import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import NoPage from './NoPage';
import Blogs from './Blogs';
import './App.css'; // Import your CSS file

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link to="/NoPage" className="nav-link">NoPage</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/NoPage' element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
