import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";
import Item3DCanvas from "@/components/Item3DCanvas";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <Item3DCanvas type="gem" className="w-40 h-40" />
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20">
            Error 404
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Policy Page Not Found
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            The legal policy, document section, or resource you are looking for does not exist or has been relocated in our latest policy update.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-black transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Policy Center
          </Link>
          <a
            href="https://discord.gg/donuthub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#161a24] hover:bg-[#1f2533] text-gray-200 border border-[#272e3e] transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            Discord Support
          </a>
        </div>
      </div>
    </div>
  );
}
