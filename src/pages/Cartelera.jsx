import MovieCard from "../components/MovieCard"
import peliculas from "../detalles.json"

function Cartelera() {
    return (
        <main className="container">
        <h2 style={{ textAlign: "center" }}>Todas las películas</h2>

        <div className="grid">
            {peliculas.map((pelicula) => (
            <MovieCard key={pelicula.id} pelicula={pelicula} />
            ))}
        </div>
        </main>
    )
}

export default Cartelera