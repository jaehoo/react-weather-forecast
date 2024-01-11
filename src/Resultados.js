import Tarjeta from "./Tarjeta";

export default function Resultados(props){

    function formatDate(date) {
        return new Date(date * 1000).toLocaleDateString();
    }

    function getWeatherImg(imageName){
       return process.env.PUBLIC_URL + "/"+imageName+"@2x.png"
    }

    const {daily,timezone}=props.items;
    const numitems = props.numitems;

   // Iterate through the first 2 elements
//   const renderedElements = daily.slice(0, numitems)
//     .map((item, index) => (

//         <div key={index} className="weatherCard">
//             <Tarjeta 
//                 date={ formatDate(item.dt) }
//                 img={ getWeatherImg(item.weather[0].icon) }
//                 temp={ item.temp.day }
//                 humidity={ item.humidity }
//                 wind_speed={ item.wind_speed }/>
//         </div>
        
//     ));
    
    return ( <div id="resultados">

        <h2>Timezone: {timezone} </h2>
        <h2>El tiempo en los próximos días será:</h2>
        <ul id='resultados'>

        {/* { renderedElements } */}

        {
            daily.slice(0, numitems).map((item, index) => (

                <div key={index} className="weatherCard">
                    <Tarjeta 
                        date={ formatDate(item.dt) }
                        img={ getWeatherImg(item.weather[0].icon) }
                        temp={ item.temp.day }
                        humidity={ item.humidity }
                        wind_speed={ item.wind_speed }/>
                </div>
                
            ))
        }

        </ul>
    </div>);
}