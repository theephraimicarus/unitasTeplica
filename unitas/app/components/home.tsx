import React from "react";
import HeroContent from "./content/herocontent";
import HomeContent from "./content/homecontent";
import ResponsiveImage from "./ResponsiveImage";

export default function HomePage() {
  return (
    <div className="py-8 md:py-12 lg:py-16">
      <HeroContent
        title="Over 15 years of experience"
        content="in the confectionery paper and paper processing industry"
      />

      <div className="mx-auto w-full max-w-[1280px] px-4">
        <div className="relative w-full max-w-[1100px] mx-auto">
          <ResponsiveImage src="/assets/Untitled.jpg" alt="hero image" />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 mt-10">
          <div className="w-full lg:w-1/2">
            <HomeContent
              title="A family business..."
              content="Founded in 1999 and based in Teslić, we are a family-owned company specialized in paper processing and paper trading.
For more than 15 years, we have been working with confectionery, graphic, packaging, and kraft paper, providing reliable converting solutions for customers across different industries. Our services include custom paper cutting, reel-to-reel and reel-to-sheet processing, rewinding, and stock-lot paper trading.
With a strong focus on quality, flexibility, and fast delivery, we provide tailored paper solutions adapted to our customers specific requirements."
              divDirection="left"
              titleDivDirection="left"
              delay="delay-100"
            />
          </div>

          <div className="w-full lg:w-1/2">
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
              delay="delay-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
