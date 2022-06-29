import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PeopleDetail = () => {
  const { peopleId } = useParams();
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const getPeople = async () => {
      const res = await fetch(
        `https://ghibliapi.herokuapp.com/people/${peopleId}/`
      );
      const allPeople = await res.json();
      setPeople(allPeople);
      console.log(peopleId);
    };
    getPeople();
  }, [peopleId]);

  return (
    <div className="mt-5">
      <h1>People Detail</h1>
      <div className="col-md-6" key={"people-card-${people.id}"}>
        <div className="card shadow my-2"></div>
        <div className="card-body">
          <h4 className="card-title">{people.name}</h4>
          <p className="card-subtitle text-muted">Age:{people.age}</p>
          <br></br>
          <p className="card-subtitle text-muted">Sex: {people.gender}</p>
          <br></br>
          <p className="card-subtitle text-muted">
            Hair Color: {people.hair_color}
          </p>
          <br></br>
          <p className="card-subtitle text-muted">
            Eye Color: {people.eye_color}
          </p>
          <br></br>
          <Link to={`/People/`} className="btn btn-primary">
            Return to People Page
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PeopleDetail;
