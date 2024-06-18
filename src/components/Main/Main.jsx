import styles from "./Main.module.css";
import Table from "../Table/Table";
import Carousel from "../Carousel/Carousel";
import data from "../../data.js";

const Main = () => {
  return (
    <div className={styles.container}>
      <Table />
      <Carousel {...data} length={data.length} />
    </div>
  );
};

export default Main;
