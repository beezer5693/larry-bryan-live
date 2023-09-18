import Header from "@/components/shared/header/Header";
import Section1 from "../modules/home_page/Section1";
import Section2 from "../modules/home_page/Section2";
import Section3 from "../modules/home_page/Section3";
import Section4 from "../modules/home_page/Section4";
import Section5 from "../modules/home_page/Section5";
import Section6 from "../modules/home_page/Section6";
import Section7 from "../modules/home_page/Section7";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Section1 />
        <div className="space-y-20 overflow-hidden md:space-y-40 xl:space-y-52">
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
        <Section7 />
      </main>
      <Footer />
    </div>
  );
}
