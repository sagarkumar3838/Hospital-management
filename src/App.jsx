// App.jsx
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './sidebar/Home';
import About from './sidebar/About';
import Services from './sidebar/Services';
import Contact from './sidebar/Contact';
import Achievement from './sidebar/Achievement';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="achievement" element={<Achievement />} />
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    
  );
}

export default App;