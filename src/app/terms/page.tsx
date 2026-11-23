import React from "react";
import PolicyLayout from "@/components/PolicyLayout";
import { ShieldCheck, AlertCircle, FileText, Lock, CheckCircle2, Gavel } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions — DonutHub Legal & Policies",
  description: "Official legal terms and conditions governing the use of DonutHub community marketplace and peer-to-peer exchange services.",
};

const sections = [
  { id: "s1-introduction", title: "1. Introduction & Acceptance of Terms" },
  { id: "s2-eligibility", title: "2. Eligibility & Account Requirements" },
  { id: "s3-services", title: "3. Description of Marketplace Services" },
  { id: "s4-user-responsibilities", title: "4. General User Responsibilities" },
  { id: "s5-buyer-responsibilities", title: "5. Buyer Responsibilities" },
  { id: "s6-seller-responsibilities", title: "6. Seller Responsibilities" },
  { id: "s7-listing-accuracy", title: "7. Marketplace Listings & Accuracy" },
  { id: "s8-order-fulfillment", title: "8. Order Processing & Fulfilment" },
  { id: "s9-payments", title: "9. Payment Handling & Escrow Intermediary" },
  { id: "s10-fraud-prohibited", title: "10. Fraud & Prohibited Activities" },
  { id: "s11-impersonation-security", title: "11. Impersonation & Account Security" },
  { id: "s12-dispute-resolution", title: "12. Dispute Resolution & Arbitration" },
  { id: "s13-suspension-termination", title: "13. Suspension & Termination" },
  { id: "s14-liability", title: "14. Limitation of Liability" },
  { id: "s15-ip", title: "15. Intellectual Property & Non-Affiliation" },
  { id: "s16-third-parties", title: "16. Third-Party Services & Platforms" },
  { id: "s17-changes", title: "17. Modifications & Changes to Terms" },
  { id: "s18-contact", title: "18. Legal Contact & Notices" },
];

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      subtitle="Comprehensive agreement governing rights, duties, transaction escrow workflows, and dispute settlements for the DonutHub independent marketplace."
      lastUpdated="November 23, 2026"
      category="Commercial & User Agreement"
      sections={sections}
    >
      {/* 1. Introduction */}
      <section id="s1-introduction" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">1.</span> Introduction and Acceptance of Terms
        </h2>
        <p>
          Welcome to <strong>DonutHub</strong> (hereinafter referred to as &ldquo;DonutHub&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). DonutHub operates an independent peer-to-peer digital intermediary facilitating community listings, order matching, and escrow communication for participants within the Minecraft multiplayer community (specifically participants engaging in economy and community servers such as DonutSMP).
        </p>
        <p>
          By creating an account, connecting your Discord profile, submitting or accepting a listing, or transacting via DonutHub, you (&ldquo;User&rdquo;, &ldquo;Buyer&rdquo;, or &ldquo;Seller&rdquo;) unreservedly agree to be bound by these Terms & Conditions, our Refund Policy, and Privacy Policy. If you do not agree with any provision herein, you must immediately cease accessing or using our platform.
        </p>
        <div className="p-3.5 rounded-lg bg-[#141722] border border-[#23293a] text-xs text-gray-300">
          <strong>Mandatory Notice:</strong> DonutHub is an independent platform and is NOT affiliated with, sponsored by, or endorsed by Mojang AB, Microsoft Corporation, or DonutSMP. These terms constitute an electronic contract under the Information Technology Act, 2000 (India).
        </div>
      </section>

      {/* 2. Eligibility */}
      <section id="s2-eligibility" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">2.</span> Eligibility and Account Requirements
        </h2>
        <p>
          To participate in marketplace activities on DonutHub:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You must be at least 18 years of age, or have attained the age of majority in your jurisdiction. Users under the legal age of majority must have explicit parental or legal guardian consent to browse or transact.</li>
          <li>You must maintain an active, verified Discord account and valid in-game credentials as required for order validation.</li>
          <li>You must not have been previously suspended, banned, or blacklisted from DonutHub for fraudulent misconduct, chargebacks, or harassment.</li>
          <li>You are solely responsible for all actions taken through your connected account. Shared accounts or delegating account access to unauthorized third parties is strictly prohibited.</li>
        </ul>
      </section>

      {/* 3. Description of Marketplace Services */}
      <section id="s3-services" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">3.</span> Description of Marketplace Services
        </h2>
        <p>
          DonutHub acts solely as an independent online intermediary and venue. We facilitate:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Listing Displays:</strong> Publishing member listings for legitimate in-game items, currency balances, tool sets, and permitted gameplay assets.</li>
          <li><strong>Escrow Coordination:</strong> Structured order coordination tickets where buyers and sellers can exchange delivery confirmation, proof of transfer (screenshots/screen recordings), and release confirmations.</li>
          <li><strong>Dispute Review:</strong> Neutral moderation assistance by appointed staff to investigate reported non-delivery or trade discrepancies.</li>
        </ul>
        <p className="text-xs text-amber-300/90 italic">
          [Notice: DonutHub does not manufacture, take proprietary custody of, or originate Minecraft server software or in-game asset code. All items traded remain subject to third-party game mechanics and server rules.]
        </p>
      </section>

      {/* 4. User Responsibilities */}
      <section id="s4-user-responsibilities" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">4.</span> General User Responsibilities
        </h2>
        <p>
          All users covenant and agree that they will:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide authentic, accurate, and non-deceptive information in all marketplace tickets and listings.</li>
          <li>Comply with all applicable local, national, and international laws, including taxation obligations arising from peer-to-peer commerce.</li>
          <li>Maintain professional, respectful communication with fellow users and moderation staff. Toxic conduct, hate speech, doxxing, or blackmail will result in instant permanent expulsion.</li>
          <li>Not circumvent platform escrow protocols by soliciting direct off-platform payments to avoid platform safeguards.</li>
        </ul>
      </section>

      {/* 5. Buyer Responsibilities */}
      <section id="s5-buyer-responsibilities" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">5.</span> Buyer Responsibilities
        </h2>
        <p>
          As a Buyer on DonutHub, you are strictly required to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Double-check the exact in-game IGN (In-Game Name), coordinate delivery locations, and server realm before initiating transaction tickets.</li>
          <li>Ensure adequate in-game inventory space or ender chest storage capacity prior to scheduled item transfer.</li>
          <li>Record an unbroken, unedited screen capture showing the meeting, item handover, and inventory verification in-game.</li>
          <li>Confirm receipt promptly once delivery is verified, or immediately notify escrow moderators within 60 minutes if an issue arises.</li>
        </ul>
      </section>

      {/* 6. Seller Responsibilities */}
      <section id="s6-seller-responsibilities" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">6.</span> Seller Responsibilities
        </h2>
        <p>
          As a Seller offering items or currency, you warrant and agree:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You hold clean, unobstructed ownership of the advertised item, free from duping glitches, unauthorized server exploits, or stolen property.</li>
          <li>You will deliver the exact specifications (enchantments, durability, tiers, quantities) specified in the agreed listing.</li>
          <li>You must retain unedited full-screen video evidence showing the exchange with the buyer&rsquo;s verified IGN visible in the player tab list.</li>
          <li>Fulfill orders within the agreed delivery window (default maximum 24 hours unless an extension is granted inside the official ticket).</li>
        </ul>
      </section>

      {/* 7. Marketplace Listings */}
      <section id="s7-listing-accuracy" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">7.</span> Marketplace Listings and Accuracy
        </h2>
        <p>
          DonutHub reserves the right to review, edit, or delist any listing that violates community standards or server fair-play policies. Sellers are strictly forbidden from &ldquo;bait-and-switch&rdquo; pricing, misleading enchantment representations, or claiming exclusive administrative endorsements.
        </p>
      </section>

      {/* 8. Order Processing & Fulfilment */}
      <section id="s8-order-fulfillment" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">8.</span> Order Processing and Fulfilment
        </h2>
        <p>
          Orders undergo a three-step fulfillment protocol:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Ticket Generation:</strong> An isolated order channel is generated connecting Buyer, Seller, and automated escrow record logging.</li>
          <li><strong>Payment Authorization:</strong> Buyer funds are cleared through the designated verified channel and locked in escrow pending hand-off.</li>
          <li><strong>Transfer & Release:</strong> In-game delivery occurs under timestamped recording. Upon Buyer approval or moderator validation, funds are released to the Seller.</li>
        </ol>
      </section>

      {/* 9. Payment Handling */}
      <section id="s9-payments" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">9.</span> Payment Handling and Escrow Intermediary
        </h2>
        <p>
          DonutHub operates as an intermediary pursuant to Section 79 of the Information Technology Act, 2000. All monetary settlements are processed through verified third-party payment gateways (UPI, Bank Wire, Crypto, or designated processors). DonutHub does not store raw credit/debit card numbers or confidential banking passwords on its servers.
        </p>
        <div className="p-3.5 bg-[#121620] border-l-4 border-amber-500 rounded text-xs text-gray-300">
          <strong className="text-amber-300">Currency & Taxes:</strong> Users are responsible for paying all applicable taxes (including GST/Income Tax where applicable under Indian tax laws) arising from their peer-to-peer profits or trade activities.
        </div>
      </section>

      {/* 10. Fraud & Prohibited Activities */}
      <section id="s10-fraud-prohibited" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">10.</span> Fraud and Prohibited Activities
        </h2>
        <p>
          The following activities represent zero-tolerance infractions and result in immediate ban, forfeiture of pending escrow proceeds, and referral to law enforcement:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Unauthorized Chargebacks & Friendly Fraud:</strong> Filing payment disputes with banks after successfully receiving digital delivery in-game.</li>
          <li><strong>Duplication & Glitched Items:</strong> Distributing items generated via unauthorized server crashes, packet modifications, or duplication vulnerabilities.</li>
          <li><strong>Phishing & Malware:</strong> Distributing malicious links, fake Discord bots, verification screen grabs, or token stealers.</li>
          <li><strong>Chargeback Scamming:</strong> Exploiting stolen credit cards or third-party bank accounts to fund orders.</li>
        </ul>
      </section>

      {/* 11. Impersonation & Account Security */}
      <section id="s11-impersonation-security" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">11.</span> Impersonation and Account Security
        </h2>
        <p>
          Impersonating DonutHub administrators, middle-men, server owners, or verified community leaders is strictly prohibited. DonutHub staff will NEVER direct message you asking for your Mojang password, Discord token, or personal payment pins. Always verify staff IDs inside our official Discord server.
        </p>
      </section>

      {/* 12. Dispute Resolution */}
      <section id="s12-dispute-resolution" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">12.</span> Dispute Resolution and Arbitration
        </h2>
        <p>
          In the event of a trade dispute:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Both parties must furnish timestamped video proof and logs within 24 hours of ticket flag.</li>
          <li>DonutHub dispute officers conduct forensic verification comparing server logs, IGN timestamps, and delivery evidence. The decision of the dispute officer regarding escrow release is final within the platform ecosystem.</li>
          <li>For formal statutory legal disputes, the parties agree to preliminary amicable mediation. Any formal proceedings shall be subject to the exclusive jurisdiction of the competent courts in <span className="text-amber-300 font-mono">[Designated City, State, India - To be specified upon incorporation]</span>.</li>
        </ul>
      </section>

      {/* 13. Suspension & Termination */}
      <section id="s13-suspension-termination" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">13.</span> Suspension and Termination
        </h2>
        <p>
          DonutHub reserves the right to suspend or permanently terminate access to any user without prior notice in instances of suspected money laundering, fraudulent conduct, repeat non-delivery, or breach of these Terms.
        </p>
      </section>

      {/* 14. Limitation of Liability */}
      <section id="s14-liability" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">14.</span> Limitation of Liability
        </h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DONUTHUB, ITS OPERATORS, MODERATORS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF IN-GAME ASSETS, SERVER ROLLBACKS, THIRD-PARTY ACCOUNT BANS, REPUTATION LOSS, OR FINANCIAL LOSS RESULTING FROM SERVER CRASHES OR MOJANG EULA ENFORCEMENT ACTIONS.
        </p>
        <p>
          IN NO EVENT SHALL DONUTHUB&rsquo;S TOTAL AGGREGATE LIABILITY EXCEED THE TOTAL COMMISSIONS ACTUALLY RECEIVED BY DONUTHUB FROM THE SPECIFIC DISPUTED TRANSACTION AT ISSUE.
        </p>
      </section>

      {/* 15. Intellectual Property */}
      <section id="s15-ip" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">15.</span> Intellectual Property and Non-Affiliation
        </h2>
        <p>
          &ldquo;Minecraft&rdquo; is a registered trademark of Mojang Synergies AB / Microsoft Corporation. DonutHub is not affiliated with Mojang, Microsoft, or DonutSMP. All logos, graphics, and custom branding unique to DonutHub are proprietary intellectual property. Unauthorized reproduction or scraping of website components is strictly prohibited.
        </p>
      </section>

      {/* 16. Third-Party Services */}
      <section id="s16-third-parties" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">16.</span> Third-Party Services and Platforms
        </h2>
        <p>
          Our platform utilizes services provided by Discord Inc., payment providers, and cloud hosting networks. Your use of such features is subject to the respective terms and privacy policies of those independent entities.
        </p>
      </section>

      {/* 17. Changes to Terms */}
      <section id="s17-changes" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">17.</span> Modifications & Changes to These Terms
        </h2>
        <p>
          We reserve the right to revise these Terms periodically to reflect evolving legal standards, game mechanics, or platform enhancements. Revisions become effective immediately upon publication on this website with an updated date stamp.
        </p>
      </section>

      {/* 18. Contact Information */}
      <section id="s18-contact" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">18.</span> Legal Contact & Notices
        </h2>
        <p>
          For legal inquiries, formal notices, or regulatory compliance disclosures, please direct correspondence to:
        </p>
        <div className="bg-[#121620] p-4 rounded-lg border border-[#232938] text-xs space-y-1.5 font-mono text-gray-300">
          <p><strong>Entity Name:</strong> [DonutHub Operational Entity - Pending Registration]</p>
          <p><strong>Grievance Officer:</strong> [Appointed Legal Representative / Grievance Redressal]</p>
          <p><strong>Official Legal Inquiries:</strong> legal@donuthub.community [Placeholder]</p>
          <p><strong>Official Support Discord:</strong> discord.gg/donuthub</p>
          <p><strong>Registered Office / Jurisdiction:</strong> [Business Address to be inserted upon incorporation, India]</p>
        </div>
        <p className="text-[11px] text-amber-400/80">
          * Note: Users are advised that this draft policy is structured in compliance with Indian intermediary rules and should be reviewed alongside local legal counsel once commercial incorporation is completed.
        </p>
      </section>
    </PolicyLayout>
  );
}
