import Image from "next/image";
import ProductImage from "../../public/assets/products1.jpg";
import ForkliftImage from "../../public/assets/forklift.jpg";
import KraftSectionImage from "../../public/assets/kraftimage.jpg";

export default function HeroProducts() {
  return (
    <div className="py-8">
      <div className="px-[20px]">
        <h1 className="text-center text-[24px] text-bluenitas leading-[40px] font-bold">
          What we have to offer
        </h1>
        <p className="text-center py-4 font-semibold text-[#405482]">
          We offer a variety of GRAPHIC (LWC, SC, newspaper, wood-free,
          cardboard) and PACKING (kraft, polyethylene) papers.
        </p>
      </div>
      <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 w-full md:w-3/4 lg:-skew-x-[30deg] rounded-lg">
        <h1 className="pt-[5px] lg:skew-x-[30deg] font-semibold">
          Graphic papers
        </h1>
      </div>
      <div className="relative lg:flex my-8">
        <div className="w-full lg:w-2/4 lg:py-6 ">
          <Image
            src={ForkliftImage}
            alt="hero image"
            className="object-cover lg:rounded-bl-[10px] lg:hover:rounded-bl-[50px] lg:rounded-tr-[10px] lg:hover:rounded-tr-[50px]"
          />
        </div>
        <div className="w-full lg:w-2/4">
          <div>
            <div className="px-[20px] py-4 lg:w-3/4 lg:skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4">
              <h1 className="text-left text-[24px] lg:-skew-x-[30deg] text-bluenitas font-semibold mt-8 px-8 underline">
                LWC
              </h1>
              <p className="text-center pt-8 lg:-skew-x-[30deg] p-6 text-[#405482]">
                Lightweight coated (LWC) paper is made from a pulp achieved
                through a mechanical pulping process. This process grinds up
                logs or woodchips rather than using chemicals to separate the
                wood fibres.
              </p>
              <a href="/contact">
                <p className="text-center underline pt-2 pb-6 font-semibold border-b-2 border-bluenitas lg:-skew-x-[30deg] text-[#405482]">
                  Make an enquiry &rarr;
                </p>
              </a>
            </div>
          </div>

          <div className="lg:mt-8">
            <div className="px-[20px] py-4 lg:w-3/4 lg:-skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4">
              <h1 className="text-left text-[24px] lg:skew-x-[30deg] text-bluenitas font-semibold mt-8 px-8 underline">
                SC
              </h1>
              <p className="text-center pt-8 lg:skew-x-[30deg] p-6 text-[#405482]">
                Super-calendared (SC) paper is an uncoated grade with high
                gloss, primarily used for the publication of consumer magazines,
                catalogues, and advertising material.
              </p>
              <a href="/contact">
                <p className="text-center underline pt-2 pb-6 font-semibold border-b-2 border-bluenitas lg:skew-x-[30deg] text-[#405482]">
                  Make an enquiry &rarr;
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:flex my-6 pt-8">
        <div className="w-full lg:w-2/4 lg:py-6 ">
          <Image
            src={ProductImage}
            alt="hero image"
            className="object-cover lg:rounded-bl-[10px] lg:hover:rounded-bl-[50px] lg:rounded-tr-[10px] lg:hover:rounded-tr-[50px]"
          />
          <div className="lg:-mt-32">
            <div className="px-[20px] py-4 lg:w-3/4 lg:-skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4">
              <h1 className="text-left text-[24px] lg:skew-x-[30deg] text-bluenitas font-semibold mt-8 px-8 underline">
                Wood-free paper
              </h1>
              <p className="text-center pt-8 lg:skew-x-[30deg] p-12 text-[#405482]">
                Wood-free paper, also known as tree-free paper, is created
                exclusively from chemical pulp rather than mechanical pulp.
                Unlike mechanical pulp, which retains most of its wood
                components, chemical pulp is made from pulpwood with most of the
                lignin removed during processing. This removal of lignin makes
                wood-free paper less susceptible to yellowing as it ages. We
                offer uncoated and coated wood-free paper.
              </p>
              <a href="/contact">
                <p className="text-center underline pt-2 pb-6 font-semibold border-b-2 border-bluenitas lg:skew-x-[30deg] text-[#405482]">
                  Make an enquiry &rarr;
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/4">
          <div>
            <div className="px-[20px] py-4 lg:w-3/4 lg:skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4">
              <h1 className="text-left text-[24px] lg:-skew-x-[30deg] text-bluenitas font-semibold mt-8 px-8 underline">
                Newspaper
              </h1>
              <p className="text-center pt-8 lg:-skew-x-[30deg] p-6 text-[#405482]">
                Newsprint is a low-cost, non-archival paper consisting mainly of
                wood pulp and most commonly used to print newspapers and other
                publications and advertising material. The paper typically has
                an off-white color and a distinctive feel.
              </p>
              <a href="/contact">
                <p className="text-center underline pt-2 pb-6 font-semibold border-b-2 border-bluenitas lg:-skew-x-[30deg] text-[#405482]">
                  Make an enquiry &rarr;
                </p>
              </a>
            </div>
          </div>

          <div className="lg:mt-8">
            <div className="px-[20px] py-4 lg:w-3/4 lg:-skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4">
              <h1 className="text-left text-[24px] lg:skew-x-[30deg] text-bluenitas font-semibold mt-8 px-8 underline">
                Cardboard
              </h1>
              <p className="text-center pt-8 lg:skew-x-[30deg] p-12 text-[#405482]">
                Cardboard can be easily cut and formed, is lightweight, and
                because it is strong, is used in packaging. Another end-use is
                high quality graphic printing, such as book and magazine covers
                or postcards. Paperboard is also used in fine arts for creating
                sculptures.
              </p>
              <a href="/contact">
                <p className="text-center underline pt-2 pb-6 font-semibold border-b-2 border-bluenitas lg:skew-x-[30deg] text-[#405482]">
                  Make an enquiry &rarr;
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 w-full md:w-3/4 lg:-skew-x-[30deg] rounded-lg">
        <h1 className="pt-[5px] lg:skew-x-[30deg] font-semibold lg:mt-12">
          Packing papers
        </h1>
      </div>

      <div className="relative lg:flex my-8">
        <div className="w-full lg:w-2/4 lg:py-6 ">
          <Image
            src={KraftSectionImage}
            alt="hero image"
            className="object-cover lg:rounded-bl-[10px] lg:hover:rounded-bl-[50px] lg:rounded-tr-[10px] lg:hover:rounded-tr-[50px]"
          />
        </div>
        <div className="w-full lg:w-2/4">
          <div>
            <div className="px-[20px] py-4 lg:w-3/4 lg:skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4">
              <h1 className="text-left text-[24px] lg:-skew-x-[30deg] text-bluenitas font-semibold mt-8 px-8 underline">
                Kraft paper
              </h1>
              <p className="text-center pt-8 lg:-skew-x-[30deg] p-6 text-[#405482]">
                Our kraft paper derives from cooperation with Gruenewald paper
                factories which target non-European markets exclusively, notably
                Africa and Asia
              </p>
              <a href="/contact">
                <p className="text-center underline pt-2 pb-6 font-semibold border-b-2 border-bluenitas lg:-skew-x-[30deg] text-[#405482]">
                  Make an enquiry &rarr;
                </p>
              </a>
            </div>
          </div>

          <div className="lg:mt-8">
            <div className="px-[20px] py-4 lg:w-3/4 lg:-skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4">
              <h1 className="text-left text-[24px] lg:skew-x-[30deg] text-bluenitas font-semibold mt-8 px-8 underline">
                Kraft paper with polyethylene
              </h1>
              <p className="text-center pt-8 lg:skew-x-[30deg] p-6 text-[#405482]">
                Kraft paper coated with polyethylene serves as a reliable
                moisture and grease barrier. It is commonly used in packaging
                and other applications where safeguarding against environmental
                factors is essential. Our kraft paper derives from cooperate+ion
                with Gruenewald paper factories which target non-European
                markets exclusively, notably Africa and Asia.
              </p>
              <a href="/contact">
                <p className="text-center underline pt-2 pb-6 font-semibold border-b-2 border-bluenitas lg:skew-x-[30deg] text-[#405482]">
                  Make an enquiry &rarr;
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
