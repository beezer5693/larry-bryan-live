import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Section1 from "../modules/services_page/Section1";
import Section2 from "../modules/services_page/Section2";
import Section3 from "../modules/services_page/Section3";

export const metadata = {
  title: "Services",
  description: "Dare to think differently",
};

export default function page() {
  return (
    <div>
      <Header />
      <div className="overflow-x-hidden px-7 pb-20 md:pb-32 lg:pb-44">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <Footer />
    </div>
  );
}
