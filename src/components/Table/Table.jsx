import styles from "./Table.module.css";
import Row from "../Row/Row";
import data from "../../data.js";

const Table = () => {
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
        {data.map((word) => (
          <Row key={word.id} {...word} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
