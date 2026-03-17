"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const successMessage = "Dziękujemy! Wiadomość została wysłana.";
  const errorMessage = "Nie udało się wysłać wiadomości. Spróbuj ponownie.";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!email.trim() || !email.includes("@")) return false;
    if (!subject.trim()) return false;
    if (!message.trim()) return false;
    if (!consent) return false;
    return true;
  }, [name, email, subject, message, consent]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid || status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          consent,
          website,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setConsent(false);
      setWebsite("");
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-(--surface)">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-2xl font-bold text-(--brand-primary)">
          Formularz kontaktowy
        </h2>

        <div className="mt-4 h-1 w-16 rounded-full bg-(--brand-accent)" />
          <form
            className="mt-8 space-y-6" onSubmit={onSubmit} noValidate
          >
             <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <input
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Imię i nazwisko (wymagane)"
              required
              className="w-full rounded-xl border border-(--border) px-4 py-3 outline-none focus:border-(--brand-primary)"
            />

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adres e-mail (wymagane)"
              required
              className="w-full rounded-xl border border-(--border) px-4 py-3 outline-none focus:border-(--brand-primary)"
            />

            <input
              id="subject"
              name="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Temat"
              className="w-full rounded-xl border border-(--border) px-4 py-3 outline-none focus:border-(--brand-primary)"
            />

            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Twoja wiadomość (wymagane)"
              rows={5}
              required
              className="w-full rounded-xl border border-(--border) px-4 py-3 outline-none focus:border-(--brand-primary)"
            />

            <div className="pt-2">
              <label className="flex items-start gap-3 text-sm text-gray-700">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border"
                />
                <span>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych wysłanych za pomocą
                  formularza kontaktowego<span className="text-gray-500">*</span>.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!isValid || status === "sending"}
              className="w-full rounded-full bg-(--brand-primary) cursor-pointer px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
            </button>

            <p className="text-xs text-gray-500">
              Pola oznaczone <span className="text-gray-500">*</span> są wymagane.
            </p>

            {status === "success" && (
              <p className="text-sm font-semibold text-(--brand-primary)">
                {successMessage}
              </p>
            )}

            {status === "error" && (
              <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
            )}
          </form>
      </div>
    </section>
  );
}