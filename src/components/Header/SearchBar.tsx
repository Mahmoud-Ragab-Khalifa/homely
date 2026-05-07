"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SearchIcon, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const SearchBar = () => {
  const [input, setInput] = useState<string>("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  const dateRangePickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!input) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dateRangePickerRef.current &&
        !dateRangePickerRef.current.contains(e.target as Node)
      ) {
        setInput("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [input]);

  const [numberOfGuests, setNumberOfGuests] = useState<number>(1);

  return (
    <div ref={dateRangePickerRef} className="flex-1 max-w-md">
      <div className="relative">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="Start Your Search..."
          className="py-2 px-4 w-full  rounded-full ring-2 ring-section focus:ring-4 caret-main placeholder:text-neutral-400 text-secondary block focus:outline-none transition-all duration-300"
        />

        <label
          htmlFor="search"
          className="hidden md:flex flex-center text-white bg-main rounded-full w-7 h-7 absolute inset-e-2 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <SearchIcon size={17} strokeWidth={2.5} />
        </label>
      </div>

      {input && (
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl top-full z-50 bg-white">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#fe595e"]}
            minDate={new Date()}
            direction={isMobile ? "vertical" : "horizontal"}
            showDateDisplay={!isMobile}
            moveRangeOnFirstSelection={!isMobile}
            editableDateInputs={isMobile}
          />

          <div className="flex items-center justify-between border-t border-section py-4 px-5">
            <h2 className="font-semibold">Number Of Guests</h2>

            <div className="rounded-full bg-section py-2 px-4 relative flex items-center gap-4">
              <label htmlFor="numberOfGuests">
                <Users />
              </label>

              <input
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(+e.target.value)}
                type="number"
                name="numberOfGuests"
                id="numberOfGuests"
                min={1}
                className="focus:outline-none max-w-10 text-main caret-main"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 py-4 px-5 border-t border-section text-white">
            <button
              onClick={() => setInput("")}
              type="button"
              className=" cursor-pointer py-2 px-8 md:px-12 xl:px-15 bg-secondary md:bg-secondary/80 transition-all duration-300 md:hover:bg-secondary md:active:scale-110 md:shadow-sm md:shadow-secondary md:hover:shadow-md rounded-full w-fit mx-auto"
            >
              Cancel
            </button>

            <Link
              href={"/search"}
              onClick={() => setInput("")}
              className="block py-2 px-8 md:px-12 xl:px-15 bg-main md:bg-main/80 transition-all duration-300 md:hover:bg-main md:active:scale-110 md:shadow-sm md:shadow-main md:hover:shadow-md rounded-full w-fit mx-auto"
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
