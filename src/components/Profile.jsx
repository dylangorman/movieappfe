import React, { useEffect, useState } from "react";
import AddMovie from "./AddMovie";
// import MovieList from "./MovieList";
import Navigation from "./Navigation";

// PROFILE
import { Link } from "react-router-dom";

const Profile = ({ user, setUser, myList, setMyList }) => {
  const [passwordHash, setPasswordHash] = useState("initialPassword");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost/user/${user.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setPasswordHash(data.msg.passwordHash);
    };
    if (user) {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  // LOGOUT BUTTON FUNCTION
  const logOut = () => setUser(null);

  return (
    <>
      <Navigation></Navigation>
      {/* <Navigation user={user} setUser={setUSer} / */}
      {/* // // WHAT WE SEE ON SCREEN */}
      <div className="profile">
        <h1 className="profilePage">User Profile</h1>
        <h1>{user ? `Welcome ${user.username}!` : ""}</h1>
        <h1>{user ? "" : "Not logged in"}</h1>
        <div className="enter-movie">
          <AddMovie
            user={user}
            setUser={setUser}
            myList={myList}
            setMyList={setMyList}
          />
        </div>
        <div className="link-list">
          <Link to="/mymovies">
            <button className="movielist">My Movies!</button>
          </Link>
        </div>

        <div className="logout-div">
          <Link to="/">
            <input
              className="logOut"
              type="button"
              value="logOut"
              onClick={logOut}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
