import {
  IoArrowForwardCircleSharp,
  IoArrowBackCircleSharp,
} from "react-icons/io5";
import { useState } from "react";
import styles from "./Carousel.module.css";
import Card from "../Card/Card";

const Carousel = (data) => {
  const [position, setPosition] = useState(0);

  const handleForward = () => {
    if (position === data.length - 1) {
      setPosition(0);
    } else {
      setPosition((prev) => prev + 1);
    }
  };

  const handleBackward = () => {
    if (position === 0) {
      setPosition(data.length - 1);
    } else {
      setPosition((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <IoArrowBackCircleSharp onClick={handleBackward} size='50px' />
        <Card
          word={data[position].word}
          translation={data[position].translation}
          transcription={data[position].transcription}
        />
        <IoArrowForwardCircleSharp onClick={handleForward} size='50px' />
      </div>
      <p className={styles.counter}>
        {position + 1} / {data.length}
      </p>
    </>
  );
};

export default Carousel;
