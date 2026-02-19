import palomitasImg from "../assets/images/tradicional.png";
import refrescoImg from "../assets/images/refresco.jpg";
import nachosImg from "../assets/images/nachos.jpg";
import dulcesImg from "../assets/images/dulces.jpg";

function Alimentos() {
    return (
        <main className="container">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Alimentos
        </h2>

        <div className="grid">
            {/* Palomitas */}
            <div className="card">
            <img src={palomitasImg} alt="Palomitas tradicionales" />
            <div className="card-body">
                <h3>Palomitas</h3>
                <p>Snack</p>
            </div>
            </div>

            {/* Refresco */}
            <div className="card">
            <img src={refrescoImg} alt="Refresco" />
            <div className="card-body">
                <h3>Refresco</h3>
                <p>Bebida</p>
            </div>
            </div>

            {/* Nachos */}
            <div className="card">
            <img src={nachosImg} alt="Nachos con queso" />
            <div className="card-body">
                <h3>Nachos</h3>
                <p>Comestible</p>
            </div>
            </div>

            {/* Dulces */}
            <div className="card">
            <img src={dulcesImg} alt="Dulces" />
            <div className="card-body">
                <h3>Dulces</h3>
                <p>Snack</p>
            </div>
            </div>
        </div>
        </main>
    );
}

export default Alimentos
