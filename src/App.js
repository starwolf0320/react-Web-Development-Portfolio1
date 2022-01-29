import React from 'react';

import Skills from './container/Skills/Skills';
import Footer from './container/Footer/Footer';
import About from './container/About/About';
import Testimonial from './container/Testimonial/Testimonial';
import Work from './container/Work/Work';
import Header from './container/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Overlay from './components/Overlay/Overlay';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div style={{ position: 'relative' }}>
        <Overlay />
        <Navbar />
        <Header />
      </div>
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
