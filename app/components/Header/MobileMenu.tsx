"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";
import NavLinks from "./NavLinks";
import YellowButton from "@/app/ui/YellowButton";

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

  return createPortal(
    // transparent modal wrapper in fixed position
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
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-[6px] rounded-[50%] text-[#242904]
          bg-gray-50 hover:bg-gradient-yellow hover:text-white duration-200"
        >
          <CgClose size={24} />
        </button>

        {/* nav links */}
        <menu className="flex flex-col items-center gap-y-4 text-2xl">
          <NavLinks closeMobileMenu={onClose} />
        </menu>

        {/* discover button */}
        <YellowButton onClick={onClose} isLink={true} link="/#hot_trending">
          Discover
        </YellowButton>
      </div>
    </div>,
    document.body
  );
};

export default MobileMenu;
