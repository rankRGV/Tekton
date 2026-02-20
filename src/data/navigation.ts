import { services } from "./services";
import { locations } from "./locations";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Pages that are built and ready to show. Add slugs here as pages are completed.
const builtServiceSlugs = ["roofing", "pools"];
const builtLocationSlugs = ["mcallen", "mission"];

const builtServices = services.filter((s) => builtServiceSlugs.includes(s.slug));
const builtLocations = locations.filter((l) => builtLocationSlugs.includes(l.slug));

export const mainNav: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "#",
    children: builtServices.map((s) => ({
      label: s.name,
      href: `/${s.slug}/`,
    })),
  },
  {
    label: "Locations",
    href: "/locations/",
    children: builtLocations.map((l) => ({
      label: l.name,
      href: `/${l.slug}/`,
    })),
  },
  {
    label: "About",
    href: "/about/",
  },
  {
    label: "Contact",
    href: "/contact/",
  },
];

// Export filtered lists for Footer and other components
export { builtServices, builtLocations };
