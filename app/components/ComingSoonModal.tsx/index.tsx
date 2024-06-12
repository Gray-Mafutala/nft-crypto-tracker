"use client";

import { useEffect } from "react";
import RoundedButtonClose from "@/app/ui/RoundedButtonClose";
import useComingSoonModalStore from "@/store/comingSoonModalStore";

const ComingSoonModal = () => {
  const { isOpen, closeComingSoonModal } = useComingSoonModalStore();

  useEffect(() => {
    if (isOpen === true) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <div
      onClick={closeComingSoonModal}
      className={
        isOpen
          ? `fixed inset-0 z-10 bg-black/80 flex justify-center 
                items-center -translate-y-0`
          : `fixed inset-0 z-10 bg-black/80 flex justify-center 
                items-center -translate-y-[120%]`
      }
    >
      <div
        key={new Date().getTime()}
        onClick={(e) => e.stopPropagation()}
        className="mx-5 opacity-0 -translate-y-5 animate-smoothAppearVertical bg-off-black
                rounded-lg flex flex-col max-w-96 w-full min-w-60 relative"
      >
        <RoundedButtonClose onClick={closeComingSoonModal} />

        <h6
          className="text-xl font-bold font-tt-firs-neue my-6
                border-b border-grey/20 px-5 pb-2"
        >
          Coming soon
        </h6>
        <p className="px-5 text-base mb-6 text-left">
          Sorry, this feature will be available soon.
        </p>
      </div>
    </div>
  );
};

export default ComingSoonModal;
