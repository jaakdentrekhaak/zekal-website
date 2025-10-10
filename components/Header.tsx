"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "nl", label: "NL", flag: "🇳🇱" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "en", label: "EN", flag: "🇬🇧" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Zekal"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  language === lang.code
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-1">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
