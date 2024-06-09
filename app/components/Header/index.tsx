"use client";

import NavLinks from "./NavLinks";
import YellowButton from "@/app/ui/YellowButton";
import NFTIcon from "@/app/ui/NFTIcon";
import { BiMenu } from "react-icons/bi";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuIsOpen((value) => !value);

  return (
    <header
      className="pt-5 mb-10 sticky top-0 z-[5] bg-black/80 backdrop-blur-sm
      border-b border-grey/20 -mx-4 mobileM:-mx-5 px-4 mobileM:px-5 shadow-md
      shadow-grey/5"
    >
      <nav
        className="flex-centered-section-1240 pb-5 items-center justify-between
        gap-x-8"
      >
        {/* site logo and name */}
        <div className="flex items-center gap-1">
          <NFTIcon />

          {/* site title */}
          <h1
            className="uppercase bg-gradient-silver bg-clip-text text-transparent
            hidden mobileM:block text-lg mobileL:text-xl font-techno-chain
            tabletL:hidden whitespace-nowrap"
          >
            NFT Crypto Tracker
          </h1>
        </div>

        {/* nav links */}
        <menu className="hidden tabletL:flex items-center gap-x-10 whitespace-nowrap">
          <NavLinks />
        </menu>

        {/* discover and hamburger menu buttons */}
        <div className="flex items-center gap-x-4">
          <YellowButton
            isLink={true}
            link="/#hot_trending"
            addStyles="hidden tabletL:block"
          >
            Discover
          </YellowButton>

          {/* btn to show toggle mobile menu */}
          <button
            onClick={toggleMobileMenu}
            className="block tabletL:hidden text-white hover:text-yellow
            duration-200"
          >
            <BiMenu size={28} />
          </button>
        </div>

        {/* mobile menu in absolute position */}
        <MobileMenu
          isOpen={mobileMenuIsOpen}
          onClose={() => setMobileMenuIsOpen(false)}
        />
      </nav>
    </header>
  );
};

export default Header;
