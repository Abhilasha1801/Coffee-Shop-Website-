import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/about-coffee.jpg" alt="About Coffee House" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to Coffee House, where passion meets perfection in every cup. 
            Since our establishment, we've been dedicated to serving the finest 
            coffee sourced from around the world.
          </p>
          <p>
            Our baristas are trained to craft each drink with precision and care, 
            ensuring that every visit is a memorable experience. We believe in 
            creating a warm, inviting atmosphere where friends gather and 
            conversations flow as smoothly as our coffee.
          </p>
          <p>
            Whether you're looking for a quiet corner to work or a lively space 
            to catch up with friends, Coffee House is your home away from home.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
