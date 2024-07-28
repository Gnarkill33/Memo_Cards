import { useState, useContext } from "react";
import { WordContext } from "../WordContext";
import styles from "./Row.module.css";
import Button from "../Button/Button";
import SaveButton from "../SaveButton/SaveButton";
import CancelButton from "../CancelButton/CancelButton";

const Row = ({ english, transcription, russian, id }) => {
  const { handleUpdatedWord, handleDeleteWord } = useContext(WordContext);

  const [isEdited, setIsEdited] = useState(false);

  const [inputValues, setInputValues] = useState({
    english,
    transcription,
    russian,
  });

  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
  });

  const handleEdit = () => {
    setIsEdited(!isEdited);
  };

  const handleChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
    setErrors({
      ...errors,
      [event.target.name]:
        event.target.value.trim() === "" ? "Field is empty" : false,
    });
  };

  const handleSave = () => {
    if (inputValues.russian.match(/[a-zA-Z]/g)) {
      setErrors({ ...errors, russian: "Use Russian letters" });
    } else if (inputValues.english.match(/[А-Яа-я]/g)) {
      setErrors({ ...errors, english: "Use English letters" });
    } else if (inputValues.transcription.match(/[А-Яа-я]/g)) {
      setErrors({ ...errors, transcription: "Use English letters" });
    } else {
      handleUpdatedWord(inputValues, id);
      setIsEdited(!isEdited);
    }
  };

  const handleCancel = () => {
    setIsEdited(!isEdited);
    setInputValues({ english, transcription, russian });
  };

  const handleDelete = (id) => {
    handleDeleteWord(id);
  };

  const isDisabled = Object.values(errors).some((value) => value);

  return isEdited ? (
    <tr className={styles.wrapper}>
      <td className={styles.cell}>
        <input
          name='english'
          onChange={handleChange}
          className={
            errors.english ? styles.inputField_error : styles.inputField
          }
          type='text'
          value={inputValues.english}
        />
        <p className={styles.warning}>{errors.english && errors.english}</p>
      </td>
      <td className={styles.cell}>
        <input
          name='transcription'
          onChange={handleChange}
          className={
            errors.transcription ? styles.inputField_error : styles.inputField
          }
          type='text'
          value={inputValues.transcription}
        />
        <p className={styles.warning}>
          {errors.transcription && errors.transcription}
        </p>
      </td>
      <td className={styles.cell}>
        <input
          name='russian'
          onChange={handleChange}
          className={
            errors.russian ? styles.inputField_error : styles.inputField
          }
          type='text'
          value={inputValues.russian}
        />
        <p className={styles.warning}>{errors.russian && errors.russian}</p>
      </td>
      <td className={styles.cell}>
        <SaveButton handleSave={handleSave} disabled={isDisabled} />
        <CancelButton handleCancel={handleCancel} />
      </td>
    </tr>
  ) : (
    <tr className={styles.wrapper}>
      <td className={styles.cell}>{inputValues.english}</td>
      <td className={styles.cell}>{inputValues.transcription}</td>
      <td className={styles.cell}>{inputValues.russian}</td>
      <td className={styles.cell}>
        <Button handleEdit={handleEdit} mode='edit' />
        <Button handleDelete={handleDelete} id={id} />
      </td>
    </tr>
  );
};

export default Row;
