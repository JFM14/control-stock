import React, { useState } from 'react';
import NavBar from './NavBar.jsx';
import ItemListContainer from './ItemListContainer.jsx';
import BebidaLista from './bebidaLista.jsx';
import AgregarBebida from './agregarBebida.jsx';
import cervezasData from './bebidas.js';

function App() {
  const greeting = "¡Bienvenido al control de stock de cervezas!";
  const [cervezas, setCervezas] = useState(cervezasData);

  const handleBebidaAdded = (nuevaBebida) => {
    setCervezas([...cervezas, nuevaBebida]);
  };

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={greeting} />
      <BebidaLista bebidas={cervezas} setBebidas={setCervezas} />
      <AgregarBebida onBebidaAdded={handleBebidaAdded} />
    </div>
  );
}

export default App;
