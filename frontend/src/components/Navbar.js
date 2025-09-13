"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/club", label: "Club" },
    { href: "/shop", label: "Shop" },
  ];

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/icons/logo.svg"
              alt="Richmond Athletic Logo"
              width={72}
              height={72}
              priority
            />
          </Link>
        </div>

        {/* Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? styles.active : ""}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/registration"
              className={`${styles.cta} ${pathname === "/registration" ? styles.activeCta : ""}`}
            >
              2026 Registration
            </Link>
          </li>
        </ul>

        {/* Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
