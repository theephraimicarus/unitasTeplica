import React from "react";
import Image from "next/image";
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
            src="/assets/Untitled.jpg"
            alt="hero image"
            width={500}
            height={500}
            className="object-cover lg:rounded-bl-[10px] lg:hover:rounded-bl-[50px] lg:rounded-tr-[10px] lg:hover:rounded-tr-[50px]"
          />
        </div>
        <div className="w-full lg:w-2/4">
          <HomeContent
            title="A family business..."
            content="Founded in 1999 and based in Teslić, we are a family-owned company specialized in paper processing and paper trading.
<br>
For more than 15 years, we have been working with confectionery, graphic, packaging, and kraft paper, providing reliable converting solutions for customers across different industries. Our services include custom paper cutting, reel-to-reel and reel-to-sheet processing, rewinding, and stock-lot paper trading.
<br>
With a strong focus on quality, flexibility, and fast delivery, we provide tailored paper solutions adapted to our customers specific requirements."
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
