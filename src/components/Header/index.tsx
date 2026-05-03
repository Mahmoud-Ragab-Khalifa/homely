import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="py-5 shadow-md shadow-section z-50">
      <div className="container">
        <Logo />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
