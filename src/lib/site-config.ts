/**
 * Single source of truth for business facts used across the site.
 *
 * Anything not yet confirmed by Bonnar & Co is left as `null` rather than
 * guessed. Components must handle `null` by omitting that element gracefully
 * (see Footer / Contact page). See /CONFIG-CHECKLIST.md for the full list of
 * what's outstanding and where each value plugs in.
 */

export const site = {
  brandName: "Bonnar & Co",
  legalName: "Bonnar & Co Pty Ltd",
  country: "Australia",
  locale: "en-AU",
  tagline: "Business support and advice, without the noise.",
  description:
    "Bonnar & Co helps sole traders, independent contractors and small business operators manage the practical demands of running a business — backed by purpose-built technology and a discreet, human approach.",

  // Confirmed once the production domain is set. Used for canonical URLs,
  // sitemap and structured data. See CONFIG-CHECKLIST.md.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bonnarco.com.au",

  // Not yet confirmed — keep null until supplied. Footer/Contact render
  // conditionally around these.
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
    abn: null as string | null,
  },

  socials: {
    linkedin: null as string | null,
    instagram: null as string | null,
    facebook: null as string | null,
  },
} as const;

export type OperatingBrand = {
  name: string;
  url: string;
  summary: string;
  description: string;
};

/**
 * Confirmed operating brands within Bonnar & Co. Descriptions are
 * paraphrased from each brand's own public site (fetched directly), kept
 * general and non-specific to protect client discretion, and deliberately
 * exclude any performance figures or claims that belong to that brand
 * alone.
 */
export const operatingBrands: OperatingBrand[] = [
  {
    name: "Arcus",
    url: "https://arcussvcs.com",
    summary: "Scheduling and coordination for contractor teams.",
    description:
      "Arcus brings job scheduling, contractor coordination and client communication into a single workspace, so distributed teams can respond quickly and keep a clear view of operations.",
  },
  {
    name: "LuxCty",
    url: "https://luxcty.com",
    summary: "Professional management and support for independent operators.",
    description:
      "LuxCty provides professional management and support for independent operators, including safety check-ins, day-to-day coordination and confidential long-term planning — built around protecting independence.",
  },
];

export type TechnologyProduct = {
  key: string;
  name: string;
  summary: string;
  description: string;
};

/** Bonnar & Co's own technology, as distinct from the operating brands above. */
export const technologyProducts: TechnologyProduct[] = [
  {
    key: "arcus-communication-system",
    name: "Arcus Communication System",
    summary: "Enquiry handling, client communication and contractor CRM.",
    description:
      "A premium SMS and email enquiry system. Incoming enquiries are brought into one communication workflow, profiled and organised into a dedicated CRM record for the relevant contractor or business — so nothing is left to a crowded inbox or a missed call.",
  },
  {
    key: "luxsafe",
    name: "LuxSafe",
    summary: "Check-ins and operational support for safety concerns.",
    description:
      "A structured check-in system that gives independent operators a reliable safety net — clear protocols, discreet escalation pathways, and operational support when it's needed most.",
  },
  {
    key: "advertising-command-centre",
    name: "Advertising Command Centre",
    summary: "Coordination of online advertising and marketing activity.",
    description:
      "A central point of control for online advertising and marketing activity, so campaigns, listings and promotions stay coordinated and consistent across the platforms that matter.",
  },
];

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Technology", href: "/technology" },
  { label: "Our Brands", href: "/brands" },
  { label: "Contact", href: "/contact" },
];
