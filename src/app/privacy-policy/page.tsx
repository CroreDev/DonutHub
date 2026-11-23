import React from "react";
import PolicyLayout from "@/components/PolicyLayout";
import { Lock, ShieldCheck, Database, Eye, UserCheck, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — DonutHub Legal & Policies",
  description: "Official privacy policy for DonutHub, drafted in accordance with the Digital Personal Data Protection Act, 2023 (India) and international standards.",
};

const sections = [
  { id: "p1-collection", title: "1. Information We Collect" },
  { id: "p2-discord-info", title: "2. Discord Account Information" },
  { id: "p3-transaction-info", title: "3. Order & Transaction Data" },
  { id: "p4-support-tickets", title: "4. Information Submitted in Support Tickets" },
  { id: "p5-usage", title: "5. How We Use Your Information" },
  { id: "p6-storage-security", title: "6. Data Storage & Security Measures" },
  { id: "p7-sharing", title: "7. Data Sharing & Third-Party Processors" },
  { id: "p8-cookies", title: "8. Cookies & Anonymous Analytics" },
  { id: "p9-retention", title: "9. Data Retention & Archival Policies" },
  { id: "p10-rights-dpdp", title: "10. User Privacy Rights (DPDP Act, 2023)" },
  { id: "p11-deletion", title: "11. Account & Data Deletion Procedures" },
  { id: "p12-children", title: "12. Children's Privacy Protections" },
  { id: "p13-changes", title: "13. Modifications to This Policy" },
  { id: "p14-dpo-contact", title: "14. Grievance Officer & Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="Comprehensive data protection and user privacy declaration under the Indian Digital Personal Data Protection Act (DPDP Act, 2023) and global information security protocols."
      lastUpdated="November 23, 2026"
      category="Data Protection & Compliance"
      sections={sections}
    >
      {/* 1. Information We Collect */}
      <section id="p1-collection" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">1.</span> Information We Collect
        </h2>
        <p>
          DonutHub is designed with privacy-by-default and data-minimization principles. As a digital marketplace intermediary facilitating Minecraft community interactions, we collect only the minimal personal data strictly necessary to fulfill transactions, safeguard against fraud, and comply with applicable statutory duties under the Digital Personal Data Protection Act, 2023 (DPDP Act).
        </p>
      </section>

      {/* 2. Discord Account Information */}
      <section id="p2-discord-info" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">2.</span> Discord Account Information
        </h2>
        <p>
          When you authenticate or access DonutHub via Discord OAuth or our community server, we may collect:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Unique Discord Snowflake ID:</strong> Used to associate your order history and prevent impersonation.</li>
          <li><strong>Discord Username and Discriminator/Handle:</strong> Used to render ticket names and communicate status updates.</li>
          <li><strong>Guild Membership Status:</strong> Verifying if you are a current member of the DonutHub community server.</li>
        </ul>
        <p className="text-xs text-gray-400">
          We never access your private direct messages, your Discord passwords, your payment methods stored in Discord, or friends lists.
        </p>
      </section>

      {/* 3. Transaction Data */}
      <section id="p3-transaction-info" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">3.</span> Order & Transaction Information
        </h2>
        <p>
          When you place, accept, or finalize an order:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Minecraft In-Game Name (IGN):</strong> Used exclusively to arrange item coordinates and confirm in-game transfer.</li>
          <li><strong>Transaction Metadata:</strong> Order timestamps, items listed, agreed exchange values, and escrow status.</li>
          <li><strong>Payment References:</strong> Transaction hash, UPI Reference / UTR Number, or payment gateway settlement ID. (We do not store complete bank account numbers or CVVs).</li>
        </ul>
      </section>

      {/* 4. Support Tickets */}
      <section id="p4-support-tickets" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">4.</span> Information Submitted Through Support Tickets
        </h2>
        <p>
          During the course of order fulfillment or dispute remediation, users may submit:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Video recordings and screen captures of in-game trades.</li>
          <li>Payment receipts or bank statement debit screenshots demonstrating clearing of funds.</li>
          <li>Written statements explaining trade discrepancies.</li>
        </ul>
      </section>

      {/* 5. How Information is Used */}
      <section id="p5-usage" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">5.</span> How Information is Used
        </h2>
        <p>
          Collected data is processed for specific lawful purposes:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Order Facilitation:</strong> Synchronizing buyer and seller in-game meeting locations and releasing escrow.</li>
          <li><strong>Dispute Adjudication:</strong> Comparing submission proofs to protect legitimate users from scam artists.</li>
          <li><strong>Fraud Mitigation:</strong> Maintaining an internal blacklist of malicious chargeback offenders, token stealers, and duplicate bot accounts.</li>
          <li><strong>Regulatory Compliance:</strong> Complying with Section 69A of the IT Act and valid requests from Indian law enforcement agencies.</li>
        </ol>
      </section>

      {/* 6. Storage & Security */}
      <section id="p6-storage-security" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">6.</span> Data Storage and Security Measures
        </h2>
        <p>
          We employ enterprise-grade technical and organizational safeguards:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>All web sessions are encrypted in-transit via TLS 1.3 cryptographic protocols.</li>
          <li>Internal logs and ticket databases are restricted strictly to authorized moderators via role-based access control (RBAC) with mandatory Two-Factor Authentication (2FA).</li>
          <li>Servers and database backups are hosted in secure, certified data facilities with periodic vulnerability assessments.</li>
        </ul>
      </section>

      {/* 7. Sharing */}
      <section id="p7-sharing" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">7.</span> Data Sharing and Third-Party Processors
        </h2>
        <p>
          We do NOT sell, rent, or trade your personal data to marketing brokers or third-party advertisers. Data is shared exclusively with:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Payment Processors & Escrow Gateways:</strong> Necessary to verify that funds were legitimately received.</li>
          <li><strong>Infrastructure Providers:</strong> Cloud hosting, CDN, and DDoS protection networks (e.g., Cloudflare, AWS, or Vercel).</li>
          <li><strong>Law Enforcement & Judiciary:</strong> Only when presented with a valid statutory warrant, court order, or official directive issued under Indian law.</li>
        </ul>
      </section>

      {/* 8. Cookies */}
      <section id="p8-cookies" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">8.</span> Cookies and Anonymous Analytics
        </h2>
        <p>
          Our legal and policy portal utilizes strictly necessary session cookies for security validation and CDN load balancing. We do not deploy cross-site tracking cookies or surveillance advertising pixels.
        </p>
      </section>

      {/* 9. Retention */}
      <section id="p9-retention" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">9.</span> Data Retention and Archival
        </h2>
        <p>
          Transaction records and escrow ticket logs are retained for a minimum period of 180 days to accommodate potential banking chargeback windows and dispute audits. Following this period, dispute videos and redundant chat attachments are systematically purged or anonymized unless required for active legal inquiries.
        </p>
      </section>

      {/* 10. DPDP Act Rights */}
      <section id="p10-rights-dpdp" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">10.</span> User Privacy Rights (DPDP Act, 2023)
        </h2>
        <p>
          In accordance with the Digital Personal Data Protection Act, 2023 (India), users (&ldquo;Data Principals&rdquo;) enjoy the following statutory rights:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
          <div className="p-3 bg-[#11141c] border border-[#222838] rounded-lg">
            <span className="font-semibold text-white text-xs block mb-1">Right to Access</span>
            <span className="text-xs text-gray-400">Request a summary of personal data held about you and how it is processed.</span>
          </div>
          <div className="p-3 bg-[#11141c] border border-[#222838] rounded-lg">
            <span className="font-semibold text-white text-xs block mb-1">Right to Correction & Erasure</span>
            <span className="text-xs text-gray-400">Request rectification of inaccurate data or deletion of unneeded personal records.</span>
          </div>
          <div className="p-3 bg-[#11141c] border border-[#222838] rounded-lg">
            <span className="font-semibold text-white text-xs block mb-1">Right of Grievance Redressal</span>
            <span className="text-xs text-gray-400">Direct access to a designated Grievance Officer for unresolved privacy concerns.</span>
          </div>
          <div className="p-3 bg-[#11141c] border border-[#222838] rounded-lg">
            <span className="font-semibold text-white text-xs block mb-1">Right to Nominate</span>
            <span className="text-xs text-gray-400">Nominate an individual to exercise your rights in the event of death or incapacity.</span>
          </div>
        </div>
      </section>

      {/* 11. Deletion Requests */}
      <section id="p11-deletion" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">11.</span> Account & Data Deletion Procedures
        </h2>
        <p>
          You may request total deletion of your platform profile by opening a support ticket in our Discord server with the command <code>/delete-my-data</code> or by emailing our privacy desk. Upon verification, non-statutory records will be scrubbed within 30 days.
        </p>
      </section>

      {/* 12. Children's Privacy */}
      <section id="p12-children" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">12.</span> Children&rsquo;s Privacy Protections
        </h2>
        <p>
          DonutHub is not directed toward individuals under the age of 18 without verifiable parental consent. In accordance with Section 9 of the DPDP Act, 2023, we do not undertake behavioral tracking, targeted advertisements, or harmful data processing of minors. If you believe a child has provided us personal data without guardian authorization, please notify our Grievance Officer immediately.
        </p>
      </section>

      {/* 13. Changes */}
      <section id="p13-changes" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">13.</span> Changes to This Privacy Policy
        </h2>
        <p>
          We periodically review this policy to align with statutory notifications issued by the Data Protection Board of India. Changes will be posted here with a renewed revision timestamp.
        </p>
      </section>

      {/* 14. Grievance Officer Contact */}
      <section id="p14-dpo-contact" className="space-y-4 pt-4 border-t border-[#1e2330]">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">14.</span> Grievance Officer & Contact Information
        </h2>
        <p>
          In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the DPDP Act, 2023, the contact details of our Grievance Officer are:
        </p>
        <div className="bg-[#121620] p-4 rounded-lg border border-[#232938] text-xs space-y-1.5 font-mono text-gray-300">
          <p><strong>Designation:</strong> Data Protection & Grievance Officer</p>
          <p><strong>Operating Entity:</strong> [DonutHub Operational Entity - Pending Incorporation]</p>
          <p><strong>Grievance Email:</strong> privacy@donuthub.community [Placeholder]</p>
          <p><strong>Discord Ticket Desk:</strong> discord.gg/donuthub (#privacy-escalations)</p>
          <p><strong>Physical Address:</strong> [Registered Corporate Office, India - Placeholder]</p>
          <p><strong>Response Timeline:</strong> Acknowledgement within 24 hours; Redressal within 15 calendar days.</p>
        </div>
      </section>
    </PolicyLayout>
  );
}
