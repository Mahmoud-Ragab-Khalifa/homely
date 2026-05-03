import { CircleUserRound, Globe, Menu } from "lucide-react";

const Settings = () => {
  return (
    <div className="hidden lg:flex items-center gap-4 text-secondary/90">
      <p>Become a host</p>

      <Globe size={20} strokeWidth={2.25} />

      <div className="flex items-center gap-3 py-2 px-3 ring ring-section rounded-full">
        <Menu size={20} strokeWidth={2.25} />
        <CircleUserRound size={20} strokeWidth={2.25} />
      </div>
    </div>
  );
};

export default Settings;
