export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "roofing",
    name: "Roofing",
    shortDescription:
      "Complete roof replacement, repair, and storm damage restoration. Full roof replaced in 24 hours.",
    keywords: [
      "roofing",
      "roof replacement",
      "roof repair",
      "storm damage roof",
      "roofing contractor",
    ],
  },
  {
    slug: "pools",
    name: "Pool Construction",
    shortDescription:
      "Custom inground pool design and construction. From backyard oasis to resort-style builds.",
    keywords: [
      "pool construction",
      "pool builder",
      "inground pool",
      "custom pool",
    ],
  },
  {
    slug: "remodeling",
    name: "Remodeling",
    shortDescription:
      "Kitchen, bathroom, and whole-home remodeling. Transform your space with expert craftsmanship.",
    keywords: [
      "remodeling",
      "home remodeling",
      "kitchen remodel",
      "bathroom remodel",
    ],
  },
  {
    slug: "custom-homes",
    name: "Custom Home Building",
    shortDescription:
      "Build your dream home from the ground up. Fully custom designs tailored to your lifestyle.",
    keywords: [
      "custom home builder",
      "custom homes",
      "home builder",
      "new construction",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
