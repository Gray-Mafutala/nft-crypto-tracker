"use client";

import YellowButton, { YellowButtonVariants } from "@/app/ui/YellowButton";
import useComingSoonModalStore from "@/store/comingSoonModalStore";

const JoinNowButton = () => {
  const showComingSoonModal = useComingSoonModalStore(
    (state) => state.showComingSoonModal
  );

  return (
    <YellowButton
      onClick={showComingSoonModal}
      variant={YellowButtonVariants.bottomYellowShadow}
    >
      Join now
    </YellowButton>
  );
};

export default JoinNowButton;
