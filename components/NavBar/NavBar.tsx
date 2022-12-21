/* This example requires Tailwind CSS v2.0+ */

import { useEffect, useState } from "react";

import Link from "next/link";
import { Switch } from "@headlessui/react";

export default function Example() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("kasperdegraaffDarkMode", "true");
      setEnabled(true);
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("kasperdegraaffDarkMode", "false");
    }
  }, [darkMode]);

  const toggleHandler = () => {
    setDarkMode(!darkMode);
    setEnabled(!enabled);
  };

  return (
    <div className="dark:bg-neutral-700 max-w-7xl mx-auto px-4 sm:px-6 dark:drop-shadow ">
      <div className=" flex justify-between items-center border-b-2 border-gray-100 dark:border-b-0 py-4 md:justify-start md:space-x-10">
        <div className="justify-start hover:scale-110 dark:hover:opacity-100 dark:opacity-75">
          <Link href="/">
            <a className="flex flex-row items-end">
              <span className="sr-only">NavBar</span>
              <svg
                className="w-9 h-9 dark:text-white "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <h1 className="dark:text-white indent-3 font-semibold">
                Kasper de Graaff
              </h1>
            </a>
          </Link>
        </div>
        <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
          <Switch
            as="div"
            checked={enabled}
            onChange={toggleHandler}
            className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-9 " : "translate-x-0"}
            pointer-events-none inline-block stroke-gray-100 h-[34px] w-[34px] rounded-full bg-moon bg-white dark:bg-neutral-700 shadow-lg transform ring-0 transition ease-in-out duration-200 flex justify-center items-center`}>
              <div>
                {enabled ? (
                  <svg
                    className="w-[34px] h-[34px] scale-75 "
                    fill="none"
                    // stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-[34px] h-[34px] scale-75"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                )}
              </div>
            </span>
          </Switch>
        </div>
      </div>
    </div>
  );
}
