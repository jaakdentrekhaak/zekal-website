"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          {t.products.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AcceptOr Card */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-bl-full opacity-10"></div>

            <div className="relative">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="text-3xl font-bold text-primary mb-4">
                {t.products.acceptor.name}
              </h3>

              <p className="text-lg text-secondary mb-6">
                {t.products.acceptor.description}
              </p>

              <ul className="space-y-3">
                {t.products.acceptor.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* InspectOr Card */}
          <div className="group relative bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-bl-full opacity-10"></div>

            <div className="relative">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>

              <h3 className="text-3xl font-bold text-primary mb-4">
                {t.products.inspector.name}
              </h3>

              <p className="text-lg text-secondary mb-6">
                {t.products.inspector.description}
              </p>

              <ul className="space-y-3">
                {t.products.inspector.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
