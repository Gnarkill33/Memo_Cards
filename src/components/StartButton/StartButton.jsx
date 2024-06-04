import styles from "./StartButton.module.css";

const StartButton = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default StartButton;
