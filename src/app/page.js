import Image from "next/image";
import Hero from "./components/Hero/Hero";
import SectionTitle from "./components/Section-Title/SectionTitle";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <SectionTitle></SectionTitle>
    </div>
  );
}
