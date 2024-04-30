import Image, { StaticImageData } from "next/image";

type Props = {
  img: StaticImageData;
  profilName: string;
  addStyles?: string;
};

const AvatarProfil = ({ img, profilName, addStyles = "" }: Props) => {
  return (
    <div className={`flex items-center ${addStyles}`}>
      <Image
        src={img}
        alt={`avatar of ${profilName}`}
        width={48}
        height={48}
        className="object-cover rounded-full border-2 border-white"
      />

      <span className="uppercase font-techno-chain ml-3 mr-2">
        {profilName}
      </span>

      <span className="min-w-4 min-h-4 object-cover">
        <svg className="block w-4 h-4 fill-none" viewBox="0 0 12 12">
          <path
            fill="#feda03"
            d="M4.781.743c.51-.99 1.927-.99 2.438 0 .306.595.998.882 1.636.678 1.062-.34 2.064.662 1.724 1.724-.204.637.082 1.33.678 1.636.99.51.99 1.927 0 2.438a1.371 1.371 0 0 0-.678 1.636c.34 1.062-.662 2.064-1.724 1.724a1.371 1.371 0 0 0-1.636.678c-.51.99-1.927.99-2.438 0a1.371 1.371 0 0 0-1.636-.678c-1.062.34-2.064-.662-1.724-1.724A1.371 1.371 0 0 0 .743 7.22c-.99-.51-.99-1.927 0-2.438.595-.307.882-.999.678-1.636-.34-1.062.662-2.064 1.724-1.724A1.371 1.371 0 0 0 4.78.743Z"
          />
          <path
            fill="#000"
            fillRule="evenodd"
            d="M8.44 4.24a.52.52 0 0 1 .013.735l-3.047 3.16-1.859-1.928a.52.52 0 1 1 .748-.722l1.111 1.152 2.299-2.384a.52.52 0 0 1 .735-.013Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default AvatarProfil;
