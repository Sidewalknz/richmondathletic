"use client";

import styles from "./MarqueeSection.module.css";

export default function MarqueeSection() {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.track}>
        <p className={styles.text}>RICHMOND FOOTBALL CLUB • RICHMOND FOOTBALL CLUB • </p>
        <p className={styles.text}>RICHMOND FOOTBALL CLUB • RICHMOND FOOTBALL CLUB • </p>
      </div>
    </section>
  );
}
