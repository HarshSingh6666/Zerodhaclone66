import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/Login';
import About from './landing_page/about/AboutPage';
import Product from './landing_page/products/ProductPage';
import Pricing from './landing_page/pricing/PricingPage';
import Supports from './landing_page/supports/SupportsPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Product" element={<Product/>}></Route>
      <Route path="/Pricing" element={<Pricing/>}></Route>
      <Route path="/Supports" element={<Supports/>}></Route>
      <Route path="/*" element={<Notfound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
