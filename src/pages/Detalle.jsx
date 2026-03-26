import { useParams } from "react-router-dom"
import { useState } from "react"
import peliculas from "../data/peliculas.json"

function Detalle() {
    const { id } = useParams()

    const pelicula = peliculas.find(p => p.id === parseInt(id))

    const [nombre, setNombre] = useState("")
    const [boletos, setBoletos] = useState(1)
    const [mensaje, setMensaje] = useState("")

    if (!pelicula) return <h2>No encontrada</h2>

    function handleSubmit(e) {
        e.preventDefault()

        setMensaje(
        `Gracias ${nombre}, compraste ${boletos} boletos para ${pelicula.titulo}`
        )

        setNombre("")
        setBoletos(1)
    }

    return (
        <main style={{ padding: "20px" }}>
        <h2>{pelicula.titulo}</h2>
        <img src={pelicula.imagen} style={{ width: "100%" }} />
        <p>{pelicula.descripcion}</p>

        <h3>Comprar boletos</h3>

        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />

            <input
            type="number"
            value={boletos}
            onChange={(e) => setBoletos(e.target.value)}
            />

            <button type="submit">Comprar</button>
        </form>

        {mensaje && <p>{mensaje}</p>}
        </main>
    )
}

export default Detalle