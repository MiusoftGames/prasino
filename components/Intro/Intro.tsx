import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section id="about" className={styles.intro}>
      <div className={styles.inner}>
        <p className={styles.overline}>The World</p>
        <h2 className={styles.heading}>
          The air is poisoned.<br />
          Only trees can save it.
        </h2>
        <p className={styles.lead}>
          Prásino is a survival adventure set in a dying land smothered by
          endless trash. With your magic seeds, you grow trees, cleanse the
          land, and push back the corruption — one breath at a time.
        </p>
      </div>

      <div className={styles.pillars}>
        {[
          { icon: "🌳", label: "Plant Trees", desc: "Create breathing zones that push back the corruption" },
          { icon: "⚔️", label: "Fight Monsters", desc: "Trash-born creatures crawl from the decay to stop you" },
          { icon: "🌍", label: "Restore Life", desc: "Every seed you plant is a step closer to hope" },
        ].map((p) => (
          <div key={p.label} className={styles.pillar}>
            <span className={styles.pillarIcon}>{p.icon}</span>
            <h3 className={styles.pillarLabel}>{p.label}</h3>
            <p className={styles.pillarDesc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
