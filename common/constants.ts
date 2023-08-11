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

export const image = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
