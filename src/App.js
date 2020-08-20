import React from 'react';

// import { Provider } from 'react-redux';
// import store from './reducers/store';
// import Jugadores from './components/Jugadores';
// import EquipoSeleccionado from './components/EquipoSeleccionado';

import Operations from './components/Operations';
import Users from './components/Users';

import './App.css';
function App() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <h1>Gestiona tu TEAM</h1>
    //     <Operations/>
    //     <Jugadores/>
    //     <EquipoSeleccionado />
    //   </div>
    // </Provider>

    <div className="App">
      <h1>Gestiona tu TEAM</h1>
      <Operations />
      <Users />
    </div>

  );
}

export default App;