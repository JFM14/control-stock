import React from 'react';
import CartWidget from './CartWidget.jsx';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Cervezas</a></li>
        <li><a href="#">Contacto</a></li>
        {/* Agrega más categorías según tus necesidades */}
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
