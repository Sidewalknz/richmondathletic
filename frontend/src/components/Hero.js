"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Full-screen background stripes */}
      <div className={styles.stripes} aria-hidden></div>
      {/* Optional global edge vignette */}
      <div className={styles.vignette} aria-hidden></div>

      {/* Capped content */}
      <div className={styles.inner}>
        {/* Stage: STRIVE behind the player; halo is its own object */}
        <div className={styles.stage}>
          {/* Standalone, player-centered halo */}
          <div className={styles.wordHalo} aria-hidden></div>

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
            style={{ "--player-url": "url('/images/player.webp')" }}
          >
            <div className={styles.groundShadow} aria-hidden></div>
            <div className={styles.playerSilhouette} aria-hidden />
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
