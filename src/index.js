import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import SignIn from './Pages/Signin';
import Contact from './Pages/Contact';
import Aboutus from './Pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
    <Routes>
    <Route path="/" element={(<App />)} />
    <Route path="/SignIn" element={(<SignIn />)} />
    <Route path="/Contact" element={(<Contact />)} />
    <Route path="/About" element={(<Aboutus />)} />
    </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);
