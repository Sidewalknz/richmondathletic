"use client";

import Image from "next/image";
import styles from "./SocialCTA.module.css";

export default function SocialCTA() {
  return (
    <section className={styles.section} id="latest-news">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.outline}>Latest</span>{" "}
            <span className={styles.solid}>News</span>
          </h2>
          <p className={styles.lead}>
            For all the latest news on the Richmond Football Club please follow us on our social media platforms.
          </p>
        </header>

        <ul className={styles.tiles}>
          {/* Facebook */}
          <li className={styles.tile}>
            <a
              href="https://www.facebook.com/profile.php?id=100057436152261"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="Follow Richmond FC on Facebook"
            >
              <div className={styles.iconWrap}>
                <Image
                  src="/icons/facebook.svg"
                  alt=""
                  width={36}
                  height={36}
                  className={styles.icon}
                />
              </div>
              <div className={styles.meta}>
                <span className={styles.network}>Facebook</span>
                <span className={styles.handle}>Richmond Football Club</span>
              </div>
              <span className={styles.cta}>Follow</span>
            </a>
          </li>

          {/* Instagram */}
          <li className={styles.tile}>
            <a
              href="https://www.instagram.com/richmond_footballclub/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="Follow Richmond FC on Instagram"
            >
              <div className={styles.iconWrap}>
                <Image
                  src="/icons/instagram.svg"
                  alt=""
                  width={36}
                  height={36}
                  className={styles.icon}
                />
              </div>
              <div className={styles.meta}>
                <span className={styles.network}>Instagram</span>
                <span className={styles.handle}>@richmond_footballclub</span>
              </div>
              <span className={styles.cta}>Follow</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
