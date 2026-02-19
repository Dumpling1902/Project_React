import MovieCard from "../components/MovieCard"
import avatarImg from "../assets/images/avatar.jpg";
import ayudaImg from "../assets/images/ayuda.jpg";
import arcoImg from "../assets/images/arco.jpg";

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
            image={avatarImg}
            onVerDetalle={() => cambiarVista("detalle")}></MovieCard>

            <MovieCard
            title="Ayuda!!"
            image={ayudaImg}
            onVerDetalle={() => cambiarVista("detalle")}></MovieCard>

            <MovieCard
            title="Arco"
            image={arcoImg}
            onVerDetalle={() => cambiarVista("detalle")}></MovieCard>
        </main>
    )
}

export default Home