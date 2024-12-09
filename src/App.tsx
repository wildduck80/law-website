import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import Team from './components/Team';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import LawyerDetail from './components/LawyerDetail';

function App() {
  return (
    // <div className="min-h-screen">
    //   <Navbar />
    //   <Hero />
    //   <About />
    //   <PracticeAreas />
    //   <Team />
    //   <Blog />
    //   <Contact />
    //   <Footer />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<div className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <PracticeAreas />
          <Team />
          <Blog />
          <Contact />
          <Footer />
        </div>} />
        <Route path="/" element={<Team />} />
        <Route path="/lawyer/:id" element={<LawyerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;


