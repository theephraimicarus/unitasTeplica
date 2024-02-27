import Image from "next/image";
import HeroImage from "../../public/assets/untitled.jpg";
import HeroSlideImage from "../../public/assets/heroslideshowimage.jpg";

export default function Hero() {
  return (
    <div className="py-8">
      <div className="px-[20px]">
        <h1 className="text-center text-[24px] text-bluenitas leading-[40px] font-semibold">
          What we have to offer
        </h1>
        <p className="text-center py-4">
          We offer a variety of graphic (LWC, SC, newspaper, woodless,
          cardboard) and confectionery (Gruenewald) papers.
        </p>
      </div>

      <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 ml-3 w-3/4">
        <h1 className="pt-[5px]">Graphic papers</h1>
      </div>

      <h1 className="text-left text-[24px] text-bluenitas font-semibold mt-8 px-8 underline">
        LWC
      </h1>
      <div className="px-[20px] py-4">
        <p className="text-center pt-8">
          Lightweight coated (LWC) paper is made from a pulp achieved through a
          mechanical pulping process. This process grinds up logs or woodchips
          rather than using chemicals to separate the wood fibres.
        </p>
        <p className="text-center py-1 px-2">Paper weight: 36-70 gsm</p>
        <p className="text-center py-1 px-2">Brightness: Standard</p>
      </div>
      <p className="text-center underline pt-2 pb-12 font-semibold border-b-2 border-bluenitas">
        <a href="/contact">Make an enquiry &rarr;</a>
      </p>

      <h1 className="text-left text-[24px] text-bluenitas font-semibold mt-8 px-8 underline">
        SC
      </h1>
      <div className="px-[20px] py-4">
        <p className="text-center pt-8">
          Supercalendered (SC) is uncoated paper for rotogravure and heat set
          web offset
        </p>
        <p className="text-center py-1 px-2">Paper weight: 36-70 gsm</p>
        <p className="text-center py-1 px-2">Brightness: Standard</p>
      </div>
      <p className="text-center underline pt-2 pb-12 font-semibold border-b-2 border-bluenitas">
        <a href="/contact">Make an enquiry &rarr;</a>
      </p>

      <h1 className="text-left text-[24px] text-bluenitas font-semibold mt-8 px-8 underline">
        Newspaper
      </h1>
      <div className="px-[20px] py-4">
        <p className="text-center pt-8">
          Lightweight coated (LWC) paper is made from a pulp achieved through a
          mechanical pulping process. This process grinds up logs or woodchips
          rather than using chemicals to separate the wood fibres.
        </p>
        <p className="text-center py-1 px-2">Paper weight: 36-70 gsm</p>
        <p className="text-center py-1 px-2">Brightness: Standard</p>
      </div>
      <p className="text-center underline pt-2 pb-12  font-semibold border-b-2 border-bluenitas">
        <a href="/contact">Make an enquiry &rarr;</a>
      </p>

      <h1 className="text-left text-[24px] text-bluenitas font-semibold mt-8 px-8 underline">
        Woodfree paper
      </h1>
      <div className="px-[20px] py-4">
        <p className="text-center pt-8">
          Lightweight coated (LWC) paper is made from a pulp achieved through a
          mechanical pulping process. This process grinds up logs or woodchips
          rather than using chemicals to separate the wood fibres.
        </p>
        <p className="text-center py-1 px-2">Paper weight: 36-70 gsm</p>
        <p className="text-center py-1 px-2">Brightness: Standard</p>
      </div>
      <p className="text-center underline pt-2 pb-12 font-semibold border-b-2 border-bluenitas">
        <a href="/contact">Make an enquiry &rarr;</a>
      </p>

      <h1 className="text-left text-[24px] text-bluenitas font-semibold mt-8 px-8 underline">
        Cardboard
      </h1>
      <div className="px-[20px] py-4">
        <p className="text-center pt-8">
          Lightweight coated (LWC) paper is made from a pulp achieved through a
          mechanical pulping process. This process grinds up logs or woodchips
          rather than using chemicals to separate the wood fibres.
        </p>
        <p className="text-center py-1 px-2">Paper weight: 36-70 gsm</p>
        <p className="text-center py-1 px-2">Brightness: Standard</p>
      </div>
      <p className="text-center underline pt-2 pb-12 font-semibold border-b-2 border-bluenitas">
        <a href="/contact">Make an enquiry &rarr;</a>
      </p>

      <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 ml-3 w-3/4">
        <h1 className="pt-[5px]">Craft paper</h1>
      </div>

      <h1 className="text-left text-[24px] text-bluenitas font-semibold mt-8 px-8 underline">
        Polyethilin craft paper
      </h1>
      <div className="px-[20px] py-4">
        <p className="text-center pt-8">
          Lightweight coated (LWC) paper is made from a pulp achieved through a
          mechanical pulping process. This process grinds up logs or woodchips
          rather than using chemicals to separate the wood fibres.
        </p>
        <p className="text-center py-1 px-2">Paper weight: 36-70 gsm</p>
        <p className="text-center py-1 px-2">Brightness: Standard</p>
      </div>
      <p className="text-center underline pt-2 pb-12 font-semibold border-b-2 border-bluenitas">
        <a href="/contact">Make an enquiry &rarr;</a>
      </p>
    </div>
  );
}
