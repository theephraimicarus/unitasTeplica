import Image from "next/image";
import HeroImage from "../../public/assets/untitled.jpg";
import HeroSlideImage from "../../public/assets/heroslideshowimage.jpg";

export default function Hero() {
  return (
    <div className="py-8">
      <div className="px-[20px]">
        <h1 className="text-center text-[24px] text-bluenitas leading-[40px] font-semibold">
          Over 25 years of experience
        </h1>
        <p className="text-center py-4">
          in the confectionery paper and paper processing industry
        </p>
      </div>

      <div className="flex w-full py-6">
        <div className="lg:w-2/4">
          <Image src={HeroImage} alt="hero image" className="object-cover" />
        </div>
      </div>

      <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 ml-3 w-3/4">
        <h1 className="pt-[5px]">A family business...</h1>
      </div>
      <div className="px-[20px] py-4">
        <p className="text-center pt-8">
          Founded in 1999 and based in Teslica, Bosnia and Herzegovina, we are a
          family business specialized in processing paper. We deal with
          confectionary, graphic and{" "}
          <a href="https://gruenewald-papier.de/en/">
            <span className="underline-pt-1 font-bold text-bluenitas">
              Gruenewald paper&rarr;
            </span>
          </a>
          . Our services include custom paper cutting, reel to reel as well as
          reel to sheet processing. We also do stock-lots with{" "}
          <a href="https://gruenewald-papier.de/en/">
            <span className="underline-pt-1 font-bold text-bluenitas">
              Gruenewald paper&rarr;
            </span>
          </a>
          .
        </p>
      </div>

      <a href="/products">
        <p className="text-center underline pt-2 pb-6 font-semibold">View our products &rarr;</p>
      </a>

      <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 ml-3 w-3/4">
        <h1 className="pt-[5px]">Our vision...</h1>
      </div>
      <div className="px-[20px] py-4">
        <p className="text-center pt-8">
          Our companys primary goal is to provide quality, in which we are
          proven by our long-term customer satisfaction, a trait that goes for
          as long as our 25 years of history can be traced. We are also in the
          process of expanding our cooperation with clients from out of Europe,
          thus targeting the African and Asian markets.
        </p>
      </div>
      <div className="flex w-full pt-6">
        <div className="lg:w-2/4">
          <Image
            src={HeroSlideImage}
            alt="hero image"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
