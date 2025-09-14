"use client";

import Image from "next/image";
import styles from "./SponsorsSection.module.css";

const sponsors = [
  { src: "/sponsors/sprig.svg", alt: "Sprig + Fern Brewing Co.", href: "https://sprigandfern.co.nz" },
  { src: "/sponsors/coldstore.svg", alt: "Coldstore Construction Ltd.", href: "https://www.coldstoreconstruction.co.nz/" },
  { src: "/sponsors/thompsondaly.svg", alt: "Thompson Daly Chartered Accountants", href: "https://thompsondaly.co.nz/" },
  { src: "/sponsors/andrewhealey.svg", alt: "Andrew Healey Signs", href: "#" },
  { src: "/sponsors/thephysio.svg", alt: "The Physio Institute", href: "https://www.thephysioinstitute.co.nz/" },
  { src: "/sponsors/smithandsons.svg", alt: "Smith & Sons", href: "https://www.smithandsons.co.nz/renovation-builder/nelson-877/" },
  { src: "/sponsors/hothouse.svg", alt: "Hothouse Creative", href: "https://www.hothouse.co.nz/" },
  { src: "/sponsors/tasmancivil.svg", alt: "Tasman Civil Ltd.", href: "https://www.tasmancivil.co.nz/" },
  { src: "/sponsors/tasmanautoelectrics.svg", alt: "Tasman Auto Electrics", href: "https://www.tasmanautoelectrics.co.nz/" },
  { src: "/sponsors/helenruston.svg", alt: "Helen Ruston", href: "https://www.kcandco.nz/agent-profile?agent_id=12790" },
  { src: "/sponsors/themeadows.svg", alt: "Sprig & Fern The Meadows", href: "https://sprigandfern.co.nz/the-meadows/" },
  { src: "/sponsors/absoluteenergy.svg", alt: "Absolute Energy", href: "https://absoluteenergy.co.nz/" },
  { src: "/sponsors/carcompany.svg", alt: "The Car Company", href: "https://www.carcompanynelson.co.nz/" },
  { src: "/sponsors/brownandsyme.svg", alt: "Brown & Syme", href: "https://www.brown-syme.co.nz/" },
  { src: "/sponsors/signaturehomes.svg", alt: "Signature Homes", href: "https://signature.co.nz" },
  { src: "/sponsors/luvya.svg", alt: "Heartland Fruit", href: "https://luvya.co.nz/" },
  { src: "/sponsors/waimeaprint.svg", alt: "Waimea Print Express", href: "https://www.waimeaprint.co.nz/" },
  { src: "/sponsors/spark.svg", alt: "Spark Business Hub", href: "https://spark.co.nz/business" },
  { src: "/sponsors/hireahubby.svg", alt: "Hire-A-Hubby", href: "https://hireahubby.co.nz/" },
  { src: "/sponsors/rata.svg", alt: "Rata (Nelson)", href: "https://ratafoundation.org.nz/" },
  { src: "/sponsors/mainland.svg", alt: "Mainland Foundation", href: "https://mainlandfoundation.co.nz/" },
  { src: "/sponsors/pubcharity.svg", alt: "Pub Charity", href: "https://www.pubcharitylimited.org.nz/" },
  { src: "/sponsors/airrescue.svg", alt: "Air Rescue", href: "https://www.airrescueservices.co.nz/" },
];

// Optionally add hrefs:
// { src: "...", alt: "...", href: "https://sponsor.site" }

export default function SponsorsSection() {
  const doubled = [...sponsors, ...sponsors];

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
          {/* One seamless, continuous row */}
          <div className={styles.track} aria-label="Sponsor logos scrolling">
            {doubled.map((sp, i) => {
              const isDuplicate = i >= sponsors.length;
              const img = (
                <Image
                  src={sp.src}
                  alt={sp.alt}
                  width={200}
                  height={80}
                  className={styles.logo}
                  sizes="(max-width: 640px) 50vw, (max-width: 1200px) 25vw, 200px"
                  priority={i < 4} // front-load a few to avoid initial hitch
                />
              );
              return (
                <div
                  className={styles.logoWrap}
                  key={`${sp.src}-${i}`}
                  aria-hidden={isDuplicate} // hide duplicate half from AT
                >
                  {sp.href ? (
                    <a
                      href={sp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={sp.alt}
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </div>
              );
            })}
          </div>

          {/* Reduced-motion fallback grid (only shown when user prefers it) */}
          <div className={styles.gridFallback}>
            {sponsors.map((sp, i) => {
              const img = (
                <Image
                  src={sp.src}
                  alt={sp.alt}
                  width={200}
                  height={80}
                  className={styles.logo}
                  sizes="(max-width: 640px) 50vw, (max-width: 1200px) 25vw, 200px"
                  priority={i < 4}
                />
              );
              return (
                <div className={styles.logoWrap} key={`grid-${sp.src}-${i}`}>
                  {sp.href ? (
                    <a
                      href={sp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={sp.alt}
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <p className={styles.note}>
          Thank you to our sponsors for supporting Richmond FC.
        </p>
      </div>
    </section>
  );
}
