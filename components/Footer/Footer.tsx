import Link from "next/link";
import Image from "next/image";

import instagram from "../../public/img/instagram.png";
import github from "../../public/img/github.svg";

const Footer = () => {
  return (
    <div className="dark:bg-neutral-700 max-w-7xl mx-auto px-4 sm:px-6 ">
      <div className=" flex flex-col items-center gap-2 border-t-2 border-gray-100 dark:border-t-0 py-4">
        <Link href="/" passHref>
          <a>
            <h1 className="dark:text-white dark:opacity-75 font-mono">
              kasperdegraaff.com
            </h1>
          </a>
        </Link>
        <div className="flex flex-row justify-center gap-2">
          <Link href="https://www.instagram.com/kaspergff/" passHref>
            <a>
              <Image
                src={instagram}
                alt="Instagram Link"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <Link href="https://github.com/kaspergff" passHref>
            <a>
              <Image src={github} alt="github Link" width={40} height={40} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
