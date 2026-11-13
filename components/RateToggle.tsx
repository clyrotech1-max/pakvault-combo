"use client";

import { useState } from "react";

/**
 * APR toggle (Zappy pattern): "Standard" vs "With PAKV −25%". The four
 * locked tiers never change — the toggle only switches which rate is shown
 * big on each card. Standard: 5 / 6.5 / 8 / 10%. With PAKV: 3.75 / 4.88 /
 * 6 / 7.5%.
 */
const TIERS = [
  {
    std: "5%",
    pakv: "3.75%",
    ltv: "LTV up to 20%",
    desc: "The safest tier — maximum distance from every risk line.",
  },
  {
    std: "6.5%",
    pakv: "4.88%",
    ltv: "LTV 21–30%",
    desc: "Balanced — a useful loan with a wide safety buffer.",
  },
  {
    std: "8%",
    pakv: "6%",
    ltv: "LTV 31–40%",
    desc: "More cash out, still well below the 70% margin-call line.",
  },
  {
    std: "10%",
    pakv: "7.5%",
    ltv: "LTV 41–50%",
    desc: "The maximum loan PakVault offers — the cap never moves.",
  },
];

export default function RateToggle() {
  const [withPakv, setWithPakv] = useState(false);
  return (
    <>
      <div className="apr-toggle" role="group" aria-label="Show rates">
        <button
          type="button"
          aria-pressed={!withPakv}
          onClick={() => setWithPakv(false)}
        >
          Standard rates
        </button>
        <button
          type="button"
          aria-pressed={withPakv}
          onClick={() => setWithPakv(true)}
        >
          With PAKV −25%
        </button>
      </div>
      <div className="rate-grid">
        {TIERS.map((t) => (
          <div className="rate-card rv" key={t.ltv}>
            <div className="apr">{withPakv ? t.pakv : t.std}</div>
            <div className="ltv">{t.ltv}</div>
            <p>{t.desc}</p>
            <span className="disc">
              {withPakv ? `${t.std} standard` : `${t.pakv} with PAKV`}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
