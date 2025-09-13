"use client";

import Image from "next/image";
import styles from "./SponsorsSection.module.css";

const sponsors = [
  { src: "/sponsors/sprig.svg", alt: "Sprig + Fern Brewing Co." },
  { src: "/sponsors/coldstore.svg", alt: "Coldstore Construction Ltd." },
  { src: "/sponsors/thompsondaly.svg", alt: "Thompson Daly Chartered Accountants" },
  { src: "/sponsors/andrewhealey.svg", alt: "Andrew Healey Signs" },
  { src: "/sponsors/thephysio.svg", alt: "The Physio Institute" },
  { src: "/sponsors/smithandsons.svg", alt: "Smith & Sons" },
  { src: "/sponsors/hothouse.svg", alt: "Hothouse Creative" },
  { src: "/sponsors/tasmancivil.svg", alt: "Tasman Civil Ltd." },
  { src: "/sponsors/tasmanautoelectrics.svg", alt: "Tasman Auto Electrics" },
  { src: "/sponsors/helenruston.svg", alt: "Helen Ruston" },
  { src: "/sponsors/themeadows.svg", alt: "Sprig & Fern The Meadows" },
  { src: "/sponsors/absoluteenergy.svg", alt: "Absolute Energy" },
  { src: "/sponsors/carcompany.svg", alt: "The Car Company" },
  { src: "/sponsors/brownandsyme.svg", alt: "Brown & Syme" },
  { src: "/sponsors/signaturehomes.svg", alt: "Signature Homes" },
  { src: "/sponsors/luvya.svg", alt: "Heartland Fruit" },
  { src: "/sponsors/waimeaprint.svg", alt: "Waimea Print Express" },
  { src: "/sponsors/spark.svg", alt: "Spark Business Hub" },
  { src: "/sponsors/hireahubby.svg", alt: "Hire-A-Hubby" },
  { src: "/sponsors/rata.svg", alt: "Rata (Nelson)" },
  { src: "/sponsors/mainland.svg", alt: "Mainland Products" },
  { src: "/sponsors/pubcharity.svg", alt: "Pub Charity" },
  { src: "/sponsors/airrescue.svg", alt: "Air Rescue" },
];


// Optionally add hrefs:
// { src: "...", alt: "...", href: "https://sponsor.site" }

export default function SponsorsSection() {
  // Split roughly in half so both rows have a similar count (12 / 11)
  const mid = Math.ceil(sponsors.length / 2);
  const rowA = sponsors.slice(0, mid);
  const rowB = sponsors.slice(mid);

  const Track = ({ items }) => (
    // Duplicate the items to make a seamless loop
    <div className={styles.track}>
      {[...items, ...items].map((sp, i) => {
        const content = (
          <Image
            src={sp.src}
            alt={sp.alt}
            width={200}
            height={80}
            className={styles.logo}
            // Use sizes so Next/Image can pick an efficient source
            sizes="(max-width: 640px) 50vw, (max-width: 1200px) 25vw, 200px"
          />
        );
        return (
          <div className={styles.logoWrap} key={`${sp.src}-${i}`}>
            {sp.href ? (
              <a
                href={sp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sp.alt}
              >
                {content}
              </a>
            ) : (
              content
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className={styles.section} id="sponsors">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.outline}>Club</span>{" "}
            <span className={styles.solid}>Sponsors</span>
          </h2>

          <a
            className={styles.becomeCta}
            href="mailto:admin@richmondathletic.co.nz?subject=Sponsor%20Enquiry%20—%20Richmond%20FC"
          >
            Become a Sponsor
          </a>
        </header>

        <div className={styles.viewport}>
          {/* Row A: left -> right */}
          <div className={`${styles.row} ${styles.rowA}`} aria-hidden={false}>
            <Track items={rowA} />
          </div>

          {/* Row B: right -> left (slower for parallax feel) */}
          <div className={`${styles.row} ${styles.rowB}`} aria-hidden={false}>
            <Track items={rowB} />
          </div>
        </div>

        <p className={styles.note}>
          Thank you to our sponsors for supporting Richmond FC.
        </p>
      </div>
    </section>
  );
}
