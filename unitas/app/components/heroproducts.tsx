import Image from "next/image";
import ProductImage from "../../public/assets/products.jpg";


export default function Hero() {
  return (
    <div className="py-8">
      <div className="px-[20px]">
        <h1 className="text-center text-[24px] text-bluenitas leading-[40px] font-semibold">
          What we have to offer
        </h1>
        <p className="text-center py-4">
          We offer a variety of graphic (LWC, SC, newspaper, wood-free,
          cardboard) and confectionery (kraft, polyethylene) papers.
        </p>
      </div>

      <div className="flex w-full py-6">
        <div className="lg:w-2/4">
          <Image src={ProductImage} alt="hero image" className="object-cover" />
        </div>
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
          Super-calendared (SC) paper is an uncoated grade with high gloss,
          primarily used for the publication of consumer magazines, catalogues,
          and advertising material.
        </p>
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
          Newsprint is a low-cost, non-archival paper consisting mainly of wood
          pulp and most commonly used to print newspapers and other publications
          and advertising material. The paper typically has an off-white color
          and a distinctive feel.
        </p>
        <p className="text-center py-1 px-2">Brightness: Standard</p>
      </div>
      <p className="text-center underline pt-2 pb-12  font-semibold border-b-2 border-bluenitas">
        <a href="/contact">Make an enquiry &rarr;</a>
      </p>

      <h1 className="text-left text-[24px] text-bluenitas font-semibold mt-8 px-8 underline">
        Wood-free paper
      </h1>
      <div className="px-[20px] py-4">
        <p className="text-center pt-8">
          Wood-free paper, also known as tree-free paper, is created exclusively
          from chemical pulp rather than mechanical pulp. Unlike mechanical
          pulp, which retains most of its wood components, chemical pulp is made
          from pulpwood with most of the lignin removed during processing. This
          removal of lignin makes wood-free paper less susceptible to yellowing
          as it ages. We offer uncoated and coated wood-free paper.
        </p>
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
          Cardboard can be easily cut and formed, is lightweight, and because it
          is strong, is used in packaging. Another end-use is high quality
          graphic printing, such as book and magazine covers or postcards.
          Paperboard is also used in fine arts for creating sculptures.
        </p>
        <p className="text-center py-1 px-2">Brightness: Standard</p>
      </div>
      <p className="text-center underline pt-2 pb-12 font-semibold border-b-2 border-bluenitas">
        <a href="/contact">Make an enquiry &rarr;</a>
      </p>

      <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 ml-3 w-3/4">
        <h1 className="pt-[5px]">Kraft paper</h1>
      </div>

      <h1 className="text-left text-[24px] text-bluenitas font-semibold mt-8 px-8 underline">
        Polyethylene kraft paper
      </h1>
      <div className="px-[20px] py-4">
        <p className="text-center pt-8">
          Kraft paper coated with polyethylene serves as a reliable moisture and
          grease barrier. It is commonly used in packaging and other
          applications where safeguarding against environmental factors is
          essential. Our kraft paper derives from cooperate+ion with Gruenewald
          paper factories which target non-European markets exclusively, notably
          Africa and Asia.
        </p>
        <p className="text-center py-1 px-2">Brightness: Standard</p>
      </div>
      <p className="text-center underline pt-2 pb-12 font-semibold border-b-2 border-bluenitas">
        <a href="/contact">Make an enquiry &rarr;</a>
      </p>
    </div>
  );
}
