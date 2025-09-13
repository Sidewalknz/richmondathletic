"use client";

import Image from "next/image";
import styles from "./Shop.module.css";
import Footer from "@/components/Footer";

const products = [
  {
    id: "promo-tee",
    name: "Promo T-Shirt",
    img: "/shop/promo-tee.jpg",
    prices: [
      { label: "Kids", value: "$30" },
      { label: "Adults", value: "$40" },
    ],
    note: "Kids: Red · Adults: Black",
  },
  {
    id: "polo-shirt",
    name: "Club Polo Shirt",
    img: "/shop/polo-shirt.jpg",
    price: "$80",
  },
  {
    id: "club-jacket",
    name: "Club Jacket",
    img: "/shop/club-jacket.jpg",
    price: "$125",
    note: "Name optional — no extra cost",
  },
  {
    id: "hooded-jacket",
    name: "Club Hooded Jacket",
    img: "/shop/hooded-jacket.jpg",
    price: "$135",
    note: "Name optional — no extra cost",
  },
  {
    id: "training-top",
    name: "Club Training Top",
    img: "/shop/training-top.jpg",
    price: "$50",
  },
  {
    id: "hoodie",
    name: "Club Hoodie",
    img: "/shop/hoodie.jpg",
    prices: [
      { label: "Kids", value: "$55" },
      { label: "Adults", value: "$60" },
    ],
    note: "Name optional — no extra cost",
  },
  {
    id: "baseball-cap",
    name: "Club Baseball Cap",
    img: "/shop/baseball-cap.jpg",
    price: "$25",
  },
  {
    id: "bucket-hat",
    name: "Club Bucket Hat",
    img: "/shop/bucket-hat.jpg",
    price: "$25",
  },
  {
    id: "boot-bag",
    name: "Club Boot Bag",
    img: "/shop/boot-bag.jpg",
    price: "$20",
  },
];

const ORDER_EMAIL = "stu.reid11@gmail.com";

export default function ShopPage() {
  return (
    <>
      <section className={styles.page}>
        {/* Header / Hero */}
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <h1 className={styles.title}>
              <span className={styles.outline}>Club</span>{" "}
              <span className={styles.solid}>Merchandise</span>
            </h1>
            <p className={styles.tagline}>Official Richmond FC gear</p>

            {/* Big order email CTA */}
            <a
              href={`mailto:${ORDER_EMAIL}?subject=Richmond%20FC%20Merch%20Order%20Enquiry`}
              className={styles.emailBar}
            >
              To order please contact <strong>STU REID</strong> – {ORDER_EMAIL}
            </a>
          </div>
        </header>

        {/* Products */}
        <div className={styles.inner}>
          <ul className={styles.grid}>
            {products.map((p) => (
              <li className={styles.card} key={p.id}>
                <div className={styles.media}>
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={640}
                    height={480}
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                  />
                </div>

                <div className={styles.meta}>
                  <h3 className={styles.name}>{p.name}</h3>
                  {p.note ? <p className={styles.noteSmall}>{p.note}</p> : null}

                  {/* Prices only (no buttons) */}
                  <div className={styles.priceRow}>
                    {p.prices ? (
                      <div className={styles.priceChips}>
                        {p.prices.map((chip) => (
                          <span key={chip.label} className={styles.chip}>
                            {chip.label} <strong>{chip.value}</strong>
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className={styles.price}>{p.price}</span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
