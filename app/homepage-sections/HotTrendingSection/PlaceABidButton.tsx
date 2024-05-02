"use client";

import YellowButton, { YellowButtonVariants } from "@/app/ui/YellowButton";
import useComingSoonModalStore from "@/store/comingSoonModalStore";

const PlaceABidButton = () => {
  const showComingSoonModal = useComingSoonModalStore(
    (state) => state.showComingSoonModal
  );

  return (
    <YellowButton
      onClick={showComingSoonModal}
      variant={YellowButtonVariants.bottomYellowShadow}
      addStyles="mt-12 self-center laptop:self-start"
    >
      Place a Bid
    </YellowButton>
  );
};

export default PlaceABidButton;
