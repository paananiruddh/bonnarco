import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { site, primaryNav, operatingBrands } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  const hasContactDetails =
    site.contact.email || site.contact.phone || site.contact.address;

  return (
    <footer className="bg-ink text-paper">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="paper" />
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              {site.tagline} Business advice, operational support and
              purpose-built technology for sole traders, independent
              contractors and small business operators across Australia.
            </p>
          </div>

          <div>
            <p className="eyebrow text-brass-light">Site</p>
            <ul className="mt-4 space-y-2.5">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring text-sm text-paper/75 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-brass-light">Our brands</p>
            <ul className="mt-4 space-y-2.5">
              {operatingBrands.map((brand) => (
                <li key={brand.name}>
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring text-sm text-paper/75 hover:text-paper"
                  >
                    {brand.name} ↗
                  </a>
                </li>
              ))}
            </ul>

            {hasContactDetails ? (
              <div className="mt-6 space-y-1 text-sm text-paper/75">
                {site.contact.email ? <p>{site.contact.email}</p> : null}
                {site.contact.phone ? <p>{site.contact.phone}</p> : null}
                {site.contact.address ? <p>{site.contact.address}</p> : null}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-14 border-t border-paper/15 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-paper/55">
            Bonnar &amp; Co provides business and administrative support, not
            clinical or emergency care. If you or someone you know is
            struggling, Lifeline (13 11 14) and Beyond Blue (1300 22 4636)
            are free, confidential Australian support lines available any
            time. In an emergency, call 000.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-paper/15 pt-8 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
            {site.contact.abn ? ` ABN ${site.contact.abn}.` : ""}
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="focus-ring hover:text-paper">
              Privacy Policy
            </Link>
            <Link href="/terms" className="focus-ring hover:text-paper">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
