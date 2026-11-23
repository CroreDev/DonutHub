"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Menu, X, FileText, Scale, RefreshCcw, Lock } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0c10]/85 border-b border-[#1f242e] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#2e3442] shadow-sm bg-[#12141a] group-hover:border-amber-500/50 transition-colors">
              <Image
                src="/donuthub-logo.jpg"
                alt="DonutHub Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  Donut<span className="text-pink-400">Hub</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/25 rounded-md">
                  Legal
                </span>
              </div>
              <p className="text-xs text-gray-400">Policy & Compliance Centre</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <Link
              href="/"
              className="px-3.5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#1a1e28] rounded-lg transition-all"
            >
              Overview
            </Link>
            <Link
              href="/terms"
              className="px-3.5 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 hover:bg-[#1a1e28] rounded-lg transition-all flex items-center gap-1.5"
            >
              <Scale className="w-4 h-4 text-amber-400" />
              Terms & Conditions
            </Link>
            <Link
              href="/refund-policy"
              className="px-3.5 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 hover:bg-[#1a1e28] rounded-lg transition-all flex items-center gap-1.5"
            >
              <RefreshCcw className="w-4 h-4 text-amber-400" />
              Refund Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="px-3.5 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 hover:bg-[#1a1e28] rounded-lg transition-all flex items-center gap-1.5"
            >
              <Lock className="w-4 h-4 text-amber-400" />
              Privacy Policy
            </Link>
            <div className="h-4 w-px bg-[#262c38] mx-2" />
            <a
              href="https://discord.gg/donuthub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wide bg-[#1e2330] hover:bg-[#282f42] text-amber-300 border border-[#343c50] rounded-lg transition-all"
            >
              Discord Support
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a1e28] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1f242e] bg-[#0d0f15] px-4 pt-2 pb-6 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#181c26]"
          >
            <FileText className="w-4 h-4 text-gray-400" />
            Overview
          </Link>
          <Link
            href="/terms"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#181c26]"
          >
            <Scale className="w-4 h-4 text-amber-400" />
            Terms & Conditions
          </Link>
          <Link
            href="/refund-policy"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#181c26]"
          >
            <RefreshCcw className="w-4 h-4 text-amber-400" />
            Refund & Cancellation Policy
          </Link>
          <Link
            href="/privacy-policy"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#181c26]"
          >
            <Lock className="w-4 h-4 text-amber-400" />
            Privacy Policy
          </Link>
          <a
            href="https://discord.gg/donuthub"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-3 py-2.5 px-4 text-xs font-semibold uppercase tracking-wide bg-[#1e2330] hover:bg-[#282f42] text-amber-300 border border-[#343c50] rounded-lg"
          >
            Discord Support Server
          </a>
        </div>
      )}
    </header>
  );
}
