import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reference from "@/components/Reference";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Reference />
      <Contact />
      <About />
      <Footer />
    </main>
  );
}
