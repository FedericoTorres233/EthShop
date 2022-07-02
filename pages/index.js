import Image from "next/image";
import MyCarousel from "../components/MyCarousel";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <MyCarousel />
    </>
  );
}
