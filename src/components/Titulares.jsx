import React from 'react';
import { connect } from 'react-redux';

const Titulares = ({ titulares,sacarTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha" style={{paddingLeft:40}}>
      {
        titulares.map(titular => (
          <article className="titular" key={titular.id}>
            <div className="titular-container">
              <h3>{titular.nombre}</h3>
              <img src={titular.foto} alt="foto_titular" style={{maxWidth:'100%'}}/>
              <button
                onClick={ ()=>{
                  sacarTitular(titular)
                }}
                >X</button>
            </div>
          </article>
        ))
      }
    </div>
  </section>
)

const mapStateToProps = (state) => (
  { titulares: state.titulares }
)
const mapDispatchToProps = dispatch => ({
  sacarTitular(titular){
    dispatch({type: "SACAR_TITULAR", titular})
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Titulares)