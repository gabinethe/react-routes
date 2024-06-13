import { Link } from "react-router-dom";
import "../Mapas/Mapas.css";

const Mapas = () => {
  return (
    <div className="container">
      <h2>Mapas</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/temperatura">Temperatura</Link>
        </li>
      </ul>
    </div>
  );
};

export default Mapas;
