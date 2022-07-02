import Image from "next/image";
import MyCarousel from "../components/MyCarousel";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
    <header style={{background:"hsl(210, 50%, 15%)"}}>
      <NavBar />
      <MyCarousel />
      </header>
    </>
  );
}
