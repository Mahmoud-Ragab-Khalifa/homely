import { MapPinHouse } from "lucide-react";
import { Flavors } from "next/font/google";
import Link from "next/link";

const flavors = Flavors({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <Link href={"/"} className="text-main flex items-center gap-1.25">
      <MapPinHouse strokeWidth={2.25} size={26} />
      <span className={`${flavors.className} text-3xl mt-0.5`}>Homely</span>
    </Link>
  );
};

export default Logo;
