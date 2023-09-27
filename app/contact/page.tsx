import Header from "@/components/shared/header/Header";
import Section1 from "../modules/contact_page/Section1";
import Footer from "@/components/shared/footer/Footer";

export const metadata = {
  title: "Contact",
  description: "Dare to think differently",
};

export default function About() {
  return (
    <div>
      <Header />
      <main>
        <Section1 />
      </main>
      <Footer />
    </div>
  );
}
