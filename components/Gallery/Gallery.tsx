import Image from "next/image";
import styles from "./Gallery.module.css";

const images = [
  { src: "/images/1.png", alt: "Overgrown ruins" },
  { src: "/images/2.png", alt: "Trash creatures" },
  { src: "/images/3.png", alt: "Tree bloom moment" },
  { src: "/images/4.png", alt: "Boss encounter" },
  { src: "/images/5.png", alt: "World map" }
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.header}>
        <p className={styles.overline}>Screenshots</p>
        <h2 className={styles.heading}>A World in Decay</h2>
      </div>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={`${styles.item} ${i === 0 ? styles.featured : ""}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={styles.img}
              sizes={i === 0 ? "66vw" : "33vw"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}