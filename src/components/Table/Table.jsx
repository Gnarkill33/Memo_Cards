import styles from "./Table.module.css";
import Row from "../Row/Row";
// import data from "../../data.js";

const Table = ({ newWords, handleSaveNewWord }) => {
  return (
    <table className={styles.container}>
      <thead className={styles.title}>
        <tr>
          <th className={styles.column}>Word</th>
          <th className={styles.column}>Transcription</th>
          <th className={styles.column}>Translation</th>
          <th className={styles.column}>Topic</th>
        </tr>
      </thead>
      <tbody>
        {newWords.map((word) => (
          <Row key={word.id} {...word} handleSaveNewWord={handleSaveNewWord} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
