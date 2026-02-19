import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";



function App() {
  const [vistaActual, setVistaActual] = useState("home");

  return (
    <div
    style={{minHeight: "100vh",}}>
      <Header cambiarVista={setVistaActual}/>
      {vistaActual === "home" && <Home cambiarVista={setVistaActual}/>}
      {vistaActual === "cartelera" && <Cartelera cambiarVista={setVistaActual}/>}
      {vistaActual === "detalle" && <Detalle />}
    </div>
  )
}

export default App

