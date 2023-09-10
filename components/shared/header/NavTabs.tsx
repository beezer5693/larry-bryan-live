import Link from "next/link";

type Props = {
  activeTab: string;
  handleTabChange: (index: string) => void;
};

const tabs = [
  { id: "home", label: "HOME", url: "/" },
  { id: "about", label: "ABOUT", url: "/about" },
  { id: "services", label: "SERVICES", url: "/services" },
  { id: "contact", label: "CONTACT", url: "/contact" },
  { id: "podcast", label: "PODCAST", url: "/podcast" },
];

export default function NavTabs({ activeTab, handleTabChange }: Props) {
  return (
    <nav>
      <div className="hidden items-center gap-10 lg:flex">
        {tabs.map((tab) => (
          <button
            onClick={() => handleTabChange(tab.id)}
            className="relative font-basement text-sm text-[#ccd1e6] hover:text-white"
            key={tab.id}
          >
            {activeTab === tab.id && (
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
            )}
            <Link
              className="relative"
              href={
                tab.id === "services"
                  ? "/#services"
                  : tab.id === "home"
                  ? "/"
                  : tab.url
              }
            >
              <span className="relative">{tab.label}</span>
            </Link>
          </button>
        ))}
      </div>
    </nav>
  );
}
