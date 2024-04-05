const ProductContent = (props: { title: string; content: string; divDirection: string; }) => {
   const divClassName="px-[20px] py-4 lg:w-3/4 lg:"+((props.divDirection==="left")?"":"-")+"skew-x-[30deg] lg:bg-[#E9E5D3] rounded-lg mt-4";
   const h1ClassName="text-left text-[24px] lg:"+((props.divDirection==="left")?"-":"")+"skew-x-[30deg] text-bluenitas font-semibold mt-8 px-8 underline";
   const pClassName="text-center pt-8 lg:"+((props.divDirection==="left")?"-":"")+"skew-x-[30deg] p-6 text-[#405482]";
   const apClassname="text-center underline pt-2 pb-6 font-semibold border-b-2 border-bluenitas lg:"+((props.divDirection==="left")?"-":"")+"skew-x-[30deg] text-[#405482]";

  return (
    <div>
      <div className={divClassName}>
        <h1 className={h1ClassName}>
          {props.title}
        </h1>
        <p className={pClassName}>
          {props.content}
        </p>
        <a href="/contact">
          <p className={apClassname}>
            Make an enquiry &rarr;
          </p>
        </a>
      </div>
    </div>
  );
};
export default ProductContent;
