import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WordProvider } from "./components/WordContext";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import data from "./data";
import "./css_reset.css";
import "./App.css";

function App() {
  return (
    <WordProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/game' element={<Carousel />} />
        </Routes>
        <Footer />
      </Router>
    </WordProvider>
  );
}

export default App;
