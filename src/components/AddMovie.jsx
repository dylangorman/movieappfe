import { useState } from "react";

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
        <div className="movie-div">
          <h1>Add A Movie!</h1>
          <label htmlFor="movieTitle">Movie:</label>
          <input
            type="text"
            name="title"
            value={movieTitle}
            onChange={handleMovieTitle}
          />
        </div>
        <div className="actor-div">
          <label htmlFor="movieActor">Actor:</label>
          <input
            type="text"
            name="actor"
            value={movieActor}
            onChange={handleMovieActor}
          />
        </div>
        <div className="year-div">
          <label htmlFor="movieYear">Year:</label>

          <input
            type="text"
            name="year"
            value={movieYear}
            onChange={handleMovieYear}
          />
        </div>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default AddMovie;
