"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Club Info + Logo + Social */}
        <div className={styles.clubInfo}>
          <Image
            src="/icons/logo.svg"
            alt="Richmond Athletic Logo"
            width={64}
            height={64}
            className={styles.logo}
            priority
          />
          <h4 className={styles.clubName}>Richmond Athletic AFC</h4>
          <p className={styles.address}>Jubilee Park, Gladstone Road, Richmond</p>
          <div className={styles.social}>
            <a
              href="https://www.facebook.com/profile.php?id=100057436152261"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/richmond_footballclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Contacts */}
        <div className={styles.contacts}>
          <p>
            <strong>Chris Sibbald</strong> – Club President:{" "}
            <a href="mailto:president@richmondathletic.co.nz">
              president@richmondathletic.co.nz
            </a>
          </p>
          <p>
            <strong>Cherie Llewellin</strong> – Club Administrator:{" "}
            <a href="mailto:admin@richmondathletic.co.nz">
              admin@richmondathletic.co.nz
            </a>
          </p>
        </div>

        {/* Credit */}
        <div className={styles.credit}>
          <p>
            Website by{" "}
            <a href="https://sidewalks.co.nz" target="_blank" rel="noopener noreferrer">
              Sidewalk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
