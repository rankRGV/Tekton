export interface Location {
  slug: string;
  name: string;
  state: string;
  isHQ: boolean;
  description: string;
  coordinates: { lat: number; lng: number };
}

export const locations: Location[] = [
  {
    slug: "mcallen",
    name: "McAllen",
    state: "TX",
    isHQ: true,
    description:
      "Headquartered in McAllen, we serve homeowners across the city with roofing, pools, remodeling, and custom home building.",
    coordinates: { lat: 26.2034, lng: -98.2300 },
  },
  {
    slug: "mission",
    name: "Mission",
    state: "TX",
    isHQ: false,
    description:
      "Serving Mission homeowners with reliable roofing, pool construction, remodels, and custom builds.",
    coordinates: { lat: 26.2159, lng: -98.3253 },
  },
  {
    slug: "edinburg",
    name: "Edinburg",
    state: "TX",
    isHQ: false,
    description:
      "Edinburg's trusted contractor for roofing, pools, home remodeling, and custom construction.",
    coordinates: { lat: 26.3017, lng: -98.1633 },
  },
  {
    slug: "brownsville",
    name: "Brownsville",
    state: "TX",
    isHQ: false,
    description:
      "Full-service home solutions in Brownsville — from roof replacements to custom home builds.",
    coordinates: { lat: 25.9017, lng: -97.4975 },
  },
  {
    slug: "harlingen",
    name: "Harlingen",
    state: "TX",
    isHQ: false,
    description:
      "Harlingen homeowners trust Tekton for roofing, pool construction, remodeling, and new builds.",
    coordinates: { lat: 26.1906, lng: -97.6961 },
  },
  {
    slug: "rio-grande-city",
    name: "Rio Grande City",
    state: "TX",
    isHQ: false,
    description:
      "Bringing expert roofing, pools, remodeling, and custom homes to Rio Grande City and Starr County.",
    coordinates: { lat: 26.3809, lng: -98.8203 },
  },
  {
    slug: "penitas",
    name: "Penitas",
    state: "TX",
    isHQ: false,
    description:
      "Serving Penitas and western Hidalgo County with roofing, pools, remodels, and custom home construction.",
    coordinates: { lat: 26.2298, lng: -98.4428 },
  },
  {
    slug: "pharr",
    name: "Pharr",
    state: "TX",
    isHQ: false,
    description:
      "Pharr's go-to contractor for roofing, pool builds, home remodeling, and custom construction.",
    coordinates: { lat: 26.1948, lng: -98.1836 },
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
