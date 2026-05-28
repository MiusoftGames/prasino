import styles from "./Description.module.css";

export default function Description() {
  return (
    <section className={styles.desc}>
      <div className={styles.textBlock}>
        <p className={styles.overline}>The Story</p>
        <h2 className={styles.heading}>Without you,<br />the world cannot survive.</h2>
        <p className={styles.body}>
          Trash-born enemies crawl from the decay, seeking to destroy every
          spark of life you plant. You must fight back while nurturing growth —
          a relentless struggle between ruin and renewal.
        </p>
        <p className={styles.body}>
          Every tree you grow is a breathing zone. Every zone you defend is a
          step closer to reclaiming this world. But the corruption never stops.
          Neither can you.
        </p>
        <ul className={styles.features}>
          <li className={styles.feature}>
            <span className={styles.dot} />
            Plant trees to create safe breathing zones
          </li>
          <li className={styles.feature}>
            <span className={styles.dot} />
            Fight off waves of trash-born creatures
          </li>
          <li className={styles.feature}>
            <span className={styles.dot} />
            Restore life to a world on the edge of collapse
          </li>
          <li className={styles.feature}>
            <span className={styles.dot} />
            Unlock exclusive maps and story comic in the Pro version
          </li>
        </ul>
      </div>

      <div className={styles.accentBlock}>
        <div className={styles.accentCard}>
          <span className={styles.accentIcon}>🌱</span>
          <blockquote className={styles.accentQuote}>
            "Every tree you grow is a step closer to hope."
          </blockquote>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>20</span>
          <span className={styles.statLabel}>Worlds to restore</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>5</span>
          <span className={styles.statLabel}>Platforms available</span>
        </div>
      </div>
    </section>
  );
}
