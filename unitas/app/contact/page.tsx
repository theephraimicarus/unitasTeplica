import Footer from "../components/footer";
import ContactPage from "../components/contact";
import NavBar from "../components/navbar";

export default function Contact() {
  return (
    <>
      <NavBar/>
      <div className="px-[10px] sm:px-[15px] md:px-[25px] lg:px-[40px] xl:px-[60px]">
        <ContactPage/>
      </div>
      <Footer/>
    </>
  );
}
