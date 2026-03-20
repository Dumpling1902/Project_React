import MovieCard from "../components/MovieCard";
import peliculas from "../detalles.json";

function Cartelera({ verDetalle }) {
    return(
        <main className="container">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Cartelera
        </h2>

        <div className="grid">
            {peliculas.map((pelicula) => (
            <MovieCard
                key={pelicula.id}
                title={pelicula.titulo}
                image={pelicula.imagen}
                description={pelicula.descripcion}
                onVerDetalle={() => verDetalle(pelicula)}
            />
            ))}
        </div>
        </main>
    );
}

export default Cartelera