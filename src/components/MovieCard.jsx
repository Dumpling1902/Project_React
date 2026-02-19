import Button from "./Button";

function MovieCard({ title, image, onVerDetalle }) {
    return (
        <div className="card">
        <img src={image} alt={title} />

        <div className="card-body">
            <h3>{title}</h3>
            <Button text="Ver detalle" onClick={onVerDetalle} />
        </div>
        </div>
    );
}

export default MovieCard