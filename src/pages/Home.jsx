import MovieCard from "../components/MovieCard"
import peliculas from "../data/peliculasDestacadas.json"

function Home() {
    return (
        <main className="container">
            <h2 className="title">Cartelera destacada</h2>

            <div className="grid">
                {peliculas.map((pelicula) => (
                    <MovieCard key={pelicula.id} pelicula={pelicula} />
                ))}
            </div>
        </main>
    )
}

export default Home