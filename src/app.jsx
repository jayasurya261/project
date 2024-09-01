
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Login from './login';
import Product_Home from './product_home';
import Recepie from './recepie';
import Animation from './animation';
import Register from './register';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Product_Home /> } />
        <Route path="/Register" element={<Register /> } />
      </Routes>
    </Router>
  );
}

export default App;
