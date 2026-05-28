import ProductImage from "../../public/assets/products1.jpg";
import ForkliftImage from "../../public/assets/forklift.jpg";
import KraftSectionImage from "../../public/assets/kraftimage.jpg";
import HeroContent from "./content/herocontent";
import ProductContent from "./content/productcontent";
import ResponsiveImage from "./ResponsiveImage";

export default function ProductsPage() {
  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="relative w-screen max-w-none left-1/2 -translate-x-1/2 transform">
        <ResponsiveImage src={ProductImage} alt="products hero image" />
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-4 mt-6 lg:mt-10 px-[20px]">
        <HeroContent
          title="What we have to offer"
          content="We offer a wide range of GRAPHIC (LWC, SC, newspaper, wood-free, cardboard) and PACKAGING (kraft, polyethylene) papers.

As a responsible and reliable partner, we work with well-known European paper manufacturers and brands such as Steinbeis Papier, Burgo Group, Sappi, Stora Enso, and LEIPA, ensuring consistent quality, sustainable sourcing, and dependable service for our customers."
        />
      </div>

      <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 lg:mt-12 w-full md:w-3/4 mx-auto lg:-skew-x-[30deg] rounded-lg skew-transition">
        <h1 className="pt-[5px] lg:skew-x-[30deg] font-semibold text-whitenitas">
          Graphic papers
        </h1>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-4">
        {/* Row 1: LWC and SC side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 lg:my-12">
          <div>
            <ProductContent
              title="LWC"
              content="Lightweight coated (LWC) paper is made from a pulp achieved
                through a mechanical pulping process. This process grinds up
                logs or woodchips rather than using chemicals to separate the
                wood fibres."
              divDirection="left"
            />
          </div>

          <div>
            <ProductContent
              title="SC"
              content="Super-calendared (SC) paper is an uncoated grade with high
                gloss, primarily used for the publication of consumer magazines,
                catalogues, and advertising material."
              divDirection="right"
            />
          </div>
        </div>

        {/* Row 2: Image next to Wood-free paper */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 my-8 lg:my-12 items-center">
          <div className="w-full lg:w-1/2">
            <ResponsiveImage src={ForkliftImage} alt="forklift with paper" />
          </div>
          <div className="w-full lg:w-1/2">
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

        {/* Row 3: Newspaper and Cardboard centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 lg:my-12 justify-center items-start">
          <div className="mx-auto lg:mx-0">
            <ProductContent
              title="Newspaper"
              content="Newsprint is a low-cost, non-archival paper consisting mainly of
                wood pulp and most commonly used to print newspapers and other
                publications and advertising material. The paper typically has
                an off-white color and a distinctive feel."
              divDirection="left"
            />
          </div>

          <div className="mx-auto lg:mx-0">
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

      <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-12 lg:mt-16 w-full md:w-3/4 mx-auto lg:-skew-x-[30deg] rounded-lg skew-transition">
        <h1 className="pt-[5px] lg:skew-x-[30deg] font-semibold text-whitenitas">
          Packing papers
        </h1>
      </div>

      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 my-8 lg:my-12">
        <div className="w-full lg:w-2/4">
          <ResponsiveImage src={KraftSectionImage} alt="kraft paper section" />
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
