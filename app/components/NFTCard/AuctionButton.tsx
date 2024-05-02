"use client";

import YellowButton, {
  YellowButtonPaddings,
  YellowButtonVariants,
} from "@/app/ui/YellowButton";
import useComingSoonModalStore from "@/store/comingSoonModalStore";

const AuctionButton = () => {
  const showComingSoonModal = useComingSoonModalStore(
    (state) => state.showComingSoonModal
  );

  return (
    <YellowButton
      onClick={showComingSoonModal}
      variant={YellowButtonVariants.bottomYellowShadow}
      size={YellowButtonPaddings.small}
    >
      Auction
    </YellowButton>
  );
};

export default AuctionButton;
