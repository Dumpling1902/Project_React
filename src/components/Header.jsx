import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header style={{ background: "#111", padding: "16px" }}>
        <nav style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            
            <NavLink to="/" style={linkStyle}>Inicio</NavLink>
            <NavLink to="/cartelera" style={linkStyle}>Cartelera</NavLink>
            <NavLink to="/alimentos" style={linkStyle}>Alimentos</NavLink>
            <NavLink to="/otros" style={linkStyle}>Otros</NavLink>
            <NavLink to="/favoritos" style={linkStyle}>Favoritos</NavLink>

        </nav>
        </header>
    )
    }

    const linkStyle = ({ isActive }) => ({
    color: isActive ? "#ff9800" : "white",
    textDecoration: "none",
    fontWeight: "bold"
})

export default Header