import Link from "next/link";
import Image from "next/image";
import NFTIcon from "@/app/ui/NFTIcon";

import instagramIcon from "../../../assets/images/shared/social-media/instagram.svg";
import facebookIcon from "../../../assets/images/shared/social-media/facebook.svg";
import twitterIcon from "../../../assets/images/shared/social-media/twitter.svg";

const marketplace = [
  { title: "NFTs Collections", link: "/#nfts_collections" },
  { title: "Cryptocurrencies", link: "/cryptocurrencies" },
  { title: "Hot trending", link: "/#hot_trending" },
  { title: "Trading Cards", link: "" },
];

const statistics = [
  { title: "Rankings", link: "" },
  { title: "Activity", link: "" },
  { title: "Top Creator", link: "" },
];

const resources = [
  { title: "Help Center", link: "" },
  { title: "Prices Comparator", link: "/prices-comparator" },
  { title: "Newsletter", link: "" },
  { title: "Platform Status", link: "" },
];

const company = [
  { title: "About", link: "" },
  { title: "Contats", link: "" },
  { title: "Our Partners", link: "/#our_partners" },
  { title: "Affiliates", link: "" },
];

const socialMedia = [
  { icon: instagramIcon, alt: "instagram icon", link: "", id: 0 },
  { icon: facebookIcon, alt: "facebook icon", link: "", id: 1 },
  { icon: twitterIcon, alt: "twitter icon", link: "", id: 2 },
];

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer
      className="mt-28 max-w-[1240px] mx-auto flex flex-col gap-y-14
      font-tt-firs-neue text-grey [&_p]:font-normal [&_p]:text-base"
    >
      {/* top content */}
      <div className="flex flex-col laptop:flex-row gap-12 laptop:justify-between">
        {/* left content - logo, outline... */}
        <div
          className="flex-grow flex flex-col gap-y-1 items-center
          laptop:items-start"
        >
          <NFTIcon addStyles="laptop:self-start" />

          <p className="text-center laptop:text-left laptop:max-w-72 mt-5 mb-4">
            The World’s First and largest Digital Marketplace for Crypto
            Collectibles and Non - Fungible Tokens.
          </p>

          {/* social media */}
          <div className="flex gap-x-3 whitespace-nowrap">
            {socialMedia.map(({ icon, link, alt, id }) => (
              <Link
                key={id}
                href={link}
                className="hover:drop-shadow-[0_0px_4px#cbfe00] hover:-translate-y-1 p-1 active:translate-y-0 duration-200"
              >
                <Image
                  src={icon}
                  alt={alt}
                  className="min-w-8 min-h-8 object-cover"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* right content - the lists */}
        <div
          className="flex-grow-[3] grid grid-cols-1 mobileL:grid-cols-2 gap-y-16
          mobileXL:flex mobileXL:flex-row mobileXL:justify-between gap-x-6
          text-center mobileXL:text-left"
        >
          {/* Marketplace */}
          <div className="flex flex-col gap-y-9">
            <h5 className="text-xl font-techno-chain text-white">
              Marketplace
            </h5>

            <ul className="flex flex-col gap-y-4">
              {marketplace.map(({ title, link }) => (
                <li key={title}>
                  <Link href={link} className="hover:text-yellow duration-300">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Statistics */}
          <div className="flex flex-col gap-y-9">
            <h5 className="uppercase text-xl font-techno-chain text-white">
              Statistics
            </h5>

            <ul className="flex flex-col gap-y-4">
              {statistics.map(({ title, link }) => (
                <li key={title}>
                  <Link href={link} className="hover:text-yellow duration-300">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-y-9">
            <h5 className="uppercase text-xl font-techno-chain text-white">
              Resources
            </h5>

            <ul className="flex flex-col gap-y-4">
              {resources.map(({ title, link }) => (
                <li key={title}>
                  <Link href={link} className="hover:text-yellow duration-300">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-y-9">
            <h5 className="uppercase text-xl font-techno-chain text-white">
              Company
            </h5>

            <ul className="flex flex-col gap-y-4">
              {company.map(({ title, link }) => (
                <li key={title}>
                  <Link href={link} className="hover:text-yellow duration-300">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* bottom content */}
      <div
        className="pt-6 mb-7 flex flex-col gap-y-8 mobileL:gap-y-4 text-center
        tablet:text-left tablet:flex-row justify-between border-t border-grey"
      >
        <p className="">
          &#64;{currentYear}-NFTCryptoTracker. All rights reserved
        </p>

        <p
          className="-order-1 tablet:order-1 flex flex-col gap-y-4
          mobileL:flex-row justify-center gap-x-12"
        >
          <Link href="/" className="hover:text-yellow duration-300">
            Terms & Agreements
          </Link>
          <Link href="/" className="hover:text-yellow duration-300">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
