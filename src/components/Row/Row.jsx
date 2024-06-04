import styles from "./Row.module.css";
import Button from "../Button/Button";
import SaveButton from "../SaveButton/SaveButton";

const Row = ({ word, transcription, translation, theme, isActive }) => {
  return isActive ? (
    <tr className={styles.wrapper}>
      <td className={styles.cell}>
        <input className={styles.inputField} type='text' />
      </td>
      <td className={styles.cell}>
        <input className={styles.inputField} type='text' />
      </td>
      <td className={styles.cell}>
        <input className={styles.inputField} type='text' />
      </td>
      <td className={styles.cell}>
        <input className={styles.inputField} type='text' />
      </td>
      <td className={styles.cell}>
        <SaveButton />
        <Button mode='delete' />
      </td>
    </tr>
  ) : (
    <tr className={styles.wrapper}>
      <td className={styles.cell}>{word}</td>
      <td className={styles.cell}>{transcription}</td>
      <td className={styles.cell}>{translation}</td>
      <td className={styles.cell}>{theme}</td>
      <td className={styles.cell}>
        <Button mode='edit' />
        <Button mode='delete' />
      </td>
    </tr>
  );
};

export default Row;
