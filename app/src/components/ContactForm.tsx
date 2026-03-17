"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-(--surface)">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-2xl font-bold text-(--brand-primary)">
          Formularz kontaktowy
        </h2>

        <div className="mt-4 h-1 w-16 rounded-full bg-(--brand-accent)" />

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-8 space-y-6"
          >
            <input
              type="text"
              placeholder="Imię i nazwisko (wymagane)"
              required
              className="w-full rounded-xl border border-(--border) px-4 py-3 outline-none focus:border-(--brand-primary)"
            />

            <input
              type="email"
              placeholder="Adres e-mail (wymagane)"
              required
              className="w-full rounded-xl border border-(--border) px-4 py-3 outline-none focus:border-(--brand-primary)"
            />

            <input
              type="text"
              placeholder="Temat"
              className="w-full rounded-xl border border-(--border) px-4 py-3 outline-none focus:border-(--brand-primary)"
            />

            <textarea
              placeholder="Twoja wiadomość (wymagane)"
              rows={5}
              required
              className="w-full rounded-xl border border-(--border) px-4 py-3 outline-none focus:border-(--brand-primary)"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-(--brand-primary) cursor-pointer px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Wyślij wiadomość
            </button>
          </form>
        ) : (
          <p className="mt-8 text-(--text-muted)">
            Dziękuję za wiadomość. Odpowiedź zostanie udzielona tak szybko, jak to możliwe.
          </p>
        )}
      </div>
    </section>
  );
}