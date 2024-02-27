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
    <nav className="flex w-full items-center justify-between px-[10px] py-[20px] bg-bluenitas">
      <div className="w-[140px] sm:w-[150px] sm:px-[15px] md:w-[160px] lg:w-[220px] lg:mx-[40px]">
        <Link href={"/"}>
          <Image src={Logo} alt="Unitas logo" className="object-contain" />
        </Link>
      </div>

      <div className="text-whitenitas flex gap-x-[20px] px-[10px] sm:gap-x-[20px] sm:px-[10px] md:px-[25px] lg:px-[100px]">
        <div className="border-whitenitas border-2 sm:flex">
          {navLinks.map((item, index) => (
            <Link href={item.route}>
              <div
                className="whitespace-nowrap text-whitenitas bg-bluenitas px-4 py-2 md:px-8 lg:px-12 lg:py-6"
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
