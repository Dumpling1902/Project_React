function Header({ cambiarVista }) {
    return (
        <header className="header">
        <div className="header-inner">
            <h1 style={{ margin: 0 }}>Cinemex</h1>

            <nav className="nav">
            <span onClick={() => cambiarVista("home")}>Inicio</span>
            <span onClick={() => cambiarVista("cartelera")}>Cartelera</span>
            <span onClick={() => cambiarVista("alimentos")}>Alimentos</span>
            <span onClick={() => cambiarVista("otros")}>Otros</span>
            </nav>
        </div>
        </header>
    );
}

export default Header