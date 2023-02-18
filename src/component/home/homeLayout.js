import About from "../about/about";
import Footer from "../footer/footer";
import Creations from "../creation/creation";
import Hero from "../hero/hero";

export default function HomeLayout() {
  return (
    <>
      <Hero />
      <About />
      <Creations />
      <Footer />
    </>
  );
}
