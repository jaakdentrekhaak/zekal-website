"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Zekal"
            width={180}
            height={60}
            className="h-12 w-auto filter brightness-0 invert"
          />

          {/* Company Info */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-300">{t.footer.vat}</p>
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gray-600"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
