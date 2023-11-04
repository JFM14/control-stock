import React, { useState } from 'react';

function AgregarBebida({ onBebidaAdded }) {
  const [nuevaBebida, setNuevaBebida] = useState({ name: '', stock: 0 });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaBebida({ ...nuevaBebida, [name]: value });
  };

  const handleAgregarBebida = () => {
    if (nuevaBebida.name.trim() === '' || nuevaBebida.stock <= 0) {
      return;
    }

    onBebidaAdded(nuevaBebida);

    setNuevaBebida({ name: '', stock: 0 });
  };

  return (
    <div>
      <h2>Agregar Nueva Bebida</h2>
      <form>
        <label>
          Nombre de la Bebida:
          <input
            type="text"
            name="name"
            value={nuevaBebida.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Cantidad en Stock:
          <input
            type="number"
            name="stock"
            value={nuevaBebida.stock}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleAgregarBebida}>
          Agregar Bebida
        </button>
      </form>
    </div>
  );
}

export default AgregarBebida;
