import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  RefreshCcw,
  Lock,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Clock,
  ExternalLink,
  Coins,
  Sparkles,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Item3DCanvas from "@/components/Item3DCanvas";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161a24] border border-[#272e3f] text-xs font-medium text-amber-400">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Official Trust & Governance Portal • Version 2026.1</span>
            </div>

            {/* Official Logo & Brand Header */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-500/30 bg-[#12141a] shadow-xl shadow-amber-500/5 group hover:border-amber-400 transition-all">
                <Image
                  src="/donuthub-logo.jpg"
                  alt="DonutHub Official Logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                  Donut<span className="text-pink-400">Hub</span>
                </h1>
                <p className="text-xs uppercase tracking-widest text-amber-400/90 font-semibold mt-1">
                  Legal & Policies Center
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to the official legal and policy repository for <strong>DonutHub</strong>. We provide a transparent, orderly, and statutory-compliant framework for peer-to-peer Minecraft economy transactions, item escrow facilitation, and member dispute resolution.
            </p>

            {/* Disclaimers & Independent Status */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-400">
              <span className="inline-flex items-center gap-1.5 bg-[#12151e] border border-[#232938] px-3 py-1.5 rounded-md">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Last Updated: November 23, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#12151e] border border-[#232938] px-3 py-1.5 rounded-md">
                <FileCheck2 className="w-3.5 h-3.5 text-pink-400" />
                DPDP Act 2023 & Consumer Protection 2019
              </span>
            </div>
          </div>

          {/* Right Column: 3D Interactive Items & Visual Proof */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#141722] to-[#0d0f16] border border-[#23293a] p-6 shadow-2xl overflow-hidden group">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between text-xs text-gray-400 border-b border-[#202636] pb-3 mb-2">
                <span className="flex items-center gap-1.5 font-medium text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  Interactive 3D Marketplace Asset
                </span>
                <span className="text-[11px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                  P2P Escrow
                </span>
              </div>

              {/* 3D Canvas with Donut */}
              <div className="relative flex items-center justify-center py-4">
                <Item3DCanvas type="donut" className="w-56 h-56" />
              </div>

              <div className="text-center space-y-1.5 pt-2 border-t border-[#1d2230]">
                <h3 className="text-sm font-semibold text-white">
                  Gold Glazed Donut SMP Token
                </h3>
                <p className="text-xs text-gray-400 leading-normal">
                  Hover to rotate 3D model. Every high-tier in-game trade on DonutHub is protected by recorded escrow and dispute mediation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Prominent Document Cards */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Governance & Legal Documents
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Explore our foundational policies regulating trading conduct, consumer rights, escrow workflows, and data protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Terms & Conditions */}
          <Link
            href="/terms"
            className="group relative flex flex-col justify-between rounded-2xl bg-[#0f121a] hover:bg-[#131722] border border-[#1f2533] hover:border-amber-500/50 p-7 transition-all duration-300 shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scale className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  Primary Agreement
                </span>
                <span className="text-[11px] text-gray-400">• 18 Sections</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                Terms & Conditions
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Comprehensive platform rules governing user eligibility, buyer & seller duties, peer-to-peer escrow protocols, prohibited conduct, and dispute arbitration.
              </p>
            </div>

            <div className="flex items-center text-xs font-semibold text-amber-400 gap-1.5 pt-4 border-t border-[#1a1f2b]">
              <span>Read Full Terms</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Refund & Cancellation Policy */}
          <Link
            href="/refund-policy"
            className="group relative flex flex-col justify-between rounded-2xl bg-[#0f121a] hover:bg-[#131722] border border-[#1f2533] hover:border-amber-500/50 p-7 transition-all duration-300 shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RefreshCcw className="w-6 h-6 text-pink-400" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-pink-400">
                  Consumer Protection
                </span>
                <span className="text-[11px] text-gray-400">• 12 Sections</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors mb-3">
                Refund & Cancellation Policy
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Fair, transparent standards for escrow cancellations, incomplete or mismatched orders, non-delivery remediation, timelines, and declined refund scenarios.
              </p>
            </div>

            <div className="flex items-center text-xs font-semibold text-pink-400 gap-1.5 pt-4 border-t border-[#1a1f2b]">
              <span>View Refund Standards</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Privacy Policy */}
          <Link
            href="/privacy-policy"
            className="group relative flex flex-col justify-between rounded-2xl bg-[#0f121a] hover:bg-[#131722] border border-[#1f2533] hover:border-amber-500/50 p-7 transition-all duration-300 shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                  DPDP Act (India) 2023
                </span>
                <span className="text-[11px] text-gray-400">• 14 Sections</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                Privacy Policy
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Detailed data collection, Discord account handling, encryption standards, statutory rights under India&rsquo;s DPDP Act, and Grievance Officer details.
              </p>
            </div>

            <div className="flex items-center text-xs font-semibold text-blue-400 gap-1.5 pt-4 border-t border-[#1a1f2b]">
              <span>Review Privacy Rights</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Interactive 3D Showcase & Trust Highlights */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#0c0e15] border border-[#1e2330] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300">
                <Coins className="w-3.5 h-3.5" />
                Secured Community Marketplace Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Peer-to-Peer Escrow Protection You Can Trust
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                DonutHub was constructed specifically to address the risks of in-game peer trading in Minecraft economy communities like DonutSMP. Every transaction is reinforced by a tri-party protocol:
              </p>
              
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Proof-of-Delivery Recording:</strong> Sellers and buyers are required to capture unedited screen evidence verifying the physical exchange.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Escrow Safeguards:</strong> Funds are only disbursed once the buyer inspects and approves item enchantments and durability in-game.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Anti-Chargeback Defense:</strong> Strict logging prevents fraudulent chargeback scams through banking records and Discord validation.
                  </div>
                </li>
              </ul>
            </div>

            {/* Second 3D Item (Totem of Undying) */}
            <div className="flex flex-col items-center justify-center bg-[#10131c] rounded-2xl border border-[#232938] p-6 text-center">
              <div className="text-xs font-mono text-amber-400 mb-2">3D ASSET INSPECTION</div>
              <Item3DCanvas type="totem" className="w-56 h-56" />
              <div className="mt-3">
                <h4 className="text-sm font-bold text-white">Totem of Undying (Custom Asset Tier)</h4>
                <p className="text-xs text-gray-400 mt-1 max-w-xs">
                  All high-value items, armor sets, and currency balances must comply with server fair-play rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Transparency & Placeholder Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl bg-[#0e1017] border border-[#202533] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Legal & Statutory Compliance Disclosure
            </h3>
            <p className="text-xs text-gray-400 max-w-2xl leading-relaxed">
              DonutHub policies are formulated to adhere to Indian intermediary standards, e-commerce guidelines, and personal data security frameworks. Institutional details are marked as transparent placeholders pending formal corporate registration.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/terms#s18-contact"
              className="px-4 py-2 text-xs font-semibold text-gray-200 hover:text-white bg-[#181d28] hover:bg-[#202636] border border-[#2b3346] rounded-lg transition-colors"
            >
              Entity Information
            </Link>
            <a
              href="https://discord.gg/donuthub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-amber-300 hover:text-amber-200 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 rounded-lg transition-colors flex items-center gap-1.5"
            >
              Support Desk
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
