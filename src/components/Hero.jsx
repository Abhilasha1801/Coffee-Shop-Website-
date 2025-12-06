import React, { useState, useEffect } from 'react';

function Hero() {
  const images = [
    '/images/shop.jpg',
    '/images/Shop2.jpg',
    '/images/barista.jpg',
    '/images/coffee-cup.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleExploreMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <div className="hero-content">
        <h2>Welcome to Coffee House</h2>
        <p>Great coffee. cozy place. good vibes.</p>
        <button className="btn" onClick={handleExploreMenu}>Explore Menu</button>
      </div>
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
