import { cache } from "@/lib/cache";
import { supabase } from "@/lib/supabase";

export const getLiveData = cache(
  async () => {
    const { data: liveData, error } = await supabase
      .from("live_data")
      .select("*");

    if (error) {
      console.error(error.message);
    }

    return liveData ?? [];
  },
  ["live-data"],
  { revalidate: 3600 },
);
