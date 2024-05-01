import { CgClose } from "react-icons/cg";

type Props = {
  onClick: () => void;
};

const RoundedButtonClose = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-3 right-3 p-[6px] rounded-[50%] text-[#242904]
    bg-gray-50 hover:bg-gradient-yellow hover:text-white duration-200"
    >
      <CgClose size={24} />
    </button>
  );
};

export default RoundedButtonClose;
