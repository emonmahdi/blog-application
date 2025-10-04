"use client";

import { FormEvent, useState } from "react";
import { FaEnvelopeOpenText, FaPaperPlane, FaCheckCircle, FaUsers, FaEnvelope } from "react-icons/fa";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="bg-indigo-600 max-w-3xl mx-auto rounded-2xl shadow-lg p-8 md:p-12 text-center text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 mb-2">
          <FaEnvelopeOpenText className="text-yellow-300" />
          Subscribe to Our Blog
        </h2>

        <p className="text-gray-200 text-sm md:text-base mb-6">
          Weekly insights, tips, and updates – directly in your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <div className="relative w-full sm:w-3/4">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-full py-3 pl-12 pr-4 text-white placeholder-white focus:outline-none border-1 focus:ring-1 focus:ring-yellow-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-yellow-300 text-indigo-700 font-semibold hover:bg-yellow-400 transition-colors"
          >
            <FaPaperPlane className="inline mr-2" /> Subscribe
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <div className="mt-4 flex items-center justify-center text-green-300 text-sm md:text-base animate-fadeIn">
            <FaCheckCircle className="mr-2" /> You're subscribed! Check your inbox. 📬
          </div>
        )}

        {/* Social Proof */}
        <div className="mt-6 text-gray-300 text-sm">
          <FaUsers className="inline mr-1" /> Join over <strong>12,000</strong> other readers!
        </div>
      </div>
    </section>
  );
}
