import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Films = () => {
  const { filmId } = useParams();
  const [film, setFilm] = useState([]);
  useEffect(() => {
    const getFilm = async () => {
      const res = await fetch(
        `https://ghibliapi.herokuapp.com/films/${filmId}/`
      );
      const allFilms = await res.json();
      setFilm(allFilms);

      console.log(filmId);
    };
    getFilm();
  }, [filmId]);

  return (
    //let image = {film.image};
    <div className="mt-5">
      <h1>Film details</h1>
      <div className="col-md-6" key={"film-card-${film.id}"}>
        <div className="card shadow my-2"></div>
        <div className="card-body">
          <h4 className="card-title">{film.original_title}</h4>
          <p className="card-subtitle ">{film.title}</p>

          <img
            class="card-img-top mt-3"
            src={film.image}
            alt="Shot of film"
          ></img>
          <br></br>
          <div>
            <p className="card-subtitle text-muted mt-5">{film.description}</p>
            <br></br>

            <Link to={`/films`} className="btn btn-primary mr-3">
              Back to Films
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Films;
