import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import data from "./data.js";
import "./css_reset.css";
import "./App.css";

function App() {
  const [newData, setNewData] = useState(data);

  const handleSaveNewWord = (newWord, id) => {
    const newWords = newData.map((card) => {
      if (card.id === id) {
        return newWord;
      } else {
        return card;
      }
    });

    setNewData(newWords);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Main handleSaveNewWord={handleSaveNewWord} newWords={newData} />
          }
        />
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
