"use client";

import React, { useState } from "react";
import { Printer, Check, Copy, AlertTriangle, ShieldCheck } from "lucide-react";

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  category: string;
  sections: { id: string; title: string }[];
  children: React.ReactNode;
}

export default function PolicyLayout({
  title,
  subtitle,
  lastUpdated,
  category,
  sections,
  children,
}: PolicyLayoutProps) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header bar */}
      <div className="mb-10 pb-8 border-b border-[#222735]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {category}
            </span>
            <span className="text-xs text-gray-400">Official Policy Document</span>
          </div>
          
          <div className="flex items-center gap-2.5 no-print">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-[#151922] hover:bg-[#1d2230] border border-[#262c3c] rounded-md transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Link Copied" : "Share"}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Print Document
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          {title}
        </h1>
        <p className="text-gray-400 text-base max-w-3xl leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-gray-400">
          <div>
            <span className="text-gray-400">Version: </span>
            <span className="text-gray-200 font-medium">2026.1 (Production)</span>
          </div>
          <div>
            <span className="text-gray-400">Effective Date: </span>
            <span className="text-gray-200 font-medium">{lastUpdated}</span>
          </div>
          <div>
            <span className="text-gray-400">Jurisdiction: </span>
            <span className="text-gray-200 font-medium">India & Global Standards</span>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-6 p-4 rounded-lg bg-[#141822] border border-[#272e40] flex items-start gap-3 text-xs text-gray-300">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-amber-300">Notice to Participants:</strong> DonutHub is an independent intermediary facilitating peer-to-peer digital transactions for community members. These provisions are formulated under the Information Technology Act, 2000, Indian Consumer Protection Act, 2019, and the Digital Personal Data Protection Act, 2023. Certain provisions contain institutional placeholders pending formal registration.
          </p>
        </div>
      </div>

      {/* Main Grid: Sidebar TOC + Policy Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Table of Contents - Sticky Desktop Sidebar */}
        <aside className="lg:col-span-4 no-print">
          <div className="sticky top-28 rounded-xl bg-[#0e1118] border border-[#1e2330] p-5">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1b202c]">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Table of Contents
              </span>
              <span className="text-[11px] text-gray-400">{sections.length} Sections</span>
            </div>
            <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
              {sections.map((section, idx) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-start gap-2.5 py-1.5 px-2.5 rounded-lg text-xs text-gray-400 hover:text-amber-300 hover:bg-[#151924] transition-all"
                >
                  <span className="text-[10px] text-gray-400 font-mono mt-0.5 group-hover:text-amber-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="line-clamp-1 leading-snug">{section.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Body Content */}
        <main className="lg:col-span-8 print-content">
          <div className="prose prose-invert max-w-none space-y-12 text-gray-300 text-sm leading-relaxed">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
