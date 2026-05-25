import Footer from "../components/footer";
import ProductsPage from "../components/products";
import NavBar from "../components/navbar";

export default function Products() {
  return (
    <>
      <NavBar/>
      <div className="px-[10px] sm:px-[15px] md:px-[25px] lg:px-[40px] xl:px-[60px]">
        <ProductsPage/>
      </div>
      <Footer/>
    </>
  );
}
