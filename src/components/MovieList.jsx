import { useState, State, useEffect } from "react";

function MovieList() {
  const [user, setUser] = useState;
  const [movie, setMovie] = useState;
  const [myMovieList, setMyMovieList] = useState;
  const baseURL = "http://localhost/movie/getallmovies";

  const handleMyMovieList = (e) => {
    setMyMovieList(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(baseURL, {
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
      <h1>{user ? user.name : ""}</h1>
      <div className="listContainer">
        {user ? (
          <ul className="list">
            {myMovieList.map((movie) => (
              <li className="movie" key={myMovieList}></li>
            ))}{" "}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default MovieList;
