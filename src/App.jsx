import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import data from "./data.js";
import "./css_reset.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/game'
          element={<Carousel {...data} length={data.length} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
