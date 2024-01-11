import { useState } from "react";
import PropTypes from 'prop-types';

export default function Formulario(props){

    const [longitud, setLongitud]=useState(props.longitud);
    const [latitud, setLatitud]=useState(props.latitud);
    const callServer = props.callServer;

    return (
        <div className="formulario">
            <h2 id="titulo">El tiempo</h2>
            <br/>

            <label>Latitud:</label>
            <input type="number" id="latitud" value={latitud} 
                onChange={(e)=> setLatitud(e.target.value)}  />
            <br/>
            <label>Longitud:</label>
            <input type="number" id="longitud" value={longitud} 
                onChange={(e)=> setLongitud(e.target.value)} />
            <br/>
            <button id="buscar" onClick={()=>callServer({latitud, longitud})}>Buscar</button>
        </div>
    );
}

Formulario.propTypes = {
    longitud: PropTypes.number,
    latitud: PropTypes.number
    
};
  
