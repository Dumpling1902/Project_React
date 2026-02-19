import promocionesImg from "../assets/images/promos.png";
import loopImg from "../assets/images/looper.jpg";
import preventasImg from "../assets/images/preventa.jpg";
import imaxImg from "../assets/images/imax.jpg";


function Otros() {
    return (
        <main className="container">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Otros
        </h2>

        <div className="grid">
            {/* Promociones */}
            <div className="card">
            <img src={promocionesImg} alt="Promociones Cinemex" />
            <div className="card-body">
                <h3>Promociones</h3>
                <p>Ofertas y descuentos especiales</p>
            </div>
            </div>

            {/* Membresía */}
            <div className="card">
            <img src={loopImg} alt="Membresía Loop" />
            <div className="card-body">
                <h3>Membresía Loop</h3>
                <p>Beneficios exclusivos para miembros</p>
            </div>
            </div>

            {/* Preventas */}
            <div className="card">
            <img src={preventasImg} alt="Preventas" />
            <div className="card-body">
                <h3>Preventas</h3>
                <p>Compra antes que nadie</p>
            </div>
            </div>

            {/* IMAX */}
            <div className="card">
            <img src={imaxImg} alt="Formato IMAX" />
            <div className="card-body">
                <h3>IMAX</h3>
                <p>La mejor experiencia de cine</p>
            </div>
            </div>
        </div>
        </main>
    );
}

export default Otros