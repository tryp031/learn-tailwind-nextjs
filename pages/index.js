import Header from "../components/Header";
import HeroWelcome from "../components/HeroWelcome";
import Services from "../components/Services";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <HeroWelcome />
        <Services />
        <Features />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
