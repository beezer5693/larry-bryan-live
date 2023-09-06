import React from "react";
import Link from "next/link";

const navBarItems = [
  { url: "/", name: "HOME" },
  { url: "/about", name: "ABOUT" },
  { url: "/services", name: "SERVICES" },
  { url: "/contact", name: "CONTACT" },
  { url: "/podcast", name: "PODCAST" },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        {navBarItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.url}
              className="hover:text-blue-500 font-basement text-sm text-white"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
