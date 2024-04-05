import Image from "next/image";
import HeroImage from "../../public/assets/Untitled.jpg";
import HeroContent from "./content/herocontent";
import HomeContent from "./content/homecontent";

export default function HomePage() {
  return (
    <div className="py-8">
      <HeroContent
        title="Over 15 years of experience"
        content="in the confectionery paper and paper processing industry"
      />

      <div className="relative lg:flex my-8">
        <div className="w-full lg:w-2/4 lg:py-6 ">
          <Image
            src={HeroImage}
            alt="hero image"
            className="object-cover lg:rounded-bl-[10px] lg:hover:rounded-bl-[50px] lg:rounded-tr-[10px] lg:hover:rounded-tr-[50px]"
          />
        </div>
        <div className="w-full lg:w-2/4">
          <HomeContent
            title="A family business..."
            content="Founded in 1999 originally as a bakery and based in Teslić,
                Bosnia and Herzegovina, we are a family business which, for the
                last 15 years, specializes in processing paper. We deal with
                confectionary, graphic and packing paper.
                Our services include custom paper cutting, reel to reel as well
                as reel to sheet processing. We also do stock-lots with kraft
                paper."
            divDirection="left"
            titleDivDirection="left"
          />

          <HomeContent
            title="Our vision..."
            content="Our companys primary goal is to provide quality, in which we are
                proven by our long-term customer satisfaction, a trait that goes
                for as long as our 15 years of paper industry history can be
                traced. We are also in the process of expanding our cooperation
                with clients from out of Europe, thus targeting the African and
                Asian markets."
            divDirection="right"
            titleDivDirection="left"
          />
        </div>
      </div>
    </div>
  );
}
