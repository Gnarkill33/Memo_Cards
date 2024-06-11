import styles from "./Main.module.css";
import Table from "../Table/Table";
import Card from "../Card/Card";
import data from "../../data.js";

const Main = () => {
  return (
    <div className={styles.container}>
      <Table />
      {/* {data.map((item) => {
        return <Card key={item.id} {...item} />;
      })} */}
      <Card
        word={data[1].word}
        translation={data[1].translation}
        transcription={data[1].transcription}
      />
    </div>
  );
};

export default Main;
