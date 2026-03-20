import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"
import Favoritos from "./pages/Favoritos"

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="/pelicula/:id" element={<Detalle />} />
      </Routes>
    </div>
  )
}

export default App