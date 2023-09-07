import React from "react";
import Link from "next/link";

const tabs = [
  { url: "/", name: "HOME" },
  { url: "/about", name: "ABOUT" },
  { url: "/services", name: "SERVICES" },
  { url: "/contact", name: "CONTACT" },
  { url: "/podcast", name: "PODCAST" },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="hidden items-center gap-10 lg:flex">
        {tabs.map((item) => (
          <li key={item.name}>
            <Link
              href={item.url}
              className="font-basement text-sm text-white/80 hover:text-white"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
