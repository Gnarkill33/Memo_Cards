import styles from "./Main.module.css";
import Table from "../Table/Table";

const Main = ({ newWords, handleSaveNewWord }) => {
  return (
    <div className={styles.container}>
      <Table handleSaveNewWord={handleSaveNewWord} newWords={newWords} />
    </div>
  );
};

export default Main;
