//Esta funcion recibe dos propiedades: recibir un texto y alguna accion se ejecutara al clickear

function Button({ text, onClick }) {
    return (
        <button className="btn-primary" onClick={onClick}>
        {text}
        </button>
    );
    }

export default Button
