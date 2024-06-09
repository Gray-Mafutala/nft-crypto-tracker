"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image, { StaticImageData } from "next/image";

import BitcoinIcon from "@/assets/images/crypto-icons/btc.png";
import EthereumIcon from "@/assets/images/crypto-icons/eth.png";
import CardanoIcon from "@/assets/images/crypto-icons/ada.png";
import SolanaIcon from "@/assets/images/crypto-icons/sol.png";
import RippleIcon from "@/assets/images/crypto-icons/xrp.png";
import DogecoinIcon from "@/assets/images/crypto-icons/doge.png";
import EthereumClassicIcon from "@/assets/images/crypto-icons/ethereum-classic.png";
import BitcoinCashIcon from "@/assets/images/crypto-icons/bitcoin-cash.png";
import LitecoinIcon from "@/assets/images/crypto-icons/lite.png";

const cryptoList = [
  {
    cryptoId: "bitcoin",
    label: "Bitcoin",
    symbol: "BTC",
    icon: BitcoinIcon,
  },

  {
    cryptoId: "ethereum",
    label: "Ethereum",
    symbol: "ETH",
    icon: EthereumIcon,
  },

  {
    cryptoId: "dogecoin",
    label: "Dogecoin",
    symbol: "DOGE",
    icon: DogecoinIcon,
  },

  {
    cryptoId: "ethereum-classic",
    label: "Ethereum Classic",
    symbol: "ETC",
    icon: EthereumClassicIcon,
  },

  {
    cryptoId: "cardano",
    label: "Cardano",
    symbol: "ADA",
    icon: CardanoIcon,
  },

  {
    cryptoId: "xrp",
    label: "Ripple",
    symbol: "XRP",
    icon: RippleIcon,
  },

  {
    cryptoId: "litecoin",
    label: "Litecoin",
    symbol: "LTC",
    icon: LitecoinIcon,
  },

  {
    cryptoId: "solana",
    label: "Solana",
    symbol: "SOL",
    icon: SolanaIcon,
  },

  {
    cryptoId: "bitcoin-cash",
    label: "Bitcoin Cash",
    symbol: "BCH",
    icon: BitcoinCashIcon,
  },
];

type ComboboxProps = {
  handleSearch: (searchValue: string) => void;
};

const ComboboxSearch = ({ handleSearch }: ComboboxProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* current crypto selected */}
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-56 max-w-[420px] w-full justify-between border-grey/50
          rounded-lg px-4 py-5 text-base font-medium truncate"
        >
          {!value && <span>Select crypto...</span>}

          {value && (
            <span className="flex items-center gap-x-2">
              <Image
                src={
                  cryptoList.find((crypto) => crypto.cryptoId === value)
                    ?.icon as StaticImageData
                }
                alt=""
                className="w-6 h-6 object-contain rounded-full"
              />

              {cryptoList.find((crypto) => crypto.cryptoId === value)?.label}
              {` (${
                cryptoList.find((crypto) => crypto.cryptoId === value)?.symbol
              })`}
            </span>
          )}

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      {/* list */}
      <PopoverContent className="p-0 min-w-56">
        <Command>
          <CommandInput placeholder="Search crypto..." />

          <CommandList>
            <CommandEmpty>No crypto found.</CommandEmpty>

            <CommandGroup>
              {cryptoList.map((crypto) => (
                <CommandItem
                  key={crypto.cryptoId}
                  value={crypto.cryptoId}
                  onSelect={(currentvalue) => {
                    setValue(currentvalue);
                    handleSearch(currentvalue);
                    setOpen(false);
                  }}
                  className={
                    value === crypto.cryptoId
                      ? "!text-yellow hover:!text-yellow font-medium"
                      : ""
                  }
                >
                  {/* crypto icon */}
                  <Image
                    src={crypto.icon}
                    alt=""
                    className="w-6 h-6 object-contain mr-2 rounded-full"
                  />

                  {/* label */}
                  {crypto.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ComboboxSearch;
