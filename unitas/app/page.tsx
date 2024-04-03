"use client";
import HeroMain from "./components/heromain";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Slideshow from "./components/slide"

export default function Home() {
  return (
    <>
      <NavBar/>
      <HeroMain/>
      <Slideshow/>
      <Footer/>
    </>
  );
}
