import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
