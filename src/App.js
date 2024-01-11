import './App.css';
import Header from './Header';
import { useState } from "react";
import CONFIG from "./config/config";
import { mock1 } from "./constants/mock.js"
import Resultados from './Resultados.js';
import Error from './Error.js';
import Formulario from './Formulario.js';


function App() {

  // const [longitud, setLongitud]=useState(CONFIG.default_lon);
  // const [latitud, setLatitud]=useState(CONFIG.default_lat);
  const [resultado, setResultado]= useState(null);
  const [error, setError]= useState(null);
  const [exception, setException]= useState(null);
  
  const callServer= async ( params )=> {
      
    if(CONFIG.use_server){
      
      let queryParams="?lat="+params.latitud
        +"&lon="+params.longitud
        +"&appid="+CONFIG.api_key
        +"&units=metric";

      try{
        
        const response = await fetch(`${CONFIG.server_url}${queryParams}`);

        const data = await response.json();
          if( response.status === 200){
            // console.log(data);
            setError(null);
            setResultado(data);
          
          }else{
            setResultado(null);
            setError({'cod':data.cod, 'message':data.message});
          }
      }
      catch(e){
        console.log(e);
        setResultado(null);
        setError(null);
        setException({description:e.message});
      }
      
    }
    else{
      setResultado(mock1);
      // console.log(mock1);
    }

      
  };

  return (
    <div className="App">
      <Header/>
     
      <Formulario callServer={callServer} latitud={CONFIG.default_lat} longitud={CONFIG.default_lon}/>
      {/* <div className="formulario">
          <h2 id="titulo">El tiempo</h2>
          <br/>

          <label>Latitud:</label>
          <input type="text" id="latitud" value={latitud} 
              onChange={(e)=> setLatitud(e.target.value)} />
          <br/>
          <label>Longitud:</label>
          <input type="text" id="longitud" value={longitud} 
              onChange={(e)=> setLongitud(e.target.value)} />
          <br/>
          <input type="submit" id="buscar" value="buscar" 
              onClick={()=>callServer({latitud, longitud})}/>
      </div> */}
      {exception && <h3>Ocurrió un error: { exception.description }</h3>}
      {error && <Error data={error}/>}
      {resultado && <Resultados numitems={ CONFIG.num_items } items={ resultado } />}
        

    </div>
  );
}

export default App;

