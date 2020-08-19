import { createStore } from 'redux';

const initSate = {
  jugadores: [{
    id: 1,
    nombre: "perro",
    foto: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/purina-importancia-del-cartilago-para-las-articulaciones-del-perro.png?itok=hbSWbGPL"
  },
  {
    id: 2,
    nombre: "gato",
    foto: "https://www.purina.es/gato/purina-one/sites/g/files/mcldtz1856/files/2018-06/Mi_gato_no_come%20%282%29.jpg"
  },
  {
    id: 3,
    nombre: "loro",
    foto: "https://universitam.com/academicos/wp-content/uploads/2018/12/loros.jpg"
  }
  ],
  titulares: [],
  suplentes: []
}

const reducerEntrenador = (state = initSate, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter(jugador => jugador.id !== action.jugador.id)     // recorrer el array con filter y condicionar los que se parecen que no pasen
    }
  }
  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter(jugador => jugador.id !== action.jugador.id)     // recorrer el array con filter y condicionar los que se parecen que no pasen
    }
  }
  if (action.type === "SACAR_TITULAR") {
    return {
      ...state,
      jugadores: state.jugadores.concat(action.titular),
      titulares: state.titulares.filter(titular => titular.id !== action.titular.id)     // recorrer el array con filter y condicionar los que se parecen que no pasen
    }
  }
  if (action.type === "SACAR_SUPLENTE") {
    return {
      ...state,
      jugadores: state.jugadores.concat(action.suplente),
      suplentes: state.suplentes.filter(suplente => suplente.id !== action.suplente.id)     // recorrer el array con filter y condicionar los que se parecen que no pasen
    }
  }
  // console.log(action)
  return state
}

export default createStore(reducerEntrenador);

