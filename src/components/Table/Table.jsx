import { useContext, useState } from "react";
import { WordContext } from "../WordContext";
import styles from "./Table.module.css";
import style from "../Row/Row.module.css";
import Row from "../Row/Row";

const Table = () => {
  const { handleAddWord, words, loading } = useContext(WordContext);

  const [newValue, setNewValue] = useState({
    id: 0,
    english: "",
    transcription: "",
    russian: "",
  });

  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
  });

  const addNewValue = () => {
    if (newValue.english.match(/[А-Яа-я]/g)) {
      setErrors({ ...errors, english: "Use English letters" });
    } else if (newValue.russian.match(/[a-zA-Z]/g)) {
      setErrors({ ...errors, russian: "Use Russian letters" });
    } else if (newValue.transcription.match(/[А-Яа-я]/g)) {
      setErrors({ ...errors, transcription: "Use English letters" });
    }
    setErrors({
      ...errors,
      english: newValue.english.trim() === "" ? "Field is empty" : false,
    });
    setErrors({
      ...errors,
      transcription:
        newValue.transcription.trim() === "" ? "Field is empty" : false,
    });
    setErrors({
      ...errors,
      russian: newValue.russian.trim() === "" ? "Field is empty" : false,
    });
    setNewValue({
      id: Math.random().toString(),
      english: newValue.english,
      transcription: newValue.transcription,
      russian: newValue.russian,
    });
    handleAddWord(newValue);
    setNewValue({
      ...newValue,
      id: 0,
      english: "",
      transcription: "",
      russian: "",
    });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.field}>
          <input
            name='new_english'
            onChange={(e) =>
              setNewValue({ ...newValue, english: e.target.value })
            }
            className={
              errors.english ? style.inputField_error : style.inputField
            }
            type='text'
            value={newValue.english}
          />
          <p className={style.warning}>{errors.english && errors.english}</p>
        </div>
        <div className={styles.field}>
          <input
            name='new_transcription'
            onChange={(e) =>
              setNewValue({ ...newValue, transcription: e.target.value })
            }
            className={
              errors.transcription ? style.inputField_error : style.inputField
            }
            type='text'
            value={newValue.transcription}
          />
          <p className={style.warning}>
            {errors.transcription && errors.transcription}
          </p>
        </div>
        <div className={styles.field}>
          <input
            name='new_russian'
            onChange={(e) =>
              setNewValue({ ...newValue, russian: e.target.value })
            }
            className={
              errors.russian ? style.inputField_error : style.inputField
            }
            type='text'
            value={newValue.russian}
          />
          <p className={style.warning}>{errors.russian && errors.russian}</p>
        </div>
        <button className={styles.button} onClick={addNewValue}>
          Add
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className={styles.container}>
          <thead className={styles.title}>
            <tr>
              <th className={styles.column}>Word</th>
              <th className={styles.column}>Transcription</th>
              <th className={styles.column}>Translation</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word) => (
              <Row key={word.id} {...word} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
