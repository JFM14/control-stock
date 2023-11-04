import React from 'react';

function BebidaLista({ bebidas, setBebidas }) {
  const handleStockChange = (index, newStock) => {
    const updatedBebidas = [...bebidas];
    updatedBebidas[index].stock = newStock;
    setBebidas(updatedBebidas);
  };

  return (
    <div>
      <h2>Lista de Bebidas</h2>
      <ul>
        {bebidas.map((bebida, index) => (
          <li key={index}>
            {bebida.name} - Stock: {bebida.stock}
            <button onClick={() => handleStockChange(index, bebida.stock + 1)}>Incrementar Stock</button>
            <button onClick={() => handleStockChange(index, bebida.stock - 1)}>Decrementar Stock</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BebidaLista;
