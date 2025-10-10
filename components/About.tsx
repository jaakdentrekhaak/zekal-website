"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8">
            {t.about.title}
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-center md:text-left">{t.about.description}</p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mt-8">
              <p className="text-center">{t.about.mission}</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="w-20 h-20 bg-blue-500 rounded-lg transform rotate-6 opacity-10"></div>
            <div className="w-20 h-20 bg-purple-500 rounded-lg transform -rotate-6 opacity-10"></div>
            <div className="w-20 h-20 bg-pink-500 rounded-lg transform rotate-12 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
