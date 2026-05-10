import { cache } from "@/lib/cache";
import { supabase } from "@/lib/supabase";

export const getSearchResults = cache(
  async () => {
    const { data: searchResults, error } = await supabase
      .from("search_results")
      .select("*");

    if (error) {
      console.error(error.message);
    }

    return searchResults ?? [];
  },
  ["search-results"],
  { revalidate: 3600 },
);
