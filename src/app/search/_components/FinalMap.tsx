"use client";

import { SearchResultItem } from "@/types/searchResultItem";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

const FinalMap = ({ items }: { items: SearchResultItem[] }) => {
  return <Map items={items} />;
};

export default FinalMap;
