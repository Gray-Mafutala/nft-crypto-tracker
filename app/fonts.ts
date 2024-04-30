import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const techno_chain = localFont({
  src: "../assets/fonts/techno-chain.otf",
  display: "swap",
  variable: "--font-techno-chain",
});

export const tt_firs_neue = localFont({
  src: [
    {
      path: "../assets/fonts/tt-firs-neue-trial-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/tt-firs-neue-trial-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/tt-firs-neue-trial-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-tt-firs-neue",
});
