import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/public/assets/logo-blue.png";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        `fixed right-0 top-0 z-[100] flex h-screen w-full flex-col bg-gradient-to-b from-black from-60% to-blue transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`,
      )}
    >
      <div className="flex items-center justify-between border-b border-neutral-400/50 px-5 py-5 text-white">
        <Image src={logo} quality={100} height={100} width={150} alt="logo" />
        <div className="cursor-pointer" onClick={closeMenu}>
          <X size={24} className="text-white" />
        </div>
      </div>
      <div className="space-y-10">
        <div className="pl-10">
          {tabs.map((tab) => (
            <Link key={tab.id} href={tab.url} className="w-full">
              <div className="flex w-full items-center justify-between border-b border-neutral-400/50 py-6 pr-5">
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
    </div>
  );
}
