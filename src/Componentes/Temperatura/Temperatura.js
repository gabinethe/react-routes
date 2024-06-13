import { Link } from "react-router-dom";
import "../Temperatura/Temperatura.css";

const Temperatura = () => {
  return (
    <div className="container">
      <h2>Temperatura</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mapas">Mapas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Temperatura;
