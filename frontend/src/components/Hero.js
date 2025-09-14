"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero({ players = [], cycleMs = 6000 }) {
  const items = useMemo(
    () => (players && players.length ? players.filter(Boolean) : []),
    [players]
  );

  // random initial index (if we have items)
  const [idx, setIdx] = useState(() =>
    items.length ? Math.floor(Math.random() * items.length) : 0
  );

  const imgRef = useRef(null);
  const nearRef = useRef(null);
  const farRef = useRef(null);
  const sigRef = useRef(null);
  const wrapRef = useRef(null);

  // Preload images
  useEffect(() => {
    if (typeof window === "undefined") return;
    items.forEach((p) => {
      const i = new Image();
      i.src = p.src;
    });
  }, [items]);

  // Cycle (no immediate repeats)
  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => {
      setIdx((prev) => {
        let next = Math.floor(Math.random() * items.length);
        if (next === prev) next = (prev + 1) % items.length;
        return next;
      });
    }, Math.max(1000, cycleMs)); // guard against too-fast
    return () => clearInterval(id);
  }, [items, cycleMs]);

  const current = items[idx] || {};
  const alt = current?.name ? `${current.name} — Richmond FC` : "Richmond FC player";

  // Restart swap animations on change
  useEffect(() => {
    const els = [imgRef.current, nearRef.current, farRef.current, sigRef.current];
    els.forEach((el) => {
      if (!el) return;
      el.classList.remove("swap");
      // reflow to restart
      void el.offsetWidth;
      el.classList.add("swap");
    });
    if (wrapRef.current) {
      wrapRef.current.style.setProperty("--player-url", `url('${current.src}')`);
    }
  }, [current]);

  if (!items.length) {
    // nothing to show — keep structure so layout doesn't explode
    return (
      <section className={styles.hero}>
        <div className={styles.stripes} aria-hidden />
        <div className={styles.vignette} aria-hidden />
        <div className={styles.inner}>
          <div className={styles.stage}>
            <div className={styles.wordHalo} aria-hidden />
            <div aria-hidden className={styles.bigWordGroup}>
              <span className={`${styles.bigWord} ${styles.row1}`}>STRIVE</span>
              <span className={`${styles.bigWord} ${styles.row2}`}>STRIVE</span>
              <span className={`${styles.bigWord} ${styles.row3}`}>STRIVE</span>
              <span className={`${styles.bigWord} ${styles.row4}`}>STRIVE</span>
              <span className={`${styles.bigWord} ${styles.row5}`}>STRIVE</span>
            </div>
            <div className={styles.playerWrap}>
              <div className={styles.groundShadow} aria-hidden />
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.lead}>
              Richmond FC is built on <strong>STRIVE</strong> — Support, Together, Respect, Integrity, Vision, Everyone.
            </p>
            <div className={styles.actions}>
              <a href="/registration" className={styles.primaryCta}>2026 Registration</a>
              <a href="mailto:admin@richmondathletic.co.nz" className={styles.secondaryCta}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      {/* Background textures */}
      <div className={styles.stripes} aria-hidden />
      <div className={styles.vignette} aria-hidden />

      {/* Capped content */}
      <div className={styles.inner}>
        {/* Stage: halo + moving words + player stack */}
        <div className={styles.stage}>
          <div className={styles.wordHalo} aria-hidden />
          <div aria-hidden className={styles.bigWordGroup}>
            <span className={`${styles.bigWord} ${styles.row1}`}>STRIVE</span>
            <span className={`${styles.bigWord} ${styles.row2}`}>STRIVE</span>
            <span className={`${styles.bigWord} ${styles.row3}`}>STRIVE</span>
            <span className={`${styles.bigWord} ${styles.row4}`}>STRIVE</span>
            <span className={`${styles.bigWord} ${styles.row5}`}>STRIVE</span>
          </div>

          <div
            ref={wrapRef}
            className={styles.playerWrap}
            style={{ "--player-url": `url('${current.src}')` }}
          >
            <div className={styles.groundShadow} aria-hidden />

            {/* shadow-of-a-shadow */}
            <div ref={farRef} className={styles.playerSilhouetteFar} aria-hidden />
            {/* near silhouette */}
            <div ref={nearRef} className={styles.playerSilhouette} aria-hidden />

            {/* the image */}
            <img
              ref={imgRef}
              className={styles.player}
              src={current.src}
              alt={alt}
              width="620"
              height="820"
              decoding="async"
            />

            {/* signature */}
            <div ref={sigRef} className={styles.signature}>
              <span className={styles.sigName}>{current?.name || ""}</span>
              {Number.isFinite(current?.number) && (
                <span className={styles.sigNumber}>#{current.number}</span>
              )}
            </div>
          </div>
        </div>

        {/* Copy + CTAs */}
        <div className={styles.content}>
          <p className={styles.lead}>
            Richmond FC is built on <strong>STRIVE</strong> — Support, Together, Respect, Integrity, Vision, Everyone.
          </p>
          <div className={styles.actions}>
            <a href="/registration" className={styles.primaryCta}>2026 Registration</a>
            <a href="mailto:admin@richmondathletic.co.nz" className={styles.secondaryCta}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
