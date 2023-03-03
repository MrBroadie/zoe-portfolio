import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Homepage from "./routes/Homepage";
import Portfolio from "./routes/Portfolio";

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
