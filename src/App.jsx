import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Films from "./pages/Films";
import FilmsDetails from "./pages/FilmsDetails";
import People from "./pages/People";
import PeopleDetails from "./pages/PeopleDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mt-5">
        <section className="row justify-content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:filmId" element={<FilmsDetails />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:peopleId" element={<PeopleDetails />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
