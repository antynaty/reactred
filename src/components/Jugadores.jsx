import React from 'react';
import { connect } from 'react-redux'

const Jugadores = ({ jugadores,agregarTitular,agregarSuplente }) => (
  <section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
      {
        jugadores.map(jugador => (
          <article className="jugado" key={jugador.id}>
            <h1>{jugador.nombre}</h1>
            <img src={jugador.foto} alt="IMG_JGUADOR" />
            <div className="jugadores-button">
              <button
                onClick={() => {
                  agregarTitular(jugador)
                }}
              >Titular</button>
              <button
                onClick={()=>{
                  agregarSuplente(jugador)
                }}
              >Suplente</button>
            </div>
          </article>
        ))
      }

    </div>
  </section>
)

// para poder acceder a jugadores en mi componente 
const mapStateToProps = state => ({
  jugadores: state.jugadores
})
const mapDispatchToProps = dispatch => ({
  agregarTitular(jugador) {
    dispatch({ type: "AGREGAR_TITULAR", jugador})
  },
  agregarSuplente(jugador){
    dispatch({ type: "AGREGAR_SUPLENTE", jugador})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);