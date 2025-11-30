"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function Availability() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-12">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 w-full max-w-6xl">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {t.availability.backToHome}
          </Link>

          {/* Calendar Embed */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=jens.putzeys%40zekal.eu&src=jens.putzeys%40panenco.com&ctz=Europe%2FBrussels&mode=WEEK&wkst=2&showTitle=0&showTabs=0&showCalendars=0&showPrint=0&showTz=0&bgcolor=%23FFFFFF"
              className="w-full border-0"
              style={{ height: "600px" }}
              title="Availability Calendar"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
