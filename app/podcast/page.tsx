import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Section1 from "../modules/podcast_page/Section1";
import Section2 from "../modules/podcast_page/Section2";

export default function page() {
  return (
    <div>
      <Header />
      <main>
        <Section1 />
        <Section2 />
      </main>
      <Footer />
    </div>
  );
}
