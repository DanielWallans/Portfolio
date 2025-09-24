import type { Route } from "./+types/home";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Café - O melhor café do Brasil" },
    { name: "description", content: "Descubra o sabor único do nosso café artesanal, cultivado nas montanhas de Minas Gerais." },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
      <Cart />
    </>
  );
}
