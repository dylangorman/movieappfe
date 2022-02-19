import React, { useState, useEffect } from "react";

function MovieList({ user, setUser, myList, setMyList }) {
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
      <div className="test-div">
        <h1>HELLO WORLD</h1>
      </div>
    </>
  );
}
export default MovieList;
