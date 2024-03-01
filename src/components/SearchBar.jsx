import { useState } from "react";
import searchIcon from "../assets/search.png";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <form className="relative">
      <label className="absolute left-2 top-1">
        <img src={searchIcon} alt="" />
      </label>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-md px-1 py-1 focus:outline-none focus:ring focus:ring-stone-300 sm:px-2 sm:py-1"
      />
    </form>
  );
}

export default SearchBar;
