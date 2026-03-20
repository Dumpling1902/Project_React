import { useNavigate } from "react-router-dom"
import Button from "./Button"

function MovieCard({ pelicula }) {
    const navigate = useNavigate()

    return (
        <div className="card">
        <img src={pelicula.imagen} alt={pelicula.titulo} />

        <div className="card-body">
            <h3>{pelicula.titulo}</h3>

            <Button
            text="Ver detalle"
            onClick={() => navigate(`/pelicula/${pelicula.id}`)}
            />
        </div>
        </div>
    )
}

export default MovieCard