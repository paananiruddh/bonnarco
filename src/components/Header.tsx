"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { primaryNav } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-sm text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-ink" : "text-stone hover:text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="focus-ring hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-brass-dark lg:inline-flex"
        >
          Make an enquiry
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-5 bg-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-ink/10 bg-paper lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-sm px-1 py-3 text-base font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="focus-ring mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-paper"
            >
              Make an enquiry
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
