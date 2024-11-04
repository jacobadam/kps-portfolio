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
      <div className="bg-white flex flex-col items-center justify-center mt-28">
        <div className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12 text-center">
          <p className="mt-3 text-[#10172A] text-4xl font-semibold tracking-tighter whitespace-nowrap">
            Katie Shevlin
          </p>
          <p className="mt-2.5 pb-5 text-[#10172A] text-lg font-normal tracking-tighter">
            I'm <span className="font-semibold">Katie</span>, a writer and
            editor with a decade of experience{" "}
            <span className="block">producing high-quality content.</span>
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-[#10172A] border border-[#10172A] rounded-lg group bg-gradient-to-br from-[#10172A] to-[#10172A] group-hover:from-[#10172A] group-hover:to-[#10172A] hover:text-white focus:outline-none">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Get in touch
            </span>
          </button>
        </div>
      </div>
      {/* Value Prop */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative z-10 pb-4">
        {/* Card grid */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="group relative bg-[#B0B0B0] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu shadow-2xl">
            <div className="space-y-2 text-center">
              <h5 className="text-xl font-semibold text-[#10172A] transition-colors group-hover:font-extrabold group-hover:underline">
                Engagement
              </h5>
              <p className="text-[#10172A] transition-colors group-hover:text-gray-800">
                Drawing out relatable, compelling stories that captivate and
                connect with your audience.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#B0B0B0] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu shadow-2xl">
            <div className="space-y-2 text-center">
              <h5 className="text-xl font-semibold text-[#10172A] transition-colors group-hover:font-extrabold group-hover:underline">
                Strategy
              </h5>
              <p className="text-[#10172A] transition-colors group-hover:text-gray-800">
                Aligning content with your marketing objectives for maximum
                impact.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[#B0B0B0] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu shadow-2xl">
            <div className="space-y-2 text-center">
              <h5 className="text-xl font-semibold text-[#10172A] transition-colors group-hover:font-extrabold group-hover:underline">
                Reach
              </h5>
              <p className="text-[#10172A] transition-colors group-hover:text-gray-800">
                Using SEO techniques to drive organic traffic and get your
                content in front of the right people.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-[#B0B0B0] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu shadow-2xl">
            <div className="space-y-2 text-center">
              <h5 className="text-xl font-semibold text-[#10172A] transition-colors group-hover:font-extrabold group-hover:underline">
                Performance
              </h5>
              <p className="text-[#10172A] transition-colors group-hover:text-gray-800">
                Tracking analytics to continually optimise content and drive
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
