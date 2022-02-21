import "./App.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
// import AddMovie from "./components/AddMovie";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [myList, setMyList] = useState([]);

  return (
    <Router>
      );
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              setUser={setUser}
              myList={myList}
              setMyList={setMyList}
            />
          }
        />
        {/* <Route path="/profile" element={<Navigation />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
