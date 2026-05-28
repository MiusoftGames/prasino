"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFilm, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Hero.module.css";

export default function Hero() {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <section className={styles.hero}>
      {/* Hero background image */}
      <div className={styles.imageWrapper}>
        <img
          src="images/prasino_feature_graphic.png"
          alt="Prásino – a world reclaimed by nature"
          className={styles.heroImage}
        />
        <div className={styles.gradientOverlay} />
        <div className={styles.vignette} />
      </div>

      {/* Floating particles */}
      <div className={styles.particles}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className={styles.particle} style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Survival Adventure</p>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Prásino</span>
        </h1>
        <p className={styles.subtitle}>
          You are the <em>last hope</em> in a trash-cursed world
        </p>

        <div className={styles.actions}>
          <a href="#downloads" className={styles.btnPrimary}>
            <FontAwesomeIcon icon={faDownload} />
            Download Now
          </a>
          <button
            className={styles.btnGhost}
            onClick={() => setShowTrailer(true)}
          >
            <FontAwesomeIcon icon={faFilm} />
            Watch Trailer
          </button>
        </div>

        <div className={styles.scrollHint}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollLabel}>Scroll</span>
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className={styles.modalOverlay} onClick={() => setShowTrailer(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setShowTrailer(false)}
              aria-label="Close trailer"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/N4Mvke0fnPQ?autoplay=1"
              title="Prásino Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
