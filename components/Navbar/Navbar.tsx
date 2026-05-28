"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLeaf } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.brand}>
        <FontAwesomeIcon icon={faLeaf} className={styles.brandIcon} />
        <span className={styles.brandName}>Prásino</span>
      </div>
      <div className={styles.links}>
        <a href="#about" className={styles.link}>About</a>
        <a href="#gallery" className={styles.link}>Gallery</a>
        <a href="#downloads" className={styles.link}>Downloads</a>
        <a href="#downloads" className={styles.cta}>
          <FontAwesomeIcon icon={faDownload} />
          <span>Get It</span>
        </a>
      </div>
    </nav>
  );
}
