import { WordContext } from "../WordContext";
import {
  IoArrowForwardCircleSharp,
  IoArrowBackCircleSharp,
} from "react-icons/io5";
import { useState, useContext } from "react";
import styles from "./Carousel.module.css";
import Card from "../Card/Card";

const Carousel = () => {
  const { words } = useContext(WordContext);
  const [position, setPosition] = useState(0);

  const handleForward = () => {
    if (position === words.length - 1) {
      setPosition(0);
    } else {
      setPosition((prev) => prev + 1);
    }
  };

  const handleBackward = () => {
    if (position === 0) {
      setPosition(words.length - 1);
    } else {
      setPosition((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <IoArrowBackCircleSharp onClick={handleBackward} size='50px' />
        <Card
          word={words[position].english}
          translation={words[position].russian}
          transcription={words[position].transcription}
        />
        <IoArrowForwardCircleSharp onClick={handleForward} size='50px' />
      </div>
      <p className={styles.counter}>
        {position + 1} / {words.length}
      </p>
    </div>
  );
};

export default Carousel;
