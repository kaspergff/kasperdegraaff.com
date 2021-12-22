import type { NextPage } from "next";
import Link from "next/Link";

const Contact: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-10">
      <h1 className="text-xl">Hi there!</h1>
      
      <button className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full">
        <Link href="mailto:kasperdegraaff1997@gmail.com">
        <h2 className="text-lg">Send me an e-mail</h2>
        </Link>
      </button>
    </div>
  );
};

export default Contact;
