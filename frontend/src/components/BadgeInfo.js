"use client";

import Image from "next/image";
import styles from "./BadgeInfo.module.css";

const items = [
  {
    icon: "/icons/shield.svg",
    title: "The Shield",
    text: "Maintains a link to our history and previous RFC logo.",
  },
  {
    icon: "/icons/ranges.svg",
    title: "Mt. Richmond & The Richmond Ranges",
    text:
      "Jubilee Park sits at the foot of the Richmond Ranges — this represents our home.",
  },
  {
    icon: "/icons/tasmanpride.svg",
    title: "Club Motto & Establishment",
    text:
      "The club motto and incorporation of the year our club was established.",
  },
  {
    icon: "/icons/ball.svg",
    title: "Football Icon",
    text: "Representing the beautiful game we all love.",
  },
  {
    icon: "/icons/stripes.svg",
    title: "Our Club United As One",
    text: "A stripe for every grade of football played at RFC.",
    small:
      "1st Kicks • Fun Football • Junior • Youth • Senior Men’s • Senior Women’s • Masters",
  },
];

export default function BadgeInfo() {
  return (
    <section className={styles.section} id="badge-info">
      <div className={styles.inner}>
        <div className={styles.scroller}>
          <ul className={styles.grid}>
            {items.map(({ icon, title, text, small }) => (
              <li key={title} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Image
                    src={icon}
                    alt={title}
                    width={88}
                    height={88}
                    className={styles.icon}
                  />
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
                {small && <p className={styles.small}>{small}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
