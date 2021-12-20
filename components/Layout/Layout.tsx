import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kasperdegraaff.com</title>
        <meta name="description" content="Kasperdegraaff.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white dark:bg-neutral-700 min-h-screen">
        <NavBar />
        <main className=" bg-white dark:bg-neutral-700 font-mono dark:text-gray-100 dark:drop-shadow">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
