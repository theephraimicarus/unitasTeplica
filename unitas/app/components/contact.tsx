export default function ContactPage() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-8 fade-in-up">
          <h1 className="text-[22px] lg:text-[28px] text-bluenitas font-semibold leading-tight">
            For any enquiries, please feel free to contact us by email or via telephone
          </h1>
        </div>

        <div className="flex justify-center">
          {/* Contact cards (centered) */}
          <div className="space-y-6 w-full lg:w-2/3">
            <div className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-md">
              <h2 className="text-lg font-semibold text-bluenitas">Email</h2>
              <a href="mailto:info@unitaspaper.com" className="mt-3 inline-block text-base text-nitas-text hover:text-bluenitas transition-colors">info@unitaspaper.com</a>
            </div>

            <div className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-md">
              <h2 className="text-lg font-semibold text-bluenitas">Mobile</h2>
              <a href="tel:+38766236726" className="mt-3 inline-block text-base text-nitas-text hover:text-bluenitas transition-colors">+387 66 236 726</a>
            </div>

            <div className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-md">
              <h2 className="text-lg font-semibold text-bluenitas">Company address</h2>
              <p className="mt-3 text-base text-nitas-text leading-relaxed">
                Unitas d.o.o Teslic<br />
                Sime Lozanica bb<br />
                Bosnia and Herzegovina
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
