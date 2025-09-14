import Link from "next/link";
import styles from "./Registration.module.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "2025 Registration | Richmond Athletic AFC",
  description:
    "Register to play or join as a non-playing member of Richmond Athletic AFC for the 2025 season. Fees, instructions, links, and payment details.",
};

const fees = [
  { group: "1st Kicks (4–6 yrs)", amount: "$60" },
  { group: "Fun Football (7–8 yrs)", amount: "$90" },
  { group: "Junior Football (9–12 yrs)", amount: "$135" },
  { group: "Youth Football (13–19 yrs)", amount: "$155" },
  { group: "Youth playing Senior Women (16–19 yrs)", amount: "$165" },
  { group: "Youth playing Senior Men (16–19 yrs)", amount: "$185" },
  { group: "Senior Women (20+)", amount: "$210" },
  { group: "Senior Men (20+)", amount: "$240" },
];

export default function RegistrationPage() {
  return (
    <>
      <main className={styles.page}>
        {/* Masthead */}
        <section className={styles.masthead} aria-labelledby="reg-title">
          <div className={styles.stripes} aria-hidden />
          <div className={styles.inner}>
            <div className={styles.mastheadContent}>
              <h1 id="reg-title" className={styles.title}>
                2025 Registrations
              </h1>
              <p className={styles.lead}>
                Registrations for both <strong>playing</strong> and <strong>non-playing</strong> members are now open.
              </p>

              <div className={styles.ctaRow}>
                <a
                  href="https://www.sporty.co.nz/viewform/282631"
                  className={styles.primaryBtn}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register to Play
                </a>
                <a
                  href="https://www.sporty.co.nz/viewform/282630"
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noreferrer"
                >
                  Non-Playing Member
                </a>
              </div>

              <p className={styles.deadline}>
                <strong>All registration fees are due by 31 March</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Fees */}
        <section className={styles.section} aria-labelledby="fees-heading">
          <div className={styles.inner}>
            <h2 id="fees-heading" className={styles.h2}>2025 Player Registration Fees</h2>

            <ul className={styles.feeGrid} role="list">
              {fees.map((f) => (
                <li key={f.group} className={styles.feeItem}>
                  <span className={styles.feeGroup}>{f.group}</span>
                  <span className={styles.feeAmount}>{f.amount}</span>
                </li>
              ))}
            </ul>

            <p className={styles.note}>
              Please ensure your registration is submitted and either paid, or you’ve arranged a
              payment plan with Richmond FC, before you are eligible to play in 2025.
            </p>
          </div>
        </section>

        {/* Playing registrations */}
        <section className={styles.sectionAlt} aria-labelledby="playing-heading">
          <div className={styles.inner}>
            <h2 id="playing-heading" className={styles.h2}>Playing Registration Instructions</h2>

            <div className={styles.split}>
              <div className={styles.richText}>
                <p>
                  Richmond FC now uses <strong>Sporty</strong> for registrations, fully integrated
                  with NZF’s Comet for a simpler, streamlined process.
                </p>
                <ul className={styles.bullets}>
                  <li>
                    <strong>Returning players:</strong> You should receive a personalised email with a
                    link that pre-fills your details. Review, update if needed, and submit to proceed
                    to payment (Credit, bank-to-bank, or bank transfer).
                  </li>
                  <li>
                    <strong>New players or no email received:</strong>{" "}
                    <a
                      href="https://www.sporty.co.nz/viewform/282631"
                      target="_blank"
                      rel="noreferrer"
                    >
                      register here via Sporty
                    </a>{" "}
                    and complete the required fields (asterisked by NZF). You can add additional family
                    members on the same form using <em>+ Add Person</em>.
                  </li>
                  <li>
                    <strong>Registered elsewhere already?</strong> Contact your current club to cancel
                    that registration before registering with Richmond FC.
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    href="https://www.sporty.co.nz/viewform/282631"
                    className={styles.primaryBtn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Register to Play
                  </a>
                </div>
              </div>

              <div className={styles.sideBox}>
                <h3 className={styles.h3}>Need help?</h3>
                <p>
                  Questions about playing registrations:
                  <br />
                  <a className={styles.link} href="mailto:admin@richmondathletic.co.nz">
                    admin@richmondathletic.co.nz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Non-playing registrations */}
        <section className={styles.section} aria-labelledby="nonplaying-heading">
          <div className={styles.inner}>
            <h2 id="nonplaying-heading" className={styles.h2}>Club Member (Non-Playing)</h2>

            <div className={styles.split}>
              <div className={styles.richText}>
                <p>
                  We value our non-playing members — volunteers, supporters, and whānau. Using{" "}
                  <strong>Sporty</strong>, you can register as a club member and link your details to
                  NZF.
                </p>
                <ul className={styles.bullets}>
                  <li>
                    Choose <strong>“Volunteer”</strong> under <em>Role</em> on the form.
                  </li>
                  <li>
                    Complete all required fields (asterisked by NZF) and submit to see payment options
                    (Credit, bank-to-bank, or bank transfer).
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    href="https://www.sporty.co.nz/viewform/282630"
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Register as Non-Playing
                  </a>
                </div>
              </div>

              <div className={styles.sideBox}>
                <h3 className={styles.h3}>Questions?</h3>
                <p>
                  Cherie (Club Admin):{" "}
                  <a className={styles.link} href="mailto:admin@richmondathletic.co.nz">
                    admin@richmondathletic.co.nz
                  </a>
                  <br />
                  Chris (President):{" "}
                  <a className={styles.link} href="mailto:president@richmondathletic.co.nz">
                    president@richmondathletic.co.nz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bank details */}
        <section className={styles.sectionAlt} aria-labelledby="bank-heading">
          <div className={styles.inner}>
            <h2 id="bank-heading" className={styles.h2}>Our Bank Details</h2>
            <div className={styles.bankBox}>
              <p>
                If you choose <strong>Pay Later</strong>, please make payment to:
              </p>
              <p className={styles.bankLine}>
                <strong>Richmond Athletic Football Club</strong>
                <br />
                ASB Bank, Richmond — <strong>12 3158 0088958-00</strong>
              </p>
              <p className={styles.note}>
                Use the player’s name and team/grade as the payment reference.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className={styles.section} aria-labelledby="help-heading">
          <div className={styles.inner}>
            <h2 id="help-heading" className={styles.h2}>Troubleshooting</h2>
            <p className={styles.p}>
              For any playing registration issues, please email{" "}
              <a className={styles.link} href="mailto:admin@richmondathletic.co.nz">
                admin@richmondathletic.co.nz
              </a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
