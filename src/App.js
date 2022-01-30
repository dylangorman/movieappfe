import "./App.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import MovieList from "./components/MovieList";
// import AddMovie from "./components/AddMovie";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  // const [id, setId] = useState(null);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" class="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/register" class="link">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" class="link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/profile" class="link">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      );
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route path="/movie" element={<MovieList />} />
      </Routes>
    </Router>
  );
}

export default App;
