import { Menu } from "lucide-react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Settings from "./Settings";

const Header = () => {
  return (
    <header className="py-5 shadow-md shadow-section z-50 relative">
      <div className="container flex items-center justify-between gap-4">
        <Logo />

        <SearchBar />

        <Settings />

        <div className="lg:hidden w-9 h-9 flex-center rounded-full bg-section text-secondary">
          <Menu size={20} strokeWidth={2.25} />
        </div>
      </div>
    </header>
  );
};

export default Header;
