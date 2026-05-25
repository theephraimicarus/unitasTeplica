import Image from "next/image";
import Logo from "../../public/assets/unitas-logo.svg";
import Link from "next/link";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Products", route: "/products" },
  { name: "Contact", route: "/contact" },
];

export default function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between px-[10px] py-[20px] bg-bluenitas gap-4 lg:gap-8">
      <div className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[220px]">
        <Link href={"/"}>
          <Image src={Logo} alt="Unitas logo" className="object-contain" />
        </Link>
      </div>

      <div className="text-whitenitas flex gap-x-[20px] px-[10px] sm:gap-x-[20px] sm:px-[15px] md:px-[25px] lg:px-[60px] xl:px-[100px] lg:font-semibold lg:text-[20px] xl:text-[24px] transition-all duration-300">
        <div className="border-whitenitas border-2 flex">
          {navLinks.map((item, index) => (
            <Link href={item.route} key={index}>
              <div
                className="whitespace-nowrap text-whitenitas bg-bluenitas px-3 py-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 lg:py-4 xl:py-6 hover:bg-opacity-90 transition-all duration-300"
                key={index}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
