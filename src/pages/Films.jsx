import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = () => {
  const [film, setFilm] = useState([]);
  useEffect(() => {
    const getFilm = async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/films/");
      const allFilms = await res.json();
      setFilm(allFilms);
    };
    getFilm();
  }, []);

  return (
    <div className="mt-5">
      <h1>Films</h1>
      {film.map((valueToReturn) => (
        <div className="col-md-6" key={"film-card-${valueToReturn.id}"}>
          <div className="card shadow my-2"></div>
          <div className="card-body">
            <h4 className="card-title">{valueToReturn.original_title}</h4>
            <p className="card-subtitle text-muted">{valueToReturn.title}</p>
            <img
              class="card-img-top mt-3 mb-3"
              src={valueToReturn.movie_banner}
              alt="Shot of film"
            ></img>
            <br></br>
            <Link
              to={`/films/${valueToReturn.id}`}
              className="btn btn-primary "
            >
              Full Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Films;
