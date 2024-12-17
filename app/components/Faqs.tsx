"use client";

import React, { useState } from "react";

const faqsget = [
  {
    question: "When will the game be released?",
    answer:
      "We plan to release it as Early Access on December 10th, 2024, at 09:00 PM UTC+0.",
  },
  {
    question: "What is the difference between the demo and the prologue version?",
    answer:
      "There is no difference between the two except that the prologue version has the achievements. Also, the prologue has its own steam page and you can write a steam review to prologue.",
  },
  {
    question: "Does the Demo/Prologue version include multiplayer/co-op feature?",
    answer: "Yes, you are able to experience it with your friends for free.",
  },
  {
    question: "How much will the game cost?",
    answer:
      "The early access launch price of Fast Food Simulator will be $14.99 in the US, with a 10% launch discount bringing it down to $13.49. Regional pricing will lower the price to as low as $7.99 (with the 10% discount, $7.20).",
  },
];

export const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // Ensure only one FAQ stays open at a time
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-cusgray text-white py-12">
      <div 
      id = "faqs"
      className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-8">FAQs</h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqsget.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-green-400 text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {/* Answer (expandable) */}
              {openIndex === index && (
                <p className="mt-3 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
