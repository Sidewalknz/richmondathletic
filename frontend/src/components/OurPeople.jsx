import styles from "../app/club/Club.module.css";

export default function OurPeople({ panelId, labelledById, isHidden }) {
  return (
    <section
      id={panelId}
      role="tabpanel"
      aria-labelledby={labelledById}
      className={`${styles.section} ${isHidden ? styles.isHidden : ""}`}
    >
      <div className={styles.inner}>
        <h2 className={styles.h2}>Our People</h2>
        <p className={styles.muted}>Content coming soon.</p>
      </div>
    </section>
  );
}
