import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldAlert, ExternalLink, HelpCircle, HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f242e] bg-[#08090d] text-gray-400 text-sm mt-20 no-print">
      {/* Disclaimer Banner */}
      <div className="border-b border-[#181c24] bg-[#0c0e14] py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div className="flex items-center gap-2 text-amber-400/90 font-medium">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
            <span>Independent Community Disclosure:</span>
          </div>
          <p className="text-gray-400 text-center md:text-left leading-relaxed">
            DonutHub is an independent community marketplace and is not endorsed by, directly affiliated with, maintained, authorized, or sponsored by Mojang AB, Microsoft Corporation, or DonutSMP. All Minecraft and server-related trademarks belong to their respective owners.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#2a303e] bg-[#12141a]">
                <Image
                  src="/donuthub-logo.jpg"
                  alt="DonutHub Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Donut<span className="text-pink-400">Hub</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Independent Minecraft Community Marketplace. Providing structured peer-to-peer escrow facilitation, listing compliance, and dispute resolution mechanisms.
            </p>
            <div className="text-[11px] text-gray-400 border border-[#242936] bg-[#0f1218] p-2.5 rounded-lg">
              <span className="font-semibold text-gray-300">Statutory Notice:</span> Consumer protections under the Consumer Protection Act, 2019 and DPDP Act, 2023 apply.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Policy Centre
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Policy Centre Overview
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-amber-400 transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy (DPDPA 2023)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Escrow */}
          <div>
            <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Trust & Community
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://discord.gg/donuthub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  Official Discord Server
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/donuthub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  Open Support Ticket
                  <HelpCircle className="w-3 h-3 text-gray-400" />
                </a>
              </li>
              <li>
                <Link href="/terms#escrow" className="hover:text-amber-400 transition-colors">
                  Escrow Fulfilment Verification
                </Link>
              </li>
              <li>
                <Link href="/refund-policy#fraud" className="hover:text-amber-400 transition-colors">
                  Anti-Fraud & Chargeback Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Business & Legal Representative */}
          <div>
            <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Entity Information
            </h3>
            <div className="space-y-2 text-xs text-gray-400">
              <p>
                <strong className="text-gray-300">Operating Entity:</strong>{" "}
                <span className="text-amber-300/80">[Entity Name Pending Registration / Unincorporated Community Guild]</span>
              </p>
              <p>
                <strong className="text-gray-300">Jurisdiction:</strong>{" "}
                Republic of India (Subject to local commercial regulations)
              </p>
              <p>
                <strong className="text-gray-300">Official Inquiries:</strong>{" "}
                <span className="text-gray-300">support@donuthub.community</span> <span className="text-[10px] text-gray-400">(placeholder)</span>
              </p>
              <p>
                <strong className="text-gray-300">Dispute Officer:</strong>{" "}
                Designated Ticket Admin via Discord Support
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a1f2c] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            Copyright © 2026 <span className="text-gray-300 font-medium">DonutHub</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">Last Reviewed: November 2026</span>
            <span className="text-[#2c3344]">•</span>
            <Link href="/terms" className="hover:text-gray-300">Terms</Link>
            <Link href="/refund-policy" className="hover:text-gray-300">Refunds</Link>
            <Link href="/privacy-policy" className="hover:text-gray-300">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
