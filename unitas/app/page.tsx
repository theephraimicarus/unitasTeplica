"use client";
import HomePage from "./components/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Slideshow from "./components/slideshow"

export default function Home() {
  return (
    <>
      <NavBar/>
      <HomePage/>
      <Slideshow/>
      <Footer/>
    </>
  );
}
