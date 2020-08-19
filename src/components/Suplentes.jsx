import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({ suplentes, sacarSuplente }) => (
  <section>
    <h2>Suplentes</h2>
    <div className="cancha">
      {
        suplentes.map(suplente => (
          <article className="suplente" key={suplente.id}>
            <div className="suplente-container">
              <h3>{suplente.nombre}</h3>
              <img src={suplente.foto} alt="foto_titular" />
              <button
                onClick={() => {
                  sacarSuplente(suplente)
                }}>X</button>
            </div>
          </article>
        ))
      }
    </div>
  </section>
)

const mapStateToProps = state => (
  { suplentes: state.suplentes }
)
const mapDispatchToProps = dispatch => ({
  sacarSuplente(suplente) {
    dispatch({ type: "SACAR_SUPLENTE", suplente })
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)