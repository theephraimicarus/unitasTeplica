import Image from "next/image";
import ProductImage from "../../public/assets/products1.jpg";
import ForkliftImage from "../../public/assets/forklift.jpg";
import KraftSectionImage from "../../public/assets/kraftimage.jpg";
import HeroContent from "./content/herocontent";
import ProductContent from "./content/productcontent";

export default function ProductsPage() {
  return (
    <div className="py-8">
      <HeroContent
        title="What we have to offer"
        content="We offer a variety of GRAPHIC (LWC, SC, newspaper, wood-free,
          cardboard) and PACKING (kraft, polyethylene) papers."
      />

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
          <ProductContent
            title="LWC"
            content="Lightweight coated (LWC) paper is made from a pulp achieved
                through a mechanical pulping process. This process grinds up
                logs or woodchips rather than using chemicals to separate the
                wood fibres."
            divDirection="left"
          />

          <div className="lg:mt-8">
            <ProductContent
              title="SC"
              content="Super-calendared (SC) paper is an uncoated grade with high
                gloss, primarily used for the publication of consumer magazines,
                catalogues, and advertising material."
              divDirection="right"
            />
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
            <ProductContent
              title="Wood-free paper"
              content="Wood-free paper, also known as tree-free paper, is created
                exclusively from chemical pulp rather than mechanical pulp.
                Unlike mechanical pulp, which retains most of its wood
                components, chemical pulp is made from pulpwood with most of the
                lignin removed during processing. This removal of lignin makes
                wood-free paper less susceptible to yellowing as it ages. We
                offer uncoated and coated wood-free paper."
              divDirection="right"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/4">
          <ProductContent
            title="Newspaper"
            content="Newsprint is a low-cost, non-archival paper consisting mainly of
                wood pulp and most commonly used to print newspapers and other
                publications and advertising material. The paper typically has
                an off-white color and a distinctive feel."
            divDirection="left"
          />

          <div className="lg:mt-8">
            <ProductContent
              title="Cardboard"
              content="Cardboard can be easily cut and formed, is lightweight, and
                because it is strong, is used in packaging. Another end-use is
                high quality graphic printing, such as book and magazine covers
                or postcards. Paperboard is also used in fine arts for creating
                sculptures."
              divDirection="right"
            />
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
            <ProductContent
              title="Kraft paper"
              content="Kraft paper or kraft is paper or paperboard produced from
                chemical pulp produced in the kraft process. Sack kraft paper is
                a porous kraft paper with high elasticity and high tear
                resistance, designed for packaging products with high demands
                for strength and durability. Our kraft paper derives from
                cooperation with Gruenewald paper factories which target
                non-European markets exclusively, notably Africa and Asia."
              divDirection="left"
            />
          </div>

          <div className="lg:mt-8">
            <ProductContent
              title="Kraft paper with polyethylene"
              content="Kraft paper coated with polyethylene serves as a reliable
                moisture and grease barrier. It is commonly used in packaging
                and other applications where safeguarding against environmental
                factors is essential."
              divDirection="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
