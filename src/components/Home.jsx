import { Link } from "react-router-dom";
import dracula from "../images/dracula.jpg";
import starwars from "../images/starwars.jpg";
import vertigo from "../images/vertigo.jpg";
import once from "../images/onceuponatime.jpeg";
import Logo from "../images/1.png";

function Home() {
  return (
    <div className="home">
      <div className="logohome">
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <div className="moviePosters">
        <div className="imageContainer">
          <Link to="/MovieList">
            <img className="poster" src={dracula} alt="dracula poster" />
          </Link>
        </div>

        <div className="imageContainer">
          <Link to="/MovieList">
            <img className="poster" src={starwars} alt="starwars poster" />
          </Link>
        </div>

        <div className="imageContainer">
          <Link to="/MovieList">
            <img className="poster" src={vertigo} alt="vertigo poster" />
          </Link>
        </div>
        <div className="imageContainer">
          <Link to="/MovieList">
            <img
              className="poster"
              src={once}
              alt="once upon a time in hollywood poster"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
