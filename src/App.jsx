import React, { useState } from 'react';
import BebidaLista from './bebidaLista.jsx';
import AgregarBebida from './agregarBebida.jsx';
import bebidasData from './bebidas.jsx';

function App() {
  const [bebidas, setBebidas] = useState(bebidasData);

  const handleBebidaAdded = (nuevaBebida) => {
    setBebidas([...bebidas, nuevaBebida]);
  };

  return (
    <div>
      <BebidaLista bebidas={bebidas} setBebidas={setBebidas} />
      <AgregarBebida onBebidaAdded={handleBebidaAdded} />
    </div>
  );
}

export default App;
