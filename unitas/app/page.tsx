"use client";
import HomePage from "./components/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Slideshow from "./components/slideshow"

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="px-[10px] sm:px-[15px] md:px-[25px] lg:px-[40px] xl:px-[60px]">
        <HomePage/>
        <Slideshow/>
      </div>
      <Footer/>
    </>
  );
}
