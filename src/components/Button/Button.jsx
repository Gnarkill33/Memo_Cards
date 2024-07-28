import styles from "./Button.module.css";

const Button = ({ mode, handleEdit, handleDelete, id }) => {
  return mode === "edit" ? (
    <button
      onClick={handleEdit}
      className={`${styles.button} ${styles.buttonEdit}`}
    />
  ) : (
    <button
      onClick={() => handleDelete(id)}
      className={`${styles.button} ${styles.buttonDelete}`}
    />
  );
};

export default Button;
