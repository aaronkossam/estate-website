export const brand = {
  name: "Karon Estate",
  full: "Karon Estate Enterprice",
  tagline: "Enterprice • Ghana",
  registration: "BN415671026",
  registeredOn: "15 October 2026",
};

// Add the real contact details here. Empty values are hidden in the footer.
export const contact = {
  email: "makonadu1997@gmail.com",
  phone: "",
  // International WhatsApp digits, without + or spaces; awaiting number confirmation.
  whatsapp: "",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Karon", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const pillars = [
  {
    title: "Real Estate & Land Sales",
    subtitle: "Litigation-free, surveyed, registered",
    text: "We offer registered, litigation-free plots with proper documentation — site plans, indentures, and registration assistance. Estate layouts with access roads and drainage considered.",
    tags: ["Title Verification", "Site Inspection", "Indenture & Plan", "Registration Support"],
    icon: "map",
    badge: "Most requested",
  },
  {
    title: "General Supply & Building Materials",
    subtitle: "Cement, iron rods, blocks & hardware",
    text: "Your one-stop construction supply chain. We source directly, store properly, and deliver across Ghana. No counterfeit, no short quantity — measured, invoiced, traceable.",
    tags: ["Cement • OPC/PPC", "16mm / 12mm Iron Rods", "Blocks & Sand", "Plumbing & Electrical", "Tools & Safety", "Bulk Discounts"],
    icon: "box",
  },
  {
    title: "Construction & Estate Services",
    subtitle: "Led by a civil engineer • Assembly experience",
    text: "Engineer-led building support from estimate to execution: structural supervision, site compliance and estate planning handled by a practicing civil engineer.",
    tags: ["Structural Supervision", "Estimates & BOQs", "Site Compliance", "Estate Planning"],
    icon: "building",
  },
  {
    title: "Hair & Beauty Salon",
    subtitle: "Modern braids, styling & care",
    text: "Our beauty studio brings the same standard of cleanliness, professionalism, and customer care. Trained stylists, hygienic tools, modern styles — because beautifying lives is part of building dreams.",
    tags: ["Braids & Cornrows", "Wig Installation", "Hair Treatment", "Bridal Styling", "Kids Friendly"],
    icon: "scissors",
  },
];

export const partners = [
  {
    image: "/partner-placeholder.svg",
    title: "Founder & Lead Civil Engineer",
    text: "Assembly civil engineer — responsible for structural supervision, estimates, site compliance and estate planning. Vision bearer for Karon.",
  },
  {
    image: "/partner-placeholder.svg",
    title: "Partner — Aaron (Erron)",
    text: "Operations & client relations. Manages supply logistics, land acquisition channels and salon enterprise arm.",
  },
];

export const reasons = [
  {
    title: "Civil Engineering Expertise",
    text: "Led by a practicing civil engineer at the Assembly. We understand soil, drainage, structural loads, and municipal approval pathways — not just sales.",
  },
  {
    title: "Registered & Compliant",
    text: "BN415671026 • Registered 15 Oct 2026 under Business Names Act 1962 (No.151). Office of the Registrar of Companies, Republic of Ghana.",
  },
  {
    title: "Reliable Supply Chain",
    text: "Direct sourcing, proper storage, verified brands. We weigh, count, and invoice transparently. Bulk orders with delivery coordination nationwide.",
  },
  {
    title: "Affordable & Transparent",
    text: "Competitive pricing without hidden costs. Detailed BOQs, clear land pricing per plot, and salon price lists displayed. No surprise fees.",
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Land sales", href: "#services" },
      { label: "Building materials", href: "#services" },
      { label: "Construction & estate", href: "#services" },
      { label: "Hair & beauty salon", href: "#services" },
    ],
  },
  {
    title: "Social",
    links: ["Twitter", "LinkedIn", "Facebook", "Instagram"].map((label) => ({ label, href: "#" })),
  },
];
