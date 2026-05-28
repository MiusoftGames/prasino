import styles from "./Reviews.module.css";

const reviews = [
    { name: "Jim Zark", text: "great game!" },
    { name: "Ruchaka Ravisara", text: "superb game.❤‍🔥" },
    { name: "Mazyuka Marblemaw", text: "I enjoyed playing this game :D It's super fun and I liked the idea of walking through mazes and finding the way out tryna not to die from lack of oxygen ヾ(❀╹◡╹)ﾉﾞ the reason why I rated Prasino 4 stars not 5 cuz the controls are kinda awkward 👌🏻" },
    { name: "Luciano Gabriel Cury Trajano", text: "I haven't played this game yet, but it looks really good. From the pictures, it's a very simple game, and it seems really cute. I just found it a bit sad that there aren't any reviews :(" },
    { name: "Brandon Martinez", text: "It's the best game I've ever played, the story is so emotional and exciting, I love it so much I think I'm going to cry with emotion 🥲" },
    { name: "LEONARDO ZAPATA", text: "It's a very good game, but I think it would be better if they didn't abandon it. I trust they can improve it." },
    { name: "Лев", text: "Great app, but what's the difference between the free and paid versions?" },
    { name: "Влад Кононенко", text: "It's ok, the game is unfairly unknown." },
    { name: "Pedro Falavinha", text: "I liked the game, even though many people ignored it, I gave them hope and I don't regret it." },
    { name: "James Bwalya", text: "A very creative game using trees to survive planting the trees this game is amazing because of its simple but creative game play . However I really hope that the creator of this game makes another game like this one but like a metroidvania game. 💯 Anyway this is still an amazing game" },
];

export default function Reviews() {
    return (
        <section className={styles.reviews}>
            <div className={styles.header}>
                <p className={styles.overline}>Players</p>
                <h2 className={styles.heading}>What People Are Saying</h2>
            </div>

            <div className={styles.track}>
                <div className={styles.inner}>
                    {[...reviews, ...reviews].map((r, i) => (
                        <div key={i} className={styles.card}>
                            <p className={styles.text}>"{r.text}"</p>
                            <span className={styles.name}> ~ {r.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}