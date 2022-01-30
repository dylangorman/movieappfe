import { useState, useEffect } from "react";

const MovieList = ({ user, setUser }) => {
  const [myMovieList, setMyMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //http://localhost/user/:id
      const res = await fetch(`http://localhost/movie/${user.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setMyMovieList(data);
    };
    if (user) {
      try {
        fetchData();
      } catch (error) {
        console.log("no user");
      }
    }
  }, [user]);

  return (
    <>
      <h1>{user ? user.name : "no user"}</h1>
      <div className="listContainer">
        {user ? (
          <ul className="list">
            {myMovieList.map((movie) => (
              <li className="movie" key={movie.id}>
                <div className="title">{movie.movie_title}</div>{" "}
                <div className="actor">{movie.movie_actor}</div>
                <div className="year">{movie.movie_year}</div>
              </li>
            ))}{" "}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MovieList;
