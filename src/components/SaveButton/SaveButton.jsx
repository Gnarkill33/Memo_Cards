import styles from "./SaveButton.module.css";

const SaveButton = ({ handleSave }) => {
  return (
    <button
      onClick={handleSave}
      className={`${styles.button} ${styles.buttonSave}`}
    />
  );
};

export default SaveButton;
