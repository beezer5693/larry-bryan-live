import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        `fixed right-0 top-[64.78px] z-[100] flex h-screen w-full flex-col gap-10 bg-black transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`,
      )}
    >
      <div className="pl-10">
        {tabs.map((tab) => (
          <Link key={tab.id} href={tab.url} className="w-full">
            <div className="flex w-full items-center justify-between border-b border-neutral-400/50 py-6 pr-2">
              <p className="font-basement text-white">{tab.label}</p>
              <ChevronRight className="text-white" />
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full px-10">
        <Link href="/contact">
          <Button className="h-14 w-full text-xl">Book Larry</Button>
        </Link>
      </div>
    </div>
  );
}
