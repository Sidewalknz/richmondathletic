import styles from "./Contact.module.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Richmond Athletic AFC",
  description:
    "Get in touch with Richmond Athletic AFC — general enquiries, registrations, sponsorship, and committee contacts.",
};

const CONTACTS = [
  {
    title: "General / Admin",
    name: "Cherie",
    email: "admin@richmondathletic.co.nz",
    blurb: "Registrations, player queries, fixtures & general club info.",
  },
  {
    title: "President",
    name: "Chris",
    email: "president@richmondathletic.co.nz",
    blurb: "Governance, conduct matters, and formal correspondence.",
  },
  {
    title: "Sponsorship",
    name: "Ged",
    email: "gerard.clark11@gmail.com",
    blurb: "Partnerships, signage, kit, and activation opportunities.",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className={styles.page}>
        {/* Masthead */}
        <section className={styles.masthead} aria-labelledby="contact-title">
          <div className={styles.stripes} aria-hidden />
          <div className={styles.inner}>
            <div className={styles.mastheadContent}>
              <h1 id="contact-title" className={styles.title}>Contact Richmond AFC</h1>
              <p className={styles.lead}>
                Reach the right person fast — or send us a message using the form below.
              </p>
            </div>
          </div>
        </section>

        {/* Quick contacts */}
        <section className={styles.section} aria-labelledby="quick-heading">
          <div className={styles.inner}>
            <h2 id="quick-heading" className={styles.h2}>Quick Contacts</h2>

            <ul className={styles.cardGrid} role="list">
              {CONTACTS.map((c) => (
                <li key={c.title} className={styles.card}>
                  <h3 className={styles.h3}>{c.title}</h3>
                  <p className={styles.cardBody}>
                    <strong>{c.name}</strong><br />
                    <a className={styles.link} href={`mailto:${c.email}`}>{c.email}</a>
                  </p>
                  <p className={styles.cardSmall}>{c.blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Form + Map */}
        <section className={styles.sectionAlt} aria-labelledby="form-heading">
          <div className={styles.inner}>
            <div className={styles.split}>
              {/* Contact form */}
              <div>
                <h2 id="form-heading" className={styles.h2}>Send us a message</h2>
                <form className={styles.form} data-contact-form>
                  <label className={styles.label}>
                    Send to
                    <select className={styles.input} data-field="to" aria-label="Choose recipient" defaultValue={CONTACTS[0].email}>
                      {CONTACTS.map((c) => (
                        <option key={c.email} value={c.email}>
                          {c.title} ({c.email})
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className={styles.label}>
                    Subject
                    <input
                      className={styles.input}
                      type="text"
                      data-field="subject"
                      placeholder="e.g., Junior registration question"
                      required
                    />
                  </label>

                  <div className={styles.row2}>
                    <label className={styles.label}>
                      Your name
                      <input
                        className={styles.input}
                        type="text"
                        data-field="name"
                        placeholder="First & last name"
                        required
                      />
                    </label>
                    <label className={styles.label}>
                      Your email
                      <input
                        className={styles.input}
                        type="email"
                        data-field="from"
                        placeholder="name@example.com"
                        required
                      />
                    </label>
                  </div>

                  <label className={styles.label}>
                    Message
                    <textarea
                      className={`${styles.input} ${styles.textarea}`}
                      data-field="message"
                      placeholder="How can we help?"
                      rows={6}
                      required
                    />
                  </label>

                  <div className={styles.actions}>
                    <button type="submit" className={styles.primaryBtn}>
                      Open Email to Send
                    </button>
                    <a href={`mailto:${CONTACTS[0].email}`} className={styles.secondaryBtn}>
                      Email Admin directly
                    </a>
                  </div>

                  <p className={styles.help}>
                    Tip: This form opens your email app with the details pre-filled (no data is stored on our site).
                  </p>
                </form>
              </div>

              {/* Map & venue */}
              <div>
                <h2 className={styles.h2}>Clubrooms & Pitches</h2>
                <p className={styles.p}>
                  <strong>Home Ground:</strong> Jubilee Park, Richmond (Tasman)
                </p>
                <div className={styles.mapWrap}>
                  <iframe
                    className={styles.map}
                    src="https://www.google.com/maps?q=Jubilee+Park+Richmond+NZ&output=embed"
                    loading="lazy"
                    title="Jubilee Park map"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className={styles.smallNote}>
                  Ground status updates are shared via Tasman District Council and our social channels on wet days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tiny inline script to power the mailto form + quick-recipient buttons */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const toSel = form.querySelector('[data-field="to"]');
  const subject = form.querySelector('[data-field="subject"]');
  const name = form.querySelector('[data-field="name"]');
  const from = form.querySelector('[data-field="from"]');
  const message = form.querySelector('[data-field="message"]');

  // Quick contact buttons set the recipient in the form
  document.querySelectorAll('[data-set-recipient]').forEach(btn => {
    btn.addEventListener('click', () => {
      toSel.value = btn.dataset.setRecipient || '${CONTACTS[0].email}';
      toSel.dispatchEvent(new Event('change', { bubbles: true }));
      // Scroll to form focus
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      subject.focus();
    });
  });

  // Intercept submit and open a mailto: with prefilled body
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Let browser validation run first
    if (!form.reportValidity()) return;

    const to = toSel.value || '${CONTACTS[0].email}';
    const subj = subject.value || 'Richmond AFC enquiry';
    const lines = [];
    if (name.value) lines.push('Name: ' + name.value);
    if (from.value) lines.push('Email: ' + from.value);
    if (message.value) lines.push('', message.value);

    const href =
      'mailto:' + to +
      '?subject=' + encodeURIComponent(subj) +
      '&body=' + encodeURIComponent(lines.join('\\n'));

    window.location.href = href;
  });
})();`,
          }}
        />
      </main>

      <Footer />
    </>
  );
}
