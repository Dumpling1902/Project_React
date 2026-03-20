import { useState } from "react";
import Button from "./Button";

function MovieCard({ title, image, description, onVerDetalle }) {
    const [mostrarDesc, setMostrarDesc] = useState(false);

    function toggleDescripcion() {
    setMostrarDesc(!mostrarDesc);
    }

    return (
    <div className="card">
        <img src={image} alt={title} />

        <div className="card-body">
        <h3>{title}</h3>

        <button
            onClick={toggleDescripcion}
            style={{
            marginBottom: "8px",
            padding: "6px 10px",
            cursor: "pointer"
            }}
        >
            {mostrarDesc ? "Ocultar descripción" : "Mostrar descripción"}
        </button>

        {mostrarDesc && (
            <p style={{ fontSize: "14px" }}>{description}</p>
        )}

        <Button text="Ver detalle" onClick={onVerDetalle} />
        </div>
    </div>
    );
}

export default MovieCard