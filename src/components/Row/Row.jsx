import { useState } from "react";
import styles from "./Row.module.css";
import Button from "../Button/Button";
import SaveButton from "../SaveButton/SaveButton";
import CancelButton from "../CancelButton/CancelButton";

const Row = ({ word, transcription, translation, theme }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [inputValues, setInputValues] = useState({
    word: word,
    transcription: transcription,
    translation: translation,
    theme: theme,
  });

  const handleEdit = () => {
    setIsEdited(!isEdited);
  };

  const handleChange = (event) => {
    setInputValues((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSave = () => {
    setInputValues({ ...inputValues });
    setIsEdited(!isEdited);
  };

  const handleCancel = () => {
    setIsEdited(!isEdited);
    setInputValues({ word, transcription, translation, theme });
  };

  return isEdited ? (
    <tr className={styles.wrapper}>
      <td className={styles.cell}>
        <input
          name='word'
          onChange={handleChange}
          className={styles.inputField}
          type='text'
          value={inputValues.word}
        />
      </td>
      <td className={styles.cell}>
        <input
          name='transcription'
          onChange={handleChange}
          className={styles.inputField}
          type='text'
          value={inputValues.transcription}
        />
      </td>
      <td className={styles.cell}>
        <input
          name='translation'
          onChange={handleChange}
          className={styles.inputField}
          type='text'
          value={inputValues.translation}
        />
      </td>
      <td className={styles.cell}>
        <input
          name='theme'
          onChange={handleChange}
          className={styles.inputField}
          type='text'
          value={inputValues.theme}
        />
      </td>
      <td className={styles.cell}>
        <SaveButton handleSave={handleSave} />
        <CancelButton handleCancel={handleCancel} />
      </td>
    </tr>
  ) : (
    <tr className={styles.wrapper}>
      <td className={styles.cell}>{inputValues.word}</td>
      <td className={styles.cell}>{inputValues.transcription}</td>
      <td className={styles.cell}>{inputValues.translation}</td>
      <td className={styles.cell}>{inputValues.theme}</td>
      <td className={styles.cell}>
        <Button handleEdit={handleEdit} mode='edit' />
        <Button />
      </td>
    </tr>
  );
};

export default Row;
