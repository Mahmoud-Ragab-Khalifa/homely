"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SearchIcon } from "lucide-react";
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

  return (
    <>
      <div className="relative max-w-md flex-1">
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
        <div
          className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl top-full z-50"
          ref={dateRangePickerRef}
        >
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
        </div>
      )}
    </>
  );
};

export default SearchBar;
