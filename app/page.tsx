import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 min-h-screen">
      <Header />
      <Hero />
    </main>
  );
}
