import { services } from "./services";
import { locations } from "./locations";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "#",
    children: services.map((s) => ({
      label: s.name,
      href: `/${s.slug}/`,
    })),
  },
  {
    label: "Locations",
    href: "/locations/",
    children: locations.map((l) => ({
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
