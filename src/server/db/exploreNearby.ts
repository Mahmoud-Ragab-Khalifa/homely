import { cache } from "@/lib/cache";
import { supabase } from "@/lib/supabase";

export const getExploreData = cache(
  async () => {
    const { data: exploreData, error } = await supabase
      .from("explore_data")
      .select("*");

    if (error) {
      console.error(error.message);
    }

    return exploreData ?? [];
  },
  ["explore-nearby"],
  { revalidate: 3600 },
);
