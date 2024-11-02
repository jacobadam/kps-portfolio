export default function Home() {
  return (
    <section className="flex flex-col flex-grow h-full relative">
      {/* Hero Image Section */}
      <div
        className="h-[25vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(/test-image2.webp)`,
        }}
      ></div>

      {/* Profile Image Overlay */}
      <div className="absolute w-48 h-48 rounded-full border border-[#E8E3F4] top-[15vh] left-1/2 transform -translate-x-1/2 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/profile-image.webp"
          alt="Profile"
        />
      </div>

      {/* Content Section */}
      <div className="bg-white flex flex-col items-center justify-center mt-28 mb-4">
        <div className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12 text-center">
          <p className="mt-3 text-[#10172A] text-4xl font-semibold tracking-tighter whitespace-nowrap">
            Katie Shevlin
          </p>
          <p className="mt-2.5 pb-5 text-[#10172A] text-lg font-normal tracking-tighter">
            I'm <span className="font-semibold">Katie</span>, a writer and
            editor with a decade of experience{" "}
            <span className="block">producing high-quality content.</span>
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#10172A] border border-[#10172A] rounded-lg group bg-gradient-to-br from-[#10172A] to-[#10172A] group-hover:from-[#10172A] group-hover:to-[#10172A] hover:text-white focus:outline-none">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Get in touch
            </span>
          </button>
        </div>
      </div>

      <div className="flex-grow"></div>

      {/* Value Prop */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/4 flex">
              <div className="flex-grow pl-6">
                <h2 className="text-white title-font font-medium mb-2 text-center">
                  Engagement
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Drawing out relatable, compelling stories that captivate and
                  connect with your audience.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex">
              <div className="flex-grow pl-6">
                <h2 className="text-white title-font font-medium mb-2 text-center">
                  Strategy
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Aligning content with your marketing objectives for maximum
                  impact.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex">
              <div className="flex-grow pl-6">
                <h2 className="text-white title-font font-medium mb-2 text-center">
                  Reach
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Using SEO techniques to drive organic traffic and get your
                  content in front of the right people.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex">
              <div className="flex-grow pl-6">
                <h2 className="text-white title-font font-medium mb-2 text-center">
                  Performance
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Tracking analytics to continually optimise content and drive
                  success.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="/services"
              className="text-white text-center hover:underline"
            >
              Learn more about my services here.
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
