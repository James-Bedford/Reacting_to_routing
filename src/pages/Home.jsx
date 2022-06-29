const Home = () => {
  return (
    <div className="mt-5">
      <div class="container mt-3">
        <div class="card">
          <div class="card-body">
            <h2 class="row justify-content-center">
              Studio Ghibli Routing Lab
            </h2>
            Hey thanks for checking this out! It is an example of using React
            Routing and React to create a 'front end to the Studio Ghibli data'
            incorporating the api found at
            <a href="https://ghibliapi.herokuapp.com/#" target="_blank">
              {" "}
              Studio GHIBLI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
