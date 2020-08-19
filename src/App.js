import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';

import './App.css';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Gestiona tu TEAM</h1>
        <Jugadores/>
        <EquipoSeleccionado />
      </div>
    </Provider>

  );
}

export default App;
