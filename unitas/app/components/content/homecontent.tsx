const HomeContent = (props: {
  title: string;
  content: string;
  divDirection: string;
  titleDivDirection: string;
  delay?: string;
}) => {
  const isLeft = props.divDirection === "left";
  const isTitleLeft = props.titleDivDirection === "left";
  const delay = props.delay || "delay-100";

  return (
    <div className={`fade-in-up ${delay}`}>
      {/* Title Bar */}
      {isTitleLeft ? (
        <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 w-full md:w-3/4 lg:-skew-x-[30deg] rounded-lg skew-transition">
          <h1 className="pt-[5px] lg:skew-x-[30deg] font-semibold text-whitenitas">{props.title}</h1>
        </div>
      ) : (
        <div className="h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 w-full md:w-3/4 lg:skew-x-[30deg] rounded-lg skew-transition">
          <h1 className="pt-[5px] lg:-skew-x-[30deg] font-semibold text-whitenitas">{props.title}</h1>
        </div>
      )}

      {/* Content Box */}
      {isLeft ? (
        <div className="px-[20px] py-6 lg:py-8 w-full lg:-skew-x-[30deg] lg:bg-nitas-beige rounded-lg mt-4 skew-transition content-box-depth">
          <p className="text-center pt-6 lg:pt-8 lg:skew-x-[30deg] p-6 lg:p-8 text-nitas-text leading-[1.75] lg:leading-[1.8]">{props.content}</p>
          <a href="/products" className="underline-animate">
            <p className="text-center underline pt-3 pb-6 font-semibold lg:skew-x-[30deg] text-nitas-text hover:text-bluenitas transition-colors duration-300">
              View our products &rarr;
            </p>
          </a>
        </div>
      ) : (
        <div className="px-[20px] py-6 lg:py-8 w-full lg:skew-x-[30deg] lg:bg-nitas-beige rounded-lg mt-4 skew-transition content-box-depth">
          <p className="text-center pt-6 lg:pt-8 lg:-skew-x-[30deg] p-6 lg:p-8 text-nitas-text leading-[1.75] lg:leading-[1.8]">{props.content}</p>
          <a href="/products" className="underline-animate">
            <p className="text-center underline pt-3 pb-6 font-semibold lg:-skew-x-[30deg] text-nitas-text hover:text-bluenitas transition-colors duration-300">
              View our products &rarr;
            </p>
          </a>
        </div>
      )}
    </div>
  );
};
export default HomeContent;
