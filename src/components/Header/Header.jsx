import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import StartButton from "../StartButton/StartButton";
import Logo from "../../assets/images/logo_3.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to='/'>
          <img src={Logo} className={styles.logo} />
        </Link>
        <div className={styles.title}>Easywords</div>
      </div>
      <div className={styles.wrapper}>
        <Link to='/'>
          <StartButton text='No, thanks' />
        </Link>
        <Link to='/game'>
          <StartButton text='Get started' />
        </Link>
      </div>
    </div>
  );
};

export default Header;
