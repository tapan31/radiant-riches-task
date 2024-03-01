import { useState } from "react";
import SearchBar from "./SearchBar";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen((isOpen) => !isOpen);
  }

  return (
    <header className="relative bg-stone-900 px-6 py-4 ">
      <div className=" m-auto flex max-w-[1100px] items-center justify-between gap-5">
        <SearchBar />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleNav}
          class="inline-flex h-10 w-10 items-center justify-center  rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <nav
          id="navbar-default"
          className={` ${
            isNavOpen ? "max-h-60" : "max-h-0"
          } absolute left-0 top-16 w-full  overflow-hidden transition-all   duration-300 md:static md:block md:max-h-none md:w-auto`}
        >
          <ul className="flex w-full flex-col items-center gap-6 bg-stone-900 py-3 text-stone-300 md:w-auto md:flex-row md:bg-transparent ">
            <li className="hover:text-stone-200 sm:px-3">
              <a href="#">Categories</a>
            </li>
            <li className="hover:text-stone-200 sm:px-3">
              <a href="">Website Builder's</a>
            </li>
            <li className="hover:text-stone-200 sm:px-3">
              <a href="#">Today's Deals</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
