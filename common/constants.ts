export const NavbarLink = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/domesticTicket",
    label: "Domestic Ticket",
  },
  {
    href: "/internationalTicket",
    label: "International Ticket",
  },
  {
    href: "/news",
    label: "News",
  },
];

export interface NavbarLinkItem {
  href: string;
  label: string;
  subMenu?: NavbarLinkItem[] | undefined;
}
