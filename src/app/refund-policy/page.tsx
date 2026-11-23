import React from "react";
import PolicyLayout from "@/components/PolicyLayout";
import { RefreshCcw, ShieldCheck, AlertCircle, CheckCircle, Clock, XCircle } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy — DonutHub Legal & Policies",
  description: "Official, transparent refund and cancellation policy for the DonutHub community marketplace.",
};

const sections = [
  { id: "r1-conditions", title: "1. General Refund Conditions" },
  { id: "r2-eligibility", title: "2. Eligibility for Refunds" },
  { id: "r3-incorrect-orders", title: "3. Incorrect or Incomplete Orders" },
  { id: "r4-non-delivery", title: "4. Non-Delivery of Eligible Orders" },
  { id: "r5-duplicate-payments", title: "5. Duplicate & Erroneous Payments" },
  { id: "r6-cancellations", title: "6. Order Cancellation Requests" },
  { id: "r7-disputed-transactions", title: "7. Disputed Transactions & Escrow Holds" },
  { id: "r8-timelines", title: "8. Refund Processing Timelines & Methods" },
  { id: "r9-verification", title: "9. Payment & Security Verification" },
  { id: "r10-declined", title: "10. Cases Where Refunds May Be Declined" },
  { id: "r11-how-to-request", title: "11. How to Submit a Refund Request" },
  { id: "r12-support", title: "12. Customer Support & Escalation Contact" },
];

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      subtitle="Clear, fair, and statutory consumer-aligned standards for escrow refunds, transaction cancellations, and order remediation."
      lastUpdated="November 23, 2026"
      category="Consumer Protection & Escrow Protocol"
      sections={sections}
    >
      {/* 1. General Conditions */}
      <section id="r1-conditions" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">1.</span> General Refund Conditions
        </h2>
        <p>
          At <strong>DonutHub</strong>, we are committed to facilitating fair, safe, and transparent digital exchanges. Because peer-to-peer digital item fulfillment occurs through in-game mechanics on community Minecraft servers, special evidentiary rules apply.
        </p>
        <p>
          Unlike physical retail, digital goods cannot easily be &ldquo;returned&rdquo; once received and absorbed into a player&rsquo;s gameplay inventory. Therefore, our refund protocols balance consumer protection under the Indian Consumer Protection Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020 with practical digital delivery realities.
        </p>
        <div className="p-3.5 rounded-lg bg-[#141722] border border-[#23293a] text-xs text-gray-300">
          <strong>Key Distinction:</strong> We strictly distinguish between <em>Unfulfilled / Incomplete Orders</em> (which are 100% eligible for full escrow refunds) and <em>Completed & Verified In-Game Deliveries</em> (where goods were handed over per agreement).
        </div>
      </section>

      {/* 2. Eligibility for Refunds */}
      <section id="r2-eligibility" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">2.</span> Eligibility for Refunds
        </h2>
        <p>
          You are eligible to receive a prompt refund under the following circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Unfulfilled Escrow:</strong> The seller fails to complete the in-game delivery within the agreed-upon fulfillment timeframe (standard window: 24 hours from payment confirmation).</li>
          <li><strong>Seller Inactivity:</strong> The seller does not respond or fails to appear in the coordinated meeting place on the server after buyer funds have been verified.</li>
          <li><strong>Material Discrepancy:</strong> The delivered item substantially deviates from the listing description (e.g., incorrect enchantments, broken durability, missing tiers) and the seller is unable or unwilling to correct the delivery.</li>
          <li><strong>Technical Double-Charge:</strong> Payment processing anomalies where a user was billed more than once for a single order.</li>
        </ul>
      </section>

      {/* 3. Incorrect or Incomplete Orders */}
      <section id="r3-incorrect-orders" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">3.</span> Incorrect or Incomplete Orders
        </h2>
        <p>
          If a seller delivers a partial quantity or an item with differing attributes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The Buyer must immediately notify the ticket moderator before completing the trade ticket.</li>
          <li>The Seller is afforded a 6-hour remediation period to provide the remaining quantity or replace the item with the correct specification.</li>
          <li>If the Seller fails to rectify the order, the Buyer may choose between a proportionate partial refund or a full refund upon returning the partial goods under moderator supervision.</li>
        </ul>
      </section>

      {/* 4. Non-Delivery */}
      <section id="r4-non-delivery" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">4.</span> Non-Delivery of Eligible Orders
        </h2>
        <p>
          If a delivery cannot proceed due to server offline status, scheduled maintenance, or unforeseen server downtime, the delivery window is extended by the duration of the maintenance. If downtime exceeds 24 consecutive hours, the Buyer may unilaterally cancel the order for a 100% refund of deposited escrow funds.
        </p>
      </section>

      {/* 5. Duplicate Payments */}
      <section id="r5-duplicate-payments" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">5.</span> Duplicate and Erroneous Payments
        </h2>
        <p>
          In cases of bank transmission errors, UPI timeouts where double-deduction occurred, or accidental multi-submissions, DonutHub reconciles records against gateway settlement logs. Upon confirmation of the excess debit, 100% of the duplicate amount is refunded without deduction.
        </p>
      </section>

      {/* 6. Cancellation Requests */}
      <section id="r6-cancellations" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">6.</span> Order Cancellation Requests
        </h2>
        <p>
          <strong>Prior to Seller Dispatch:</strong> If a Buyer wishes to cancel an order before the Seller has initiated delivery or joined the server lobby, cancellation is granted in full.
        </p>
        <p>
          <strong>After Handover Preparation:</strong> If the Seller has already gathered custom items or incurred non-recoverable in-game costs specifically reserved for the Buyer, mutual consent or a nominal processing deduction may apply.
        </p>
      </section>

      {/* 7. Disputed Transactions */}
      <section id="r7-disputed-transactions" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">7.</span> Disputed Transactions and Escrow Holds
        </h2>
        <p>
          When an order is flagged for dispute, the escrow status is immediately frozen. Neither party may withdraw funds until a trained staff moderator has evaluated:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-xs text-gray-300">
          <li>Full uncropped video recordings showing the exchange sequence.</li>
          <li>In-game chat logs and server tab verification of active IGNs.</li>
          <li>Ticket correspondence logs within DonutHub.</li>
        </ol>
      </section>

      {/* 8. Timelines */}
      <section id="r8-timelines" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">8.</span> Refund Processing Timelines and Methods
        </h2>
        <p>
          Approved refunds are processed back to the original source of payment:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="p-3 bg-[#11141c] border border-[#212736] rounded-lg">
            <span className="text-xs text-gray-400 block">UPI / Net Banking (India)</span>
            <span className="text-sm font-semibold text-white">24 – 48 Hours</span>
          </div>
          <div className="p-3 bg-[#11141c] border border-[#212736] rounded-lg">
            <span className="text-xs text-gray-400 block">Credit / Debit Cards</span>
            <span className="text-sm font-semibold text-white">3 – 7 Business Days</span>
          </div>
          <div className="p-3 bg-[#11141c] border border-[#212736] rounded-lg">
            <span className="text-xs text-gray-400 block">Crypto / Web3 Rails</span>
            <span className="text-sm font-semibold text-white">1 – 6 Hours</span>
          </div>
        </div>
      </section>

      {/* 9. Payment Verification */}
      <section id="r9-verification" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">9.</span> Payment and Security Verification
        </h2>
        <p>
          To safeguard against unauthorized account takeovers and anti-money laundering (AML) violations, high-value refund requests may require verification confirming that the recipient bank account matches the original sender.
        </p>
      </section>

      {/* 10. Cases Where Declined */}
      <section id="r10-declined" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">10.</span> Cases Where Refunds May Be Declined
        </h2>
        <p>
          DonutHub maintains strict integrity standards. Refund requests will be formally declined in the following scenarios:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-rose-300/90">
          <li><strong>Post-Delivery Buyer&rsquo;s Remorse:</strong> The digital item was successfully handed over as described, and the buyer simply changes their mind later.</li>
          <li><strong>In-Game Loss or Death:</strong> Items lost due to subsequent player vs player (PvP) combat, death in lava, in-game raids, server wipes, or personal negligence after safe delivery.</li>
          <li><strong>Server-Level Punishments:</strong> Loss of access caused by third-party server moderation bans, mutes, or rollbacks imposed on your independent player account.</li>
          <li><strong>Unsubstantiated Claims:</strong> Claims made without required video or screenshot proof when disputing an order.</li>
          <li><strong>Fraudulent Chargebacks:</strong> Initiating external financial disputes while escrow investigation is ongoing.</li>
        </ul>
      </section>

      {/* 11. How to Request */}
      <section id="r11-how-to-request" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">11.</span> How to Submit a Refund Request
        </h2>
        <p>
          To file a refund or cancellation:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Do NOT mark the order as &ldquo;Received&rdquo; or &ldquo;Complete&rdquo; inside the ticket.</li>
          <li>Click the <strong>Request Dispute / Refund</strong> button directly inside your active order channel.</li>
          <li>Submit your Order ID, Transaction Reference, and clear screen recording showing the issue.</li>
          <li>An independent DonutHub moderator will review the submission within 2 to 6 hours.</li>
        </ol>
      </section>

      {/* 12. Support Contact */}
      <section id="r12-support" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">12.</span> Customer Support & Escalation Contact
        </h2>
        <p>
          If your issue is unresolved through the standard ticket queue, escalate directly to our Senior Dispute Reviewers:
        </p>
        <div className="bg-[#121620] p-4 rounded-lg border border-[#232938] text-xs space-y-1.5 font-mono text-gray-300">
          <p><strong>Escalation Desk:</strong> refunds@donuthub.community [Placeholder]</p>
          <p><strong>Discord Support Center:</strong> discord.gg/donuthub (#tickets-legal)</p>
          <p><strong>Operating Window:</strong> 24 Hours / 7 Days a week</p>
        </div>
      </section>
    </PolicyLayout>
  );
}
