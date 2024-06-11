import styles from "./Button.module.css";

const Button = ({ mode, handleEdit }) => {
  return mode === "edit" ? (
    <button
      onClick={handleEdit}
      className={`${styles.button} ${styles.buttonEdit}`}
    />
  ) : (
    <button className={`${styles.button} ${styles.buttonDelete}`} />
  );
};

export default Button;
