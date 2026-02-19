//Esta funcion recibe dos propiedades: recibir un texto y alguna accion se ejecutara al clickear

function Button({text, onClick}) {
    return (
    <button 
    //Evento de React: se ejecuta cuando el usuario hace click en el boton
    onClick={onClick}
    style ={{
    padding: "8px 16px", 
    backgroundColor: "#ff9800",
    color: "white",
    border: "none", 
    borderRadius: "4px", 
    cursor: "pointer",
    marginTop: "8px"
    }}
    >{text}</button>
    )
}

export default Button