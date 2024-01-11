export default function Tarjeta(props){

    const {date, img, temp, humidity, wind_speed}=props;

    return (
        <>
            <p><b>{ date }</b></p>
            <img src={ img }  className="tiempoimg"/>
            <p>Temp: { temp } °C</p>
            <p>Humedad: { humidity } %</p>
            <p>Viento: { wind_speed } m/s</p>
        </>        
                
    );
}