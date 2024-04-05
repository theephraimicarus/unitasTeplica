const HeroContent=(props:{title:string, content:string})=> {
  return (
    <div className="px-[20px]">
        <h1 className="text-center text-[24px] text-bluenitas leading-[40px] font-bold">
          {props.title}
        </h1>
        <p className="text-center py-4 font-semibold text-[#405482]">
          {props.content}
        </p>
      </div>
  );
}
export default HeroContent;
