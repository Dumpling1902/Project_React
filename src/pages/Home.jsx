import MovieCard from "../components/MovieCard"


function Home({cambiarVista}) {
    return (
        <main
        style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
            padding: "16px",
        }}>

            <MovieCard
            title="Avatar: Fuego y Cenizas"
            image=""
            onVerDetalle={() => cambiarVista("detalle")}></MovieCard>

            <MovieCard
            title="Ayuda!!"
            image=""
            onVerDetalle={() => cambiarVista("detalle")}></MovieCard>

            <MovieCard
            title="Arco"
            image=""
            onVerDetalle={() => cambiarVista("detalle")}></MovieCard>
        </main>
    )
}

export default Home