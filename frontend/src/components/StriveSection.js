"use client";

import styles from "./StriveSection.module.css";

const values = [
  {
    letter: "S",
    title: "Support",
    text:
      "Each other on and off the pitch, our physical and mental wellbeing, our refs and supporters.",
  },
  {
    letter: "T",
    title: "Together",
    text:
      "As a team through the highs and lows, we act in the interests of the team.",
  },
  {
    letter: "R",
    title: "Respect",
    text:
      "Ourselves, our opposition and officials — show up with a positive attitude in language and actions.",
  },
  {
    letter: "I",
    title: "Integrity",
    text:
      "Do the right thing even when out of earshot of the ref. Help out without being asked; encourage and support.",
  },
  {
    letter: "V",
    title: "Vision",
    text:
      "Have goals as a player, participate in training and events, and support the vision of RFC with energy.",
  },
  {
    letter: "E",
    title: "Everyone!",
    text:
      "Football for all — all ages, abilities, gender identities and cultures. Inclusion holds us firm.",
  },
];

export default function StriveSection() {
  return (
    <section className={styles.section} id="strive">
      <div className={styles.inner}>
        <ul className={styles.rows}>
          {values.map(({ letter, title, text }) => (
            <li key={title} className={styles.row}>
              <div className={styles.letter} aria-hidden>
                {letter}
              </div>
              <div className={styles.value}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
