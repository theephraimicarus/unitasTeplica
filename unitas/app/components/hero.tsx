import Image from "next/image";
import HeroImage from "../../public/assets/Untitled.jpg";
import HeroSlideImage from "../../public/assets/heroslideshowimage.jpg";

export default function Hero() {
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
            <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 ml-3 w-3/4 lg:-skew-x-[30deg] rounded-lg">
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
            <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 ml-3 w-3/4 lg:skew-x-[30deg] rounded-lg">
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

      <div className="relative mt-8 lg:flex lg:mt-24">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
    
    <div className="relative h-56 lg:h-[600px] overflow-hidden rounded-lg md:h-96">
        
        <div className="duration-700 ease-in-out" data-carousel-item>
            <Image src={HeroSlideImage} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={HeroImage} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={HeroImage} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={HeroImage} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={HeroImage} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
  
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
      </div>
    </div>
  );
}
