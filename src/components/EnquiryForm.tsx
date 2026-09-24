"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const ENQUIRY_AREAS = [
  "General enquiry",
  "Business advice & planning",
  "Administration & operational support",
  "Client enquiry & communication",
  "Advertising & marketing coordination",
  "Lifestyle & wellbeing support",
  "Our brands (Arcus)",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      businessName: String(data.get("businessName") ?? ""),
      area: String(data.get("area") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({ ok: false }));

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(
          result.error ?? "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please check your connection and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brass/25 bg-sand/60 p-10 text-center">
        <p className="font-display text-xl font-medium text-ink">
          Thanks — that&rsquo;s with us.
        </p>
        <p className="mt-2 text-stone">
          We&rsquo;ve received your enquiry and the right person will be in
          touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Leave this field blank</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field
          label="Business or trading name"
          name="businessName"
          autoComplete="organization"
        />
      </div>

      <div>
        <label htmlFor="area" className="block text-sm font-medium text-ink-soft">
          Area of enquiry
        </label>
        <select
          id="area"
          name="area"
          defaultValue={ENQUIRY_AREAS[0]}
          className="focus-ring mt-2 w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-ink"
        >
          {ENQUIRY_AREAS.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-soft">
          Tell us a bit about what&rsquo;s going on{" "}
          <span className="text-brass-dark" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          className="focus-ring mt-2 w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-ink"
        />
      </div>

      {status === "error" && errorMessage ? (
        <p role="alert" className="text-sm font-medium text-clay">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-brass-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>

      <p className="text-xs text-stone">
        By submitting, you agree to be contacted about your enquiry. See
        our{" "}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-ink">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-soft">
        {label}{" "}
        {required ? (
          <span className="text-brass-dark" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="focus-ring mt-2 w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-ink"
      />
    </div>
  );
}
