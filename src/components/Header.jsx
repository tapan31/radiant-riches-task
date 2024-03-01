import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="flex items-center justify-around gap-5 bg-stone-900 px-6 py-4">
      <SearchBar />
      <nav>
        <ul className="flex items-center gap-6 text-stone-300 ">
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
    </header>
  );
}

export default Header;
