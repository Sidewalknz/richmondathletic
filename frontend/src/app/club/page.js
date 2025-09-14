"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./Club.module.css";

// Section components
import ClubHistory from "../../components/ClubHistory";
import OurTeams from "../../components/OurTeams";
import OurCommittee from "../../components/OurCommittee";
import OurPeople from "../../components/OurPeople";
import GeneralInfo from "../../components/GeneralInfo";

import Footer from "@/components/Footer";

export default function ClubPage() {
  const tabs = useMemo(
    () => [
      { id: "history", label: "Club History", Component: ClubHistory },
      { id: "teams", label: "Our Teams", Component: OurTeams },
      { id: "committee", label: "Our Committee", Component: OurCommittee },
      { id: "people", label: "Our People", Component: OurPeople },
      { id: "info", label: "General Information", Component: GeneralInfo },
    ],
    []
  );

  const getInitial = () => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash?.replace("#", "");
      if (hash && tabs.some((t) => t.id === hash)) return hash;
    }
    return tabs[0].id;
  };

  const [active, setActive] = useState(getInitial);

  // Sync when hash changes (e.g., browser navigation)
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      if (tabs.some((t) => t.id === id)) setActive(id);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [tabs]);

  const activate = (id) => {
    setActive(id);
    // Update the URL without jumping the page
    const url = `${window.location.pathname}#${id}`;
    window.history.replaceState(null, "", url);
  };

  return (
    <>
      <main className={styles.page}>
        {/* Masthead (kept) */}
        <section className={styles.masthead} aria-labelledby="club-title">
          <div className={styles.mastheadTexture} aria-hidden />
          <div className={styles.inner}>
            <div className={styles.mastheadContent}>
              <h1 id="club-title" className={styles.title}>The Club</h1>
              <p className={styles.lead}>
                Learn about our history, teams, people, and how to get involved.
              </p>

              {/* Tabs */}
              <nav
                className={styles.subnav}
                role="tablist"
                aria-label="Club sections"
                aria-orientation="horizontal"
              >
                {tabs.map(({ id, label }) => (
                  <button
                    key={id}
                    id={`tab-${id}`}
                    role="tab"
                    type="button"
                    className={`${styles.tab} ${active === id ? styles.tabActive : ""}`}
                    aria-selected={active === id}
                    aria-controls={`panel-${id}`}
                    tabIndex={active === id ? 0 : -1}
                    onClick={() => activate(id)}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Tab Panels (all rendered for a11y & state preservation, hidden when inactive) */}
        {tabs.map(({ id, Component }) => (
          <Component
            key={id}
            panelId={`panel-${id}`}
            labelledById={`tab-${id}`}
            isHidden={active !== id}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
