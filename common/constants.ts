export const NavbarLink = [
  {
    href: "/",
    label: "Our models",
    icon: "/24.svg",
  },
  {
    href: "/about",
    label: "Buy online",
  },
  {
    href: "/contact",
    label: "Shopping guide",
  },
  {
    href: "/domesticTicket",
    label: "Services",
  },
  {
    href: "/internationalTicket",
    label: "Mercedes-Benz World",
  },
];

export interface NavbarLinkItem {
  href: string;
  label: string;
  subMenu?: NavbarLinkItem[] | undefined;
  icon?: string;
}
