import * as React from "react";

import { ArrowDownNarrowWide, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandList,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import useSortingStore from "@/store/sortingOptionStore";

const optionList = [
  { label: "Sort by relevance", value: "default" },
  { label: "Top Exchanges First", value: "exchange-id" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export type SortingOptions = "default" | "exchange-id" | "price-asc" | "price-desc";

type SortingButtonProps = {
  handleSort: (option: SortingOptions) => void;
};

const SortingButton = ({ handleSort }: SortingButtonProps) => {
  const [open, setOpen] = React.useState(false);

  const {sortingOption, setSortingOption} = useSortingStore(
    (state) => state
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-10 border-grey/50">
          <ArrowDownNarrowWide size={24} className="min-w-6" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0 w-fit">
        <Command>
          <CommandList>
            <CommandGroup>
              {optionList.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setSortingOption(currentValue as SortingOptions);
                    handleSort(currentValue as SortingOptions);
                    setOpen(false);
                  }}
                  className={
                    sortingOption === option.value
                      ? "!text-yellow hover:!text-yellow font-medium"
                      : ""
                  }
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      sortingOption === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />

                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SortingButton;
