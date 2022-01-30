import { useEffect, useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
// PROFILE
function Profile({ user, setUser, myList, setMyList }) {
  const [passwordHash, setPasswordHash] = useState("");

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

  // FIND MOVIE FUNCTION FOR WHEN LOGGED IN

  // LOGOUT BUTTON FUNCTION
  const logOut = () => setUser(null);

  return (
    // // WHAT WE SEE ON SCREEN
    <>
      <p>User Profile</p>
      <h1>{user ? `Welcome ${user.username}` : ""}</h1>
      <h1>{user ? "" : "Not logged in"}</h1>
      <MovieList />

      <AddMovie />

      <input type="button" value="Log Out" onClick={logOut} />
    </>
  );
}

export default Profile;
