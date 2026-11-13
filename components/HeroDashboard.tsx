"use client";

import { useState } from "react";

/**
 * Dashboard-FIRST hero visual (AlphaLedger pattern): the loan dashboard is
 * the hero's centrepiece. Carousel dots switch three views of the same
 * example loan — all numbers are the real locked example (0.25 BTC, 40% LTV,
 * 8% APR, $7,235.80 loan, margin call $41,347, liquidation $34,871).
 */
const VIEWS = [
  { id: "health", label: "Loan health" },
  { id: "portfolio", label: "Portfolio" },
  { id: "ltv", label: "LTV meter" },
] as const;

type ViewId = (typeof VIEWS)[number]["id"];

export default function HeroDashboard() {
  const [view, setView] = useState<ViewId>("health");
  return (
    <div className="dash-wrap" data-parallax="-0.04">
      <div className="chip-float chip-btc" data-parallax="-0.14">
        <span className="ic">₿</span>
        <span>
          Bitcoin<small>Collateral accepted</small>
        </span>
      </div>

      {view === "health" && (
        <div className="dash-card dash-hero">
          <div className="dash-top">
            <span className="t">Loan health</span>
            <span className="live-pill">
              <i></i>Example loan
            </span>
          </div>
          <div className="dash-big">
            $7,235.80{" "}
            <span style={{ fontSize: "1rem", color: "var(--hero-ink2)" }}>
              USDT
            </span>
          </div>
          <div className="dash-sub">
            against 0.25 BTC · LTV 40% · 8% APR tier
          </div>
          <div className="meter">
            <span className="meter-pin" style={{ left: "40%" }}></span>
          </div>
          <div className="meter-labels">
            <span>LTV 40%</span>
            <span>Margin call 70%</span>
            <span>Liquidation 83%</span>
          </div>
          <div className="dash-rows">
            <div className="dash-row">
              <span className="k">Margin call price (BTC)</span>
              <b>$41,347</b>
            </div>
            <div className="dash-row">
              <span className="k">Liquidation price (BTC)</span>
              <b>$34,871</b>
            </div>
            <div className="dash-row">
              <span className="k">Collateral custody</span>
              <b>Segregated · never re-lent</b>
            </div>
          </div>
        </div>
      )}

      {view === "portfolio" && (
        <div className="dash-card dash-hero">
          <div className="dash-top">
            <span className="t">Your portfolio</span>
            <span className="live-pill">
              <i></i>Example loan
            </span>
          </div>
          <div className="dash-big">
            $18,089.50{" "}
            <span style={{ fontSize: "1rem", color: "var(--hero-ink2)" }}>
              total collateral
            </span>
          </div>
          <div className="dash-sub">
            0.25 BTC at $72,358 — the only collateral in this example
          </div>
          <div className="dash-rows">
            <div className="dash-row">
              <span className="k">Bitcoin · 0.25 BTC</span>
              <b>$18,089.50</b>
            </div>
            <div className="dash-row">
              <span className="k">Loan drawn (40% LTV)</span>
              <b>$7,235.80</b>
            </div>
            <div className="dash-row">
              <span className="k">Still available to borrow (to 50%)</span>
              <b>$1,808.95</b>
            </div>
            <div className="dash-row">
              <span className="k">Origination fee (2%, one-time)</span>
              <b>$144.72</b>
            </div>
          </div>
        </div>
      )}

      {view === "ltv" && (
        <div className="dash-card dash-hero">
          <div className="dash-top">
            <span className="t">LTV meter</span>
            <span className="live-pill">
              <i></i>Example loan
            </span>
          </div>
          <div className="dash-big">
            40%{" "}
            <span style={{ fontSize: "1rem", color: "var(--hero-ink2)" }}>
              loan-to-value
            </span>
          </div>
          <div className="dash-sub">
            A ~43% price drop would trigger a margin call — wide buffer.
          </div>
          <div className="meter meter-big">
            <span className="meter-pin" style={{ left: "40%" }}></span>
          </div>
          <div className="meter-labels">
            <span>LTV 0%</span>
            <span>Call 70%</span>
            <span>Liq. 83%</span>
            <span>100%</span>
          </div>
          <div className="dash-rows">
            <div className="dash-row">
              <span className="k">Now — 40% LTV</span>
              <b>Healthy</b>
            </div>
            <div className="dash-row">
              <span className="k">Margin call at 70% — BTC $41,347</span>
              <b>Top up or repay</b>
            </div>
            <div className="dash-row">
              <span className="k">Partial liquidation at 83% — BTC $34,871</span>
              <b>Part only, never all</b>
            </div>
          </div>
        </div>
      )}

      <div className="chip-float chip-pakv" data-parallax="0.11">
        <span className="ic">P</span>
        <span>
          PAKV holders<small>25% off interest</small>
        </span>
      </div>

      <div
        className="dash-dots"
        role="tablist"
        aria-label="Dashboard views"
      >
        {VIEWS.map((v) => (
          <button
            key={v.id}
            type="button"
            role="tab"
            aria-selected={view === v.id}
            aria-label={v.label}
            className={view === v.id ? "dot on" : "dot"}
            onClick={() => setView(v.id)}
          />
        ))}
        <span className="dash-dots-label">{VIEWS.find((v) => v.id === view)?.label}</span>
      </div>
    </div>
  );
}
