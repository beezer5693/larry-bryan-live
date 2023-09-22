import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

type Props = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

const tabs = [
  { id: "home", label: "HOME", url: "/" },
  { id: "about", label: "ABOUT", url: "/about" },
  { id: "services", label: "SERVICES", url: "/services" },
  { id: "contact", label: "CONTACT", url: "/contact" },
  { id: "podcast", label: "PODCAST", url: "/podcast" },
];

export default function MobileMenu({ isMenuOpen, closeMenu }: Props) {
  return (
    <div
      className={cn(
        `fixed right-0 top-[64.78px] z-[100] flex h-screen w-full flex-col bg-black pl-10 transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`,
      )}
    >
      {tabs.map((tab) => (
        <Link key={tab.id} href={tab.url} className="w-full">
          <div className="flex w-full items-center justify-between border-b border-neutral-400/50 py-6 pr-2">
            <p className="font-basement text-white">{tab.label}</p>
            <ChevronRight className="text-white" />
          </div>
        </Link>
      ))}
    </div>
  );
}
