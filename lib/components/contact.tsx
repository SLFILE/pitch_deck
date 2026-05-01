"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-500/60 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/50">
          <FaCheck />
        </div>
        <h3 className="text-xl font-bold text-white">Transmission Sent</h3>
        <p className="text-gray-400">We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Contact Us
        </h2>
        <p className="text-sm text-gray-400">Enter your details below.</p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-xs uppercase tracking-widest text-gray-500 font-bold"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="pilot@starship.com"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-widest text-gray-500 font-bold"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="State your purpose..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
