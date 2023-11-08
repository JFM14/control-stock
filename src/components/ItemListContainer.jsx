import React from 'react';
import cervezasData from './bebidas.js'; // Importa los datos de cervezas desde el archivo bebidas.js

function ItemListContainer() {
  const greeting = "¡Bienvenido al control de stock de cervezas!";

  return (
    <div>
      <h2>{greeting}</h2>
      <h3>Lista de Cervezas:</h3>
      <ul>
        {cervezasData.map((cerveza, index) => (
          <li key={index}>
            {cerveza.name} - Stock: {cerveza.stock}
          </li>
        ))}
      </ul>
      {/*  agregar más contenido de stock de cervezas */}
    </div>
  );
}

export default ItemListContainer;

