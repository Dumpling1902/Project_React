import MovieCard from "../components/MovieCard"
import peliculas from "../data/peliculas.json"

function Cartelera() {
    return (
        <main className="container">
            <h2 className="title">Todas las películas</h2>

            <div className="grid">
                {peliculas.map((pelicula) => (
                    <MovieCard key={pelicula.id} pelicula={pelicula} />
                ))}
            </div>
        </main>
    )
}

export default Cartelera