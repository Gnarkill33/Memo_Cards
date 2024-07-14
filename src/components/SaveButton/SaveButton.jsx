import styles from "./SaveButton.module.css";

const SaveButton = ({ handleSave, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleSave}
      className={`${styles.button} ${styles.buttonSave}`}
    />
  );
};

export default SaveButton;
