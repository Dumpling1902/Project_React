import MovieCard from "../components/MovieCard";
import peliculasDestacadas from "../data/peliculas.json";
import MovieCarousel from "../components/MovieCarousel";

function Home({ verDetalle }) {

    return (
        <>
        <section
            style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px"
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Estrenos
            </h2>

            <MovieCarousel movies={peliculasDestacadas} />
        </section>

        <main className="container">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Cartelera destacada
            </h2>

            <div className="grid">
            {peliculasDestacadas.map((pelicula) => (
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
        </>
    );
}

export default Home