const ProductContent = (props: { title: string; content: string; divDirection: string; delay?: string; }) => {
  const isLeft = props.divDirection === "left";
  const delay = props.delay || "delay-100";

  return (
    <div className={`fade-in-up ${delay}`}>
      {isLeft ? (
        <div className="px-[20px] py-6 lg:py-8 lg:w-3/4 lg:-skew-x-[30deg] lg:bg-nitas-beige rounded-lg mt-4 skew-transition content-box-depth">
          <h1 className="text-left text-[24px] lg:text-[26px] lg:skew-x-[30deg] text-bluenitas font-semibold mt-8 px-8 underline tracking-tight">
            {props.title}
          </h1>
          <p className="text-center pt-6 lg:pt-8 lg:skew-x-[30deg] p-6 lg:p-8 text-nitas-text leading-[1.75] lg:leading-[1.8]">
            {props.content}
          </p>
          <a href="/contact" className="underline-animate">
            <p className="text-center underline pt-3 pb-6 font-semibold border-b-2 border-bluenitas lg:skew-x-[30deg] text-nitas-text hover:text-bluenitas transition-colors duration-300">
              Make an enquiry &rarr;
            </p>
          </a>
        </div>
      ) : (
        <div className="px-[20px] py-6 lg:py-8 lg:w-3/4 lg:skew-x-[30deg] lg:bg-nitas-beige rounded-lg mt-4 skew-transition content-box-depth">
          <h1 className="text-left text-[24px] lg:text-[26px] lg:-skew-x-[30deg] text-bluenitas font-semibold mt-8 px-8 underline tracking-tight">
            {props.title}
          </h1>
          <p className="text-center pt-6 lg:pt-8 lg:-skew-x-[30deg] p-6 lg:p-8 text-nitas-text leading-[1.75] lg:leading-[1.8]">
            {props.content}
          </p>
          <a href="/contact" className="underline-animate">
            <p className="text-center underline pt-3 pb-6 font-semibold border-b-2 border-bluenitas lg:-skew-x-[30deg] text-nitas-text hover:text-bluenitas transition-colors duration-300">
              Make an enquiry &rarr;
            </p>
          </a>
        </div>
      )}
    </div>
  );
};
export default ProductContent;
