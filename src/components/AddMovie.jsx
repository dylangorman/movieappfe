import { useEffect, State, useState } from "react";

function AddMovie() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieActor, setMovieActor] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const baseURL = "http://localhost/movie/addMovie";

  const handleMovieTitle = (e) => {
    setMovieTitle(e.target.value);
  };
  const handleMovieActor = (e) => {
    setMovieActor(e.target.value);
  };
  const handleMovieYear = (e) => {
    setMovieYear(e.target.value);
  };

  const submitMovie = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      title: movieTitle,
      actor: movieActor,
      year: movieYear,
    });

    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    console.log(await res.json());
  };

  return (
    <div className="addmovie">
      <form onSubmit={submitMovie}>
        <h1>Add A Movie!</h1>
        <label htmlFor="movieTitle">Movie:</label>
        <input
          type="text"
          name="title"
          value={movieTitle}
          onChange={handleMovieTitle}
        />
        <label htmlFor="movieActor">Actor:</label>
        <input
          type="text"
          name="actor"
          value={movieActor}
          onChange={handleMovieActor}
        />
        <label htmlFor="movieYear">Year:</label>

        <input
          type="text"
          name="year"
          value={movieYear}
          onChange={handleMovieYear}
        />
        <input className="submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
export default AddMovie;
