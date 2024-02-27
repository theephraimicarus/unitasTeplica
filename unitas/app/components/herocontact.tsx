export default function HeroContact() {
  return (
    <div className="pt-6">
      <div className="px-[20px]">
        <h1 className="text-center text-[24px] text-bluenitas leading-[40px] font-semibold">
          For any enquiries, please fill out and submit the form below
        </h1>
       
      </div>
      <div className="w-full flex justify-center p-[50px]">
        <form>
          <input
            type="text"
            placeholder="Enter your name..."
            className="border-4 border-bluenitas/50"
          />
          <br />
          <br />
          <textarea
            rows={5}
            placeholder="Please write your enquiry here..."
            className="border-4 border-bluenitas/50 w-full"
          ></textarea>
          <br />

          <button className="bg-bluenitas/50 hover:bg-whitenitas text-whitenitas hover:text-bluenitas font-bold py-2 px-4 rounded-full border-2 border-bluenitas/50">
            Submit
          </button>
        </form>
      </div>
      <p className="text-center py-4 px-2">
        Email: info@unitaspaper.com <br />
          Mobile: +387 66 236 726<br/>
        </p>
    </div>
  );
}
