"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Reference() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          {t.reference.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              {/* Quote Icon */}
              <svg
                className="w-12 h-12 text-blue-500 mb-6 opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                &ldquo;{t.reference.quote}&rdquo;
              </p>

              {/* Company Logo */}
              <div className="mb-4">
                <Image
                  src="/bruco_logo.jpeg"
                  alt="Bruco"
                  width={200}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>

              {/* Company Name */}
              <p className="text-gray-600 font-medium">{t.reference.company}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
