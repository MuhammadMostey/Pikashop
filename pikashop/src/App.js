// React components
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

//Layout and styling
import Layout from './components/Layout';
import './App.css';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';






function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/"  element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}  />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
