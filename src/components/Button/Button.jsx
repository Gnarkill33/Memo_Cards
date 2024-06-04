import styles from "./Button.module.css";

const Button = ({ mode }) => {
  return mode === "edit" ? (
    <button className={`${styles.button} ${styles.buttonEdit}`} />
  ) : (
    <button className={`${styles.button} ${styles.buttonDelete}`} />
  );
};

export default Button;
