import styles from "./CancelButton.module.css";

const CancelButton = ({ handleCancel }) => {
  return (
    <button
      onClick={handleCancel}
      className={`${styles.button} ${styles.buttonCancel}`}
    />
  );
};

export default CancelButton;
