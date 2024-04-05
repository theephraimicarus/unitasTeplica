const HomeContent = (props: {
  title: string;
  content: string;
  divDirection: string;
  titleDivDirection: string;
}) => {
  const divClassName =
    "px-[20px] py-4 lg:w-3/4 lg:" +
    (props.divDirection === "left" ? "" : "-") +
    "skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4";
  const pClassName =
    "text-center pt-8 lg:" +
    (props.divDirection === "left" ? "-" : "") +
    "skew-x-[30deg] p-6 text-[#405482]";
  const apClassname =
    "text-center underline pt-2 pb-6 font-semibold lg:" +
    (props.divDirection === "left" ? "-" : "") +
    "skew-x-[30deg] text-[#405482]";
  const divTitleClassName =
    "h-[36px] bg-bluenitas text-whitenitas text-center text-4 mt-8 w-full md:w-3/4 lg:" +
    (props.divDirection === "left" ? "-" : "") +
    "skew-x-[30deg] rounded-lg";
  const h1TitleClassname =
    "pt-[5px] lg:" +
    (props.divDirection === "left" ? "" : "-") +
    "skew-x-[30deg] font-semibold";

  return (
    <div>
      <div className={divTitleClassName}>
        <h1 className={h1TitleClassname}>{props.title}</h1>
      </div>
      <div className={divClassName}>
        <p className={pClassName}>{props.content}</p>
        <a href="/products">
          <p className={apClassname}>View our products &rarr;</p>
        </a>
      </div>
    </div>
  );
};
export default HomeContent;
