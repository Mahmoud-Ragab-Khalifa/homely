import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative max-w-md">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Start Your Search"
        className="py-2 px-4 w-full  rounded-full ring-2 ring-section focus:ring-4 caret-main placeholder:text-neutral-400 text-secondary block focus:outline-none transition-all duration-300"
      />

      <label
        htmlFor="search"
        className="flex-center text-white bg-main rounded-full w-7 h-7 absolute inset-e-2 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <SearchIcon size={17} strokeWidth={2.5} />
      </label>
    </div>
  );
};

export default SearchBar;
