export default function Error(props){

    const {message, cod}= props.data;

    return (
    <div id="error">
        <h3>Error</h3>
        <h4>Se ha producido un error.</h4>
        <p> Descipcion: Error al llamar el API. <span>Código: {cod}</span></p>
        <p> Mensaje del servidor: {message} </p>
    </div>);

}