import styles from "./Collaborators.module.css";

const collabs = [
  {
    name: "Jim Zark",
    img: "https://yt3.googleusercontent.com/M7uGHL7zl9AfI3dh-i_Ml-7B4x1BUDbTExc1HfEM4jsa0-zo2YzrvFMCAYx-kheXQ_Lnru3m=s160-c-k-c0x00ffffff-no-rj",
    href: "https://www.youtube.com/watch?v=4dtPXsceQqI",
  },
  {
    name: "BlancoKix",
    img: "https://yt3.googleusercontent.com/Enj6rAptP11ZnHbTJajxqrzCRRNIkV0yjwBjdz0Rv1NGc8FLu1dmXbnguZbAxcSVrFm7k6w9=s160-c-k-c0x00ffffff-no-rj",
    href: "https://www.youtube.com/watch?v=cKDJeX-U0vk",
  },
  {
    name: "Prejudged Seeker",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/31fb153e-2b4f-40e9-ad39-afc4376cf1cc-profile_image-70x70.png",
    href: "https://www.youtube.com/watch?v=FYhse3UsOkI",
  },
  {
    name: "Beef Gravy Studios",
    img: "https://yt3.googleusercontent.com/EVQv9J5c9gL6aFYJpa8AYv8levMr4954LRtNlCo1TWxLgjtSa41g1lt3XqVskg-5Wb5bZP2Kig=s160-c-k-c0x00ffffff-no-rj",
    href: "https://www.youtube.com/watch?v=cbXJbUNIzfs&t=872s",
  },
  {
    name: "Spudcats",
    img: "https://yt3.googleusercontent.com/qnzdmZ6lULKb9eEymJLZSPZBvsI6JthOMxGdkKtU0TgrEK9HZ-kxuDfkJsJLHtm7wFM24VaGFA=s160-c-k-c0x00ffffff-no-rj",
    href: "https://www.youtube.com/watch?v=u2hnvuZfiyM",
  },
];

export default function Collaborators() {
  return (
    <section className={styles.colabs}>
      <div className={styles.header}>
        <p className={styles.overline}>Community</p>
        <h2 className={styles.heading}>Featured Collaborators</h2>
      </div>
      <div className={styles.grid}>
        {collabs.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener"
            className={styles.card}
          >
            <div className={styles.avatarRing}>
              <img src={c.img} alt={c.name} className={styles.avatar} />
            </div>
            <span className={styles.name}>{c.name}</span>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
