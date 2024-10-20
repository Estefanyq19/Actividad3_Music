import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Formulario from "../components/Formulario";
import Canciones from "../components/Canciones";
import Home from "../components/Home"; // Importamos la página de inicio

function AppRoutes() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/formulario">Contacto</Link>
        <Link to="/canciones">Canciones</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> {/* La ruta principal será Home */}
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/canciones" element={<Canciones />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;