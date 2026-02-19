import MovieCard from "../components/MovieCard"
import snkImg from "../assets/images/attack.jpg";
import bobImg from "../assets/images/bob.jpg";


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
            image={snkImg}
            onVerDetalle={() => cambiarVista("detalle")}></MovieCard>
            <MovieCard
            title="Bob Esponja: El Rescate"
            image={bobImg}
            onVerDetalle={() => cambiarVista("detalle")}></MovieCard>
        </main>
    )
}

export default Cartelera