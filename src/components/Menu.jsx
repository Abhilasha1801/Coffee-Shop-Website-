import React from 'react';

function Menu() {
  // Example items — you can expand or generate dynamically later
  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-card menu-card-hover">
          <img src="/images/espresso.jpg" alt="Espresso" className="menu-image" />
          <h3>Espresso</h3>
          <p>Strong and bold espresso shot.</p>
        </div>
        <div className="menu-card menu-card-hover">
          <img src="/images/Cappuccino.jpg" alt="Cappuccino" className="menu-image" />
          <h3>Cappuccino</h3>
          <p>Creamy cappuccino with foam.</p>
        </div>
        <div className="menu-card menu-card-hover">
          <img src="/images/latte.jpg" alt="Latte" className="menu-image" />
          <h3>Latte</h3>
          <p>Smooth latte with milk.</p>
        </div>
      </div>
    </section>
  );
}

export default Menu;

