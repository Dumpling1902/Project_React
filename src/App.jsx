import { useState } from "react";
import Header from "./components/Header";

// Vistas
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";
import Alimentos from "./pages/Alimentos";
import Otros from "./pages/Otros";

function App() {
  // Control de navegación
  const [vistaActual, setVistaActual] = useState("home");

  // Película seleccionada 
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  // Función para ver detalle
  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula);
    setVistaActual("detalle");
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header cambiarVista={setVistaActual} />

      {/* HOME */}
      {vistaActual === "home" && (
        <Home verDetalle={verDetalle} />
      )}

      {/* CARTELERA */}
      {vistaActual === "cartelera" && (
        <Cartelera verDetalle={verDetalle} />
      )}

      {/* DETALLE */}
      {vistaActual === "detalle" && (
        <Detalle pelicula={peliculaSeleccionada} />
      )}

      {/* NUEVAS SECCIONES */}
      {vistaActual === "alimentos" && <Alimentos />}
      {vistaActual === "otros" && <Otros />}
    </div>
  );
}

export default App