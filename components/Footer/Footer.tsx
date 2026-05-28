import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <FontAwesomeIcon icon={faLeaf} className={styles.brandIcon} />
          <span className={styles.brandName}>Prásino</span>
        </div>
        <p className={styles.thanks}>Thank you for playing.</p>
        <p className={styles.copy}>Developed and published by <a href="https://miusoftgames.github.io/" target="_blank">Miusoft</a>  © 2025</p>
      </div>
    </footer>
  );
}
