import Header from "@/components/Header";
import Landing from "./(section1)/Landing";
import Landing2 from "./(section2)/Landing2";
import Landing3 from "./(section3)/Landing3";

export default function Home() {
  return (
    <section>
      <Header />
      <Landing />
      <Landing2 />
      <Landing3 />
    </section>
  );
}
