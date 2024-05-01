"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";
import NavLinks from "./NavLinks";
import YellowButton from "@/app/ui/YellowButton";
import RoundedButtonClose from "@/app/ui/RoundedButtonClose";
import ClientPortal from "../MarqueeList.tsx/ClientPortal";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const MobileMenu = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    if (isOpen === true) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <ClientPortal>
      <div
        onClick={onClose}
        className={
          isOpen
            ? "fixed inset-0 w-full h-full bg-off-black/10 backdrop-blur-sm z-50 duration-200"
            : "fixed inset-0 w-full h-full bg-off-black/10 backdrop-blur-sm z-50 translate-x-[100%] duration-200"
        }
      >
        {/* inner container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full mobileL:max-w-md ml-auto h-screen pt-20 bg-off-black
        flex flex-col items-center gap-y-10"
        >
          {/* btn to close mobile menu */}
          <RoundedButtonClose onClick={onClose} />

          {/* nav links */}
          <menu className="flex flex-col items-center gap-y-4 text-2xl">
            <NavLinks closeMobileMenu={onClose} />
          </menu>

          {/* discover button */}
          <YellowButton onClick={onClose} isLink={true} link="/#hot_trending">
            Discover
          </YellowButton>
        </div>
      </div>
    </ClientPortal>
  );
};

export default MobileMenu;
