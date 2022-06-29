import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const getPeople = async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/people/");
      const allPeople = await res.json();
      setPeople(allPeople);
    };
    getPeople();
  }, []);

  return (
    <div className="mt-5">
      <h1>People</h1>
      {people.map((valueToReturn) => (
        <div className="col-md-6" key={"people-card-${valueToReturn.id}"}>
          <div className="card shadow my-2"></div>
          <div className="card-body">
            <h4 className="card-title">{valueToReturn.name}</h4>
            <Link
              to={`/people/${valueToReturn.id}`}
              className="btn btn-primary"
            >
              Full Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default People;
