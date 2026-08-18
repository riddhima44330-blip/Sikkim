"use client";

import { useState } from "react";

const TOPICS = ["A travel question", "A correction", "Sharing my journey", "Media & press", "Something else"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-[#28131F]/50 p-8 text-center">
        <p className="font-title text-2xl text-gold-soft">Thank you.</p>
        <p className="mt-3 font-subtitle text-sm italic text-ivory-dim/80">
          Your message is on its way up the mountain. We reply within a few days.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;
        window.location.href = `mailto:hello@sikkim-tourism.in?subject=${encodeURIComponent(
          `[SIKKIM] ${topic}`,
        )}&body=${encodeURIComponent(body)}`;
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-gold-soft/70">Your name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gold/25 bg-black/30 px-4 py-3 font-body text-sm text-ivory placeholder-ivory-dim/40 outline-none transition-colors focus:border-gold/70"
            placeholder="Tashi Wangchuk"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-gold-soft/70">Your email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gold/25 bg-black/30 px-4 py-3 font-body text-sm text-ivory placeholder-ivory-dim/40 outline-none transition-colors focus:border-gold/70"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-gold-soft/70">Topic</span>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full rounded-xl border border-gold/25 bg-black/30 px-4 py-3 font-body text-sm text-ivory outline-none transition-colors focus:border-gold/70"
        >
          {TOPICS.map((t) => (
            <option key={t} value={t} className="bg-[#180C14]">
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-gold-soft/70">Message</span>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-gold/25 bg-black/30 px-4 py-3 font-body text-sm text-ivory placeholder-ivory-dim/40 outline-none transition-colors focus:border-gold/70"
          placeholder="Tell us about your question or your journey…"
        />
      </label>

      <button type="submit" className="btn-gold w-full">
        Send to the monastery →
      </button>
      <p className="text-center text-xs text-ivory-dim/50">
        This opens your email app with the message ready to send.
      </p>
    </form>
  );
}

