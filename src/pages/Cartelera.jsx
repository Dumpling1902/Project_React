import MovieCard from "../components/MovieCard"

function Cartelera({cambiarVista}) {
    return (
        <main
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "16px",
                padding: "16px",
        }}
        >
            <MovieCard
            title="Shingeki No Kyojin: The Final Season"
            image=""
            onVerDetalle={() => cambiarVista("detalle")}></MovieCard>
            <MovieCard
            title="Bob Esponja: El Rescate"
            image=""
            onVerDetalle={() => cambiarVista("detalle")}></MovieCard>
        </main>
    )
}

export default Cartelera