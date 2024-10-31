export default function Home() {
  return (
    <section className="relative h-screen flex flex-col">
      {/* Hero Image Section */}
      <div
        className="h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(/test-image.webp)`,
        }}
      ></div>

      {/* Profile Image Overlay */}
      <div className="absolute w-48 h-48 rounded-full border border-[#E8E3F4] top-[30vh] left-1/2 transform -translate-x-1/2 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/profile-image.webp"
          alt="Profile"
        />
      </div>

      {/* Content Section */}
      <div className="bg-white flex flex-col items-center justify-center pt-20 flex-grow">
        <div className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12 text-center">
          <p className="mt-3 text-[#10172A] text-4xl font-semibold tracking-tighter whitespace-nowrap">
            Katie Shevlin
          </p>
          <p className="mt-2.5 text-[#10172A] text-lg font-normal tracking-tighter">
            I'm <span className="font-semibold">Katie</span>, a writer and
            editor with a decade of experience{" "}
            <span className="block">
              producing high-quality content for print and online audiences.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Color Section */}
      <div className="bg-[#10172A] flex-grow">
        <div className="border-t border-[#E8E3F4]"></div>
        <div className="text-center space-x-4 mt-6">
          <button className="bg-[#fff] translate-y-1 text-[#10172A] text-xs font-bold py-2.5 px-6 rounded-full inline-flex items-center">
            &nbsp;&nbsp;<span>Get in touch</span>
          </button>
        </div>
      </div>
    </section>
  );
}
