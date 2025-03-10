import Image from "next/image";
import { Poppins } from "next/font/google";
import { Link } from "@/i18n/routing";

const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

interface CardParams {
  pathUrl: string;
  imageUrl: string;
  content: string;
}

export default function Card({ pathUrl, imageUrl, content }: CardParams) {
  return (
    <>
      <Link
        href={pathUrl}
        className="group hover:bg-slate-300 hover:border-white flex flex-1 flex-col max-md:h-[200px] max-md:w-[200px] text-center justify-center items-center gap-10 px-4 py-8 cursor-pointer border border-gray-600 rounded-lg"
      >
        <Image
          src={imageUrl}
          width={65}
          height={70}
          alt={content}
          className="cursor-pointer"
        />
        <p
          className={`${poppins.className} group-hover:text-gray-800 w-full md:text-[16px] max-md:text-[13px] text-gray-600 cursor-pointer`}
        >
          {content}
        </p>
      </Link>
    </>
  );
}
