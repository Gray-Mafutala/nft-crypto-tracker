import Link from "next/link";
import React from "react";

export enum YellowButtonVariants {
  regular,
  bottomYellowShadow,
}
export enum YellowButtonPaddings {
  small,
  large,
}

type Props = {
  children: React.ReactNode;
  addStyles?: string;
  variant?: YellowButtonVariants;
  size?: YellowButtonPaddings;
  isLink?: boolean;
  link?: string;
  type?: "button" | "submit" | "reset"
  onClick?: (argsList?: any) => void;
};

const YellowButton = ({
  addStyles = "",
  variant = YellowButtonVariants.regular,
  size = YellowButtonPaddings.large,
  isLink = false,
  link = "",
  children,
  onClick,
}: Props) => {
  const regularStyle =
    size === YellowButtonPaddings.large
      ? `px-8 py-2 font-medium text-lg rounded-md font-tt-firs-neue text-[#242904]
      bg-gradient-yellow border-2 border-transparent hover:border-[#cbfe00]
      hover:text-white hover:bg-gradient-transparent select-none
      active:shadow-[#cbfe00_0px_30px_60px_-12px_inset,_#fbe700_0px_18px_36px_-18px_inset]
      [text-shadow:0px_6px_8px_#cbfe00] duration-300 ease-in`
      : `px-2 py-1 font-medium text-lg rounded-md font-tt-firs-neue text-[#242904]
      bg-gradient-yellow border-2 border-transparent hover:border-[#cbfe00]
      hover:text-white hover:bg-gradient-transparent select-none
      active:shadow-[#cbfe00_0px_15px_30px_-6px_inset,_#fbe700_0px_9px_18px_-9px_inset]
      [text-shadow:0px_6px_8px_#cbfe00] duration-300 ease-in`;

  return (
    <>
      {isLink && (
        <Link
          href={link}
          onClick={onClick}
          className={
            // yellow button with small yellow bottom shadow
            variant === YellowButtonVariants.bottomYellowShadow
              ? `${regularStyle} shadow-[0_16px_28px_-18px_#cbfe00] hover:shadow-none
                  ${addStyles}`
              : // regular style
                `${regularStyle} ${addStyles}`
          }
        >
          {children}
        </Link>
      )}

      {!isLink && (
        <button
          onClick={onClick}
          type="submit"
          className={
            // yellow button with small yellow bottom shadow
            variant === YellowButtonVariants.bottomYellowShadow
              ? `${regularStyle} shadow-[0_16px_28px_-18px_#cbfe00] hover:shadow-none
                ${addStyles}`
              : // regular style
                `${regularStyle} ${addStyles}`
          }
        >
          {children}
        </button>
      )}
    </>
  );
};

export default YellowButton;
