import styles from "./Card.module.css";
import { useState, useEffect } from "react";

const Card = ({ word, transcription, translation }) => {
  const [isTranslated, setIsTranslated] = useState(false);

  const handleClick = () => {
    setIsTranslated(!isTranslated);
  };

  useEffect(() => {
    setIsTranslated(false);
  }, [word]);

  return (
    <div className={styles.container}>
      <p className={styles.englishField}>{word}</p>
      <p className={styles.transcriptionField}>{transcription}</p>
      {isTranslated ? (
        <p className={styles.russianField}>{translation}</p>
      ) : (
        <button onClick={handleClick} className={styles.translateButton}>
          Check
        </button>
      )}
    </div>
  );
};

export default Card;
