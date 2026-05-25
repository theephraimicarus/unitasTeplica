export default function ContactPage() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      {/* Main heading */}
      <div className="pt-6 mt-6 text-center flex justify-center items-center w-full fade-in-up">
        <div className="w-full sm:w-2/3 px-6">
          <h1 className="text-center text-[24px] lg:text-display-md text-bluenitas leading-[1.2] lg:leading-[1.3] font-semibold text-balance tracking-tight">
            For any enquiries, please feel free to contact us by email or via telephone
          </h1>
        </div>
      </div>

      {/* Email Section */}
      <div className="px-6 pt-8 lg:pt-12 my-8 md:my-12 text-center flex justify-center items-center w-full fade-in-up">
        <div className="w-full sm:w-2/3 text-bluenitas content-box-depth p-6 lg:p-8 rounded-lg">
          <h2 className="text-center text-[20px] lg:text-[24px] leading-[1.3] font-semibold tracking-tight">
            Email
          </h2>
          <a href="mailto:info@unitaspaper.com" className="underline-animate">
            <p className="text-[16px] lg:text-[18px] mt-4 text-nitas-text hover:text-bluenitas transition-colors duration-300 font-medium">
              info@unitaspaper.com
            </p>
          </a>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="px-6 pt-8 lg:pt-12 my-8 md:my-12 text-center flex justify-center items-center w-full fade-in-up">
        <div className="w-full sm:w-2/3 text-bluenitas content-box-depth p-6 lg:p-8 rounded-lg">
          <h2 className="text-center text-[20px] lg:text-[24px] leading-[1.3] font-semibold tracking-tight">
            Mobile
          </h2>
          <a href="tel:+387 66 236 726" className="underline-animate">
            <p className="text-[16px] lg:text-[18px] mt-4 text-nitas-text hover:text-bluenitas transition-colors duration-300 font-medium">
              +387 66 236 726
            </p>
          </a>
        </div>
      </div>

      {/* Company Address Section */}
      <div className="px-6 pt-8 lg:pt-12 my-8 md:my-12 text-center flex justify-center items-center w-full fade-in-up">
        <div className="w-full sm:w-2/3 text-bluenitas content-box-depth p-6 lg:p-8 rounded-lg">
          <h2 className="text-center text-[20px] lg:text-[24px] leading-[1.3] font-semibold tracking-tight">
            Company address
          </h2>
          <p className="text-[16px] lg:text-[18px] mt-4 text-nitas-text leading-[1.8] lg:leading-[1.9]">
            Unitas d.o.o Teslic<br /> 
            Sime Lozanica bb<br />
            Bosnia and Herzegovina
          </p>
        </div>
      </div>
    </div>
  );
}
