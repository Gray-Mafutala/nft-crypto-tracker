"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Collections", link: "/#nfts_collections" },
  { title: "Cryptocurrencies", link: "/cryptocurrencies" },
  { title: "Prices comparator", link: "/prices-comparator" },
];

type Props = {
  closeMobileMenu?: () => void;
};

const NavLinks = ({ closeMobileMenu }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(({ title, link }) => (
        <li key={title} onClick={closeMobileMenu}>
          <Link
            href={link}
            className={
              pathname === link
                ? "px-4 py-2 font-techno-chain bg-gradient-yellow bg-clip-text text-transparent"
                : "px-4 py-2 font-techno-chain bg-[linear-gradient(to_right,_#fff_33%,_#cbfe00_66%,_#fbe700_100%,_#fbe700)] bg-clip-text text-transparent bg-[length:300%_100%] bg-[top_left] transition-all duration-500 hover:bg-[top_left_100%]"
            }
          >
            {title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
