"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Full width backgrounds */}
      <div className={styles.stripes}></div>
      <div className={styles.vignette}></div>

      {/* Capped content */}
      <div className={styles.inner}>
        {/* STRIVE 5-line converge/diverge animation */}
        <div aria-hidden className={styles.bigWordGroup}>
          <span className={`${styles.bigWord} ${styles.row1}`}>STRIVE</span>
          <span className={`${styles.bigWord} ${styles.row2}`}>STRIVE</span>
          <span className={`${styles.bigWord} ${styles.row3}`}>STRIVE</span>
          <span className={`${styles.bigWord} ${styles.row4}`}>STRIVE</span>
          <span className={`${styles.bigWord} ${styles.row5}`}>STRIVE</span>
        </div>

        {/* Player */}
        <div
          className={styles.playerWrap}
          style={{ "--player-url": "url('/images/player.png')" }}
        >
          <div className={styles.groundShadow} aria-hidden></div>
          <div className={styles.playerSilhouette} aria-hidden />
          <Image
            src="/images/player.png"
            alt="Richmond FC player"
            width={620}
            height={820}
            priority
            className={styles.player}
          />
        </div>

        {/* Copy + CTAs */}
        <div className={styles.content}>
          <p className={styles.lead}>
            Richmond FC is built on <strong>STRIVE</strong> — Support, Together, Respect, Integrity, Vision, Everyone.
          </p>
          <div className={styles.actions}>
            <Link href="/registration" className={styles.primaryCta}>
              2026 Registration
            </Link>
            <a href="mailto:admin@richmondathletic.co.nz" className={styles.secondaryCta}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
