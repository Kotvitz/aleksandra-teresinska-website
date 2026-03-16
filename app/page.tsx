import Header from "./src/components/Header";
import Hero from "./src/components/Hero";


export default function Home() {
  return (
    <main className="bg-(--surface) text-(--text)">
      <Header />
      <Hero />
    </main>
  );
}