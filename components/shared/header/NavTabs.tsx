"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { id: "home", label: "HOME", url: "/" },
  { id: "about", label: "ABOUT", url: "/about" },
  { id: "services", label: "SERVICES", url: "/services" },
  { id: "contact", label: "CONTACT", url: "/contact" },
  { id: "podcast", label: "PODCAST", url: "/podcast" },
];

export default function NavTabs() {
  const currentPath = usePathname();

  return (
    <nav>
      <div className="hidden items-center gap-10 lg:flex">
        {tabs.map((tab) => (
          <button
            className={cn(
              "relative font-basement text-sm text-[#ccd1e6] hover:text-white",
              {
                "text-white": currentPath === tab.url,
              },
            )}
            key={tab.id}
          >
            {currentPath === `${tab.url}` && (
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
            )}
            <Link className="relative" href={tab.url}>
              <span className="relative">{tab.label}</span>
            </Link>
          </button>
        ))}
      </div>
    </nav>
  );
}
