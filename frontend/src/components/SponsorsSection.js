"use client";

import { useRef, useState, useEffect } from "react";
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
  { src: "/sponsors/rata.svg", alt: "Rata Foundation", href: "https://ratafoundation.org.nz/" },
  { src: "/sponsors/mainland.svg", alt: "Mainland Foundation", href: "https://mainlandfoundation.co.nz/" },
  { src: "/sponsors/pubcharity.svg", alt: "Pub Charity", href: "https://www.pubcharitylimited.org.nz/" },
  { src: "/sponsors/airrescue.svg", alt: "Air Rescue", href: "https://www.airrescueservices.co.nz/" },
];

export default function SponsorsSection() {
  // Duplicate for seamless loop
  const doubled = [...sponsors, ...sponsors];

  // Start animation after enough images report loaded/errored
  const total = doubled.length;
  const threshold = Math.ceil(total * 0.6); // ~60%
  const loadedRef = useRef(0);
  const [isReady, setIsReady] = useState(false);

  const markProgress = () => {
    loadedRef.current += 1;
    if (!isReady && loadedRef.current >= threshold) setIsReady(true);
  };

  const handleLoad = () => markProgress();
  const handleError = () => markProgress();

  // Fallback: if something never fires onLoad (e.g., cached SVG quirks),
  // flip to ready after a short delay so we don't stay paused forever.
  useEffect(() => {
    if (isReady) return;
    const t = setTimeout(() => setIsReady(true), 1500);
    return () => clearTimeout(t);
  }, [isReady]);

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
          {/* Seamless track */}
          <div
            className={`${styles.track} ${isReady ? styles.ready : styles.loading}`}
            aria-label="Sponsor logos scrolling"
          >
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
                  priority={i < 6}
                  onLoad={handleLoad}
                  onError={handleError}
                />
              );

              return (
                <div
                  className={styles.logoWrap}
                  key={`${sp.src}-${i}`}
                  aria-hidden={isDuplicate}
                >
                  <span className={styles.logoSkeleton} aria-hidden />
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

          {/* Reduced-motion fallback */}
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
                  priority={i < 6}
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
