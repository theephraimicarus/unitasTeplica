import Link from "next/link";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Products", route: "/products" },
  { name: "Contact", route: "/contact" },
];

export default function Footer() {
  return (
    <div className="w-full bg-bluenitas flex flex-col sm:flex-row py-6 mt-8 items-center justify-between gap-4 sm:gap-0 px-[10px] sm:px-[15px] md:px-[25px] lg:px-[60px] xl:px-[100px]">
      <div className="text-whitenitas flex gap-x-[20px]">
        <div className="flex flex-col sm:flex-row gap-x-4">
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
      <div className="text-whitenitas flex gap-x-[20px] font-semibold">
        <button className="hover:opacity-80 transition-opacity duration-300">ENG</button>
        <button className="hover:opacity-80 transition-opacity duration-300">BIH</button>
      </div>
    </div>
  );
}
