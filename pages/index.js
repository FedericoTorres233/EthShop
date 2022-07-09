import Image from "next/image";
import Categories from "../components/Categories";
import MyCarousel from "../components/MyCarousel";

export default function Home() {
  return (
    <>
    <header style={{background:"hsl(210, 50%, 15%)"}}>
      <MyCarousel />
      <Categories/>
      </header>
    </>
  );
}
