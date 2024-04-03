"use client";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Slideshow from "./components/slide"

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Slideshow/>
      <Footer/>
    </>
  );
}
