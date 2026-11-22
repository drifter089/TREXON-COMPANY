export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#resins", label: "Resins" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
];
