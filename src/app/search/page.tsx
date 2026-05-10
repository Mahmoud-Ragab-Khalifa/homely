import { SearchResultItem } from "@/types/searchResultItem";
import { format } from "date-fns";
import SearchResultCard from "./_components/SearchResultCard";
import FinalMap from "./_components/FinalMap";
import { getSearchResults } from "@/server/db/searchResults";

const filters = [
  "Cancellation Flexibility",
  "Type Of Place",
  "price",
  "Rooms and Beds",
  "More Filters",
];

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    location: string;
    startDate: string;
    endDate: string;
    numberOfGuests: string;
  }>;
}) => {
  const { location, startDate, endDate, numberOfGuests } = await searchParams;

  const info = `300+ Stays | ${format(new Date(startDate), "dd MMMM yy")} - ${format(new Date(endDate), "dd MMMM yy")} | For ${numberOfGuests} Guests in ${location[0].toUpperCase()}${location.slice(1)}`;

  const searchResults = await getSearchResults();

  return (
    <main>
      <section className="section-gap">
        <div className="container grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div>
            <p className="text-xs text-secondary font-medium truncate">
              {info}
            </p>

            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold my-4">
              Stays in {location[0].toUpperCase()}
              {location.slice(1)}
            </h1>

            <div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
              {filters.map((item, idx) => (
                <span
                  key={idx}
                  className="py-2.5 px-4 ring ring-section transition-all duration-300 hover:ring-2 active:ring-4 text-sm rounded-full whitespace-nowrap cursor-pointer hover:bg-section hover:ring-secondary/20"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 mt-5">
              {searchResults?.map((item: SearchResultItem) => (
                <SearchResultCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="bg-section w-full h-100 md:w-auto md:h-auto">
            <FinalMap items={searchResults || []} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
