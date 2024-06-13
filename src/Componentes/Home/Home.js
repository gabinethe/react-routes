import { Link } from "react-router-dom";
import "../Home/Home.css";

const Home = () => {
  return (
    <div className="container">
      <h2>Home</h2>
      <ul>
        <li>
          <Link to="mapas">Mapas</Link>
        </li>
        <li>
          <Link to="temperatura">Temperatura</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
