import styles from "./Header.module.css";
import StartButton from "../StartButton/StartButton";
import Logo from "../../../public/images/logo_3.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={Logo} className={styles.logo} />
        <div className={styles.title}>Easywords</div>
      </div>
      <div className={styles.wrapper}>
        <StartButton text='No, thanks' />
        <StartButton text='Get started' />
      </div>
    </div>
  );
};

export default Header;
