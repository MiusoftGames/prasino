import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faGlobe,
  faComputer,
  faCrown,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAndroid,
  faGooglePlay,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Downloads.module.css";
import Image from "next/image";

export default function Downloads() {
  return (
    <section id="downloads" className={styles.downloads}>
      {/* Background */}
      <div className={styles.bg}>
        <Image
          src="/images/5.png"
          alt=""
          fill
          className={styles.bgImage}
          priority
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.header}>
        <p className={styles.overline}>
          <FontAwesomeIcon icon={faDownload} /> Get the Game
        </p>
        <h2 className={styles.heading}>Download Prásino</h2>
        <p className={styles.sub}>Available free or as a Pro upgrade with exclusive content.</p>
      </div>

      <div className={styles.tiers}>
        {/* Free */}
        <div className={styles.tierCard}>
          <div className={styles.tierTop}>
            <h3 className={styles.tierName}>Free Version</h3>
            <span className={styles.tierBadge}>Free</span>
          </div>
          <p className={styles.tierNote}>Contains ads</p>
          <ul className={styles.tierLinks}>
            <li>
              <FontAwesomeIcon icon={faGlobe} className={styles.platformIcon} />
              <span>Browser</span>
              <a
                href="https://playgama.com/game/prsino"
                target="_blank"
                rel="noopener"
                className={styles.dlBtn}
              >
                <FontAwesomeIcon icon={faLink} /> Playgama
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faAndroid} className={styles.platformIcon} />
              <span>Android</span>
              <a
                href="https://play.google.com/store/apps/details?id=com.miusoftgames.prasino"
                target="_blank"
                rel="noopener"
                className={styles.dlBtn}
              >
                <FontAwesomeIcon icon={faGooglePlay} /> Google Play
              </a>
            </li>
          </ul>
        </div>

        {/* Pro */}
        <div className={`${styles.tierCard} ${styles.tierPro}`}>
          <div className={styles.tierTop}>
            <h3 className={styles.tierName}>
              Prásino Pro <FontAwesomeIcon icon={faCrown} className={styles.crownIcon} />
            </h3>
            <span className={`${styles.tierBadge} ${styles.tierBadgePro}`}>Premium</span>
          </div>
          <p className={styles.tierNote}>No ads · Exclusive content</p>
          <ul className={styles.tierLinks}>
            <li>
              <FontAwesomeIcon icon={faComputer} className={styles.platformIcon} />
              <span>Windows / Mac / Linux</span>
              <a
                href="https://miusoft.itch.io/prasino"
                target="_blank"
                rel="noopener"
                className={`${styles.dlBtn} ${styles.dlBtnPro}`}
              >
                <FontAwesomeIcon icon={faItchIo} /> itch.io
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faAndroid} className={styles.platformIcon} />
              <span>Android</span>
              <a
                href="https://play.google.com/store/apps/details?id=com.miusoftgames.prasino_pro"
                target="_blank"
                rel="noopener"
                className={`${styles.dlBtn} ${styles.dlBtnPro}`}
              >
                <FontAwesomeIcon icon={faGooglePlay} /> Google Play
              </a>
            </li>
          </ul>

          <div className={styles.proExtras}>
            <p className={styles.proExtrasLabel}>Includes exclusive bonus:</p>
            <div className={styles.bonusItems}>
              <div className={styles.bonusItem}>
                <div className={styles.bonusImg}>
                  <Image src="/images/comic.png" alt="Prásino Story Comic" fill className={styles.bonusImgInner} />
                </div>
                <span>Story Comic</span>
              </div>
              <div className={styles.bonusItem}>
                <div className={styles.bonusImg}>
                  <Image src="/images/maps.png" alt="Prásino Level Maps" fill className={styles.bonusImgInner} />
                </div>
                <span>Level Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
