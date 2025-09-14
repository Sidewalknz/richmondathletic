"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./DevelopmentProgramme.module.css";

export default function DevelopmentProgramme() {
  return (
    <section className={styles.section} id="development-programme">
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.outline}>Development Programme</span>
            <br />
            <span className={styles.solid}>is back for 2026</span>
          </h2>
        </div>

        {/* Content grid: Left = copy, Right = player + radial */}
        <div className={styles.grid}>
          {/* Left: updated lead + key details */}
          <div className={styles.left}>
            <p className={styles.lead}>
              The programme is aimed at players who show a strong interest in football
              and are eager to enhance their technical, physical, and mental skills.
              Players in the programme will need to demonstrate commitment, respect,
              focus, and a positive attitude, along with a drive to learn and improve.
              <br />
              <br />
              Players will remain part of their regular club team for Saturday matches
              but will also play additional games against other representative teams
              and may have opportunities to participate in tournaments.
            </p>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Key Details</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Who:</strong> Expressions of interest for players born{" "}
                  <strong>2011–2013</strong>.
                </li>
                <li>
                  <strong>Note:</strong> Girls only sessions will also be run with our women&rsquo;s coaches for any girls aged 12yrs+
                </li>
                <li>
                  <strong>Cost:</strong> <strong>$80 per term</strong>.
                </li>
              </ul>

              <div className={styles.ctas}>
                <Link
                  href={`mailto:admin@richmondathletic.co.nz?subject=EOI%20—%20Development%20Programme%202026&body=Kia%20ora%20Richmond%20FC%2C%0A%0AI'd%20like%20to%20register%20interest%20in%20the%20Development%20Programme%202026.%0APlayer%20name%3A%0AYear%20of%20birth%3A%0ACurrent%20team%2Fgrade%3A%0AParent%2Fguardian%20contact%3A%0A%0AThanks!`}
                  className={styles.primaryCta}
                >
                  Register Interest
                </Link>
              </div>
            </div>
          </div>

          {/* Right: player with radial red patch + ground shadow */}
          <div className={styles.right}>
            <div className={styles.visual}>
              <div className={styles.radial} aria-hidden></div>
              <div className={styles.groundShadow} aria-hidden></div>
              <Image
                src="/images/player.webp"
                alt="Richmond FC player"
                width={620}
                height={820}
                priority
                className={styles.player}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
