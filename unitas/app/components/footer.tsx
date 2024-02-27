import Link from "next/link";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Products", route: "/products" },
  { name: "Contact", route: "/contact" },
];

export default function Footer() {
  return (
    <div className="w-full bg-bluenitas flex py-6 mt-8 items-center justify-between">
      <div className="text-whitenitas flex gap-x-[20px] px-[10px] sm:gap-x-[20px] sm:px-[10px] md:px-[25px] lg:px-[100px]">
        <div>
          {navLinks.map((item, index) => (
            <Link href={item.route} key={index}>
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
      <div className="text-whitenitas flex gap-x-[20px] px-6">
        <ul>
          <li>ENG</li>
          <li>BIH</li>
        </ul>
      </div>
    </div>
  );
}
