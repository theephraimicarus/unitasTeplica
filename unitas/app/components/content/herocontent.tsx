const HeroContent=(props:{title:string, content:string})=> {
  return (
    <div className="px-[20px] fade-in-up">
      <h1 className="text-center text-[24px] lg:text-display-md text-bluenitas leading-[1.2] lg:leading-[1.3] font-bold text-balance tracking-tight">
        {props.title}
      </h1>
      <p className="text-center py-4 lg:py-6 font-semibold text-nitas-text text-body lg:text-body-lg text-balance leading-[1.7] lg:leading-[1.8] tracking-wide">
        {props.content}
      </p>
    </div>
  );
}
export default HeroContent;
