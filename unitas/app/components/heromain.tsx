import Image from "next/image";
import HeroImage from "../../public/assets/Untitled.jpg";

export default function HeroMain() {
  return (
    <div className="py-8">
      <div className="px-[20px]">
        <h1 className="text-center text-[24px] text-bluenitas leading-[40px] font-bold">
          Over 15 years of experience
        </h1>
        <p className="text-center py-4 font-semibold text-[#405482]">
          in the confectionery paper and paper processing industry
        </p>
      </div>

      <div className="relative lg:flex my-8">
        <div className="w-full lg:w-2/4 lg:py-6 ">
          <Image
            src={HeroImage}
            alt="hero image"
            className="object-cover lg:rounded-bl-[10px] lg:hover:rounded-bl-[50px] lg:rounded-tr-[10px] lg:hover:rounded-tr-[50px]"
          />
        </div>
        <div className="w-full lg:w-2/4">
          <div>
            <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 w-full md:w-3/4 lg:-skew-x-[30deg] rounded-lg">
              <h1 className="pt-[5px] lg:skew-x-[30deg] font-semibold">
                A family business...
              </h1>
            </div>
            <div className="px-[20px] py-4 lg:w-3/4 lg:skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4">
              <p className="text-center pt-8 lg:-skew-x-[30deg] p-6 text-[#405482]">
                Founded in 1999 originally as a bakery and based in Teslić,
                Bosnia and Herzegovina, we are a family business which, for the
                last 15 years, specializes in processing paper. We deal with
                confectionary, graphic and packing paper.
                <br />
                Our services include custom paper cutting, reel to reel as well
                as reel to sheet processing. We also do stock-lots with kraft
                paper.
              </p>
              <a href="/products">
                <p className="text-center underline pt-2 pb-6 font-semibold lg:-skew-x-[30deg] text-[#405482]">
                  View our products &rarr;
                </p>
              </a>
            </div>
          </div>
          <div>
            <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 w-full md:w-3/4 lg:skew-x-[30deg] rounded-lg">
              <h1 className="pt-[5px] lg:-skew-x-[30deg] font-semibold">
                Our vision...
              </h1>
            </div>
            <div className="px-[20px] py-4 lg:w-3/4 lg:-skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4">
              <p className="text-center pt-8 lg:skew-x-[30deg] p-6 text-[#405482]">
                Our companys primary goal is to provide quality, in which we are
                proven by our long-term customer satisfaction, a trait that goes
                for as long as our 15 years of paper industry history can be
                traced. We are also in the process of expanding our cooperation
                with clients from out of Europe, thus targeting the African and
                Asian markets.
              </p>
              <a href="/products">
                <p className="text-center underline pt-2 pb-6 font-semibold lg:skew-x-[30deg] text-[#405482]">
                  View our products &rarr;
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
