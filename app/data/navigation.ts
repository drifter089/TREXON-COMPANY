export interface NavItem {
  href: string;
  label: string;
  primary?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/industries", label: "Industries" },
  { href: "/#services", label: "Buyer Support" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us", primary: true },
];
