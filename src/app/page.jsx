export default function Home() {
  return (
    <section className="relative flex flex-col h-full">
      {/* Hero Image Section */}
      <div
        className="h-[25vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(/hero-image.webp)`,
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
        <div className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12 text-center pb-5 pt-5">
          <p className="mt-2.5 pb-5 text-[#1f2128] text-2xl font-normal tracking-tighter">
            I'm <span className="font-semibold">Katie</span>, a writer and
            editor with a decade of experience{" "}
            <span className="block">producing high-quality content</span>
          </p>
        </div>
      </div>

      {/* Value Prop */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        {/* Card grid */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="group relative bg-white border border-[#8F9992] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu ">
            <div className="space-y-2 text-center">
              <h5 className="text-l font-semibold text-[#172754] transition-colors group-hover:font-bold ">
                Engagement
              </h5>
              <p className="text-[#172754] text-sm font-light transition-colors group-hover:text-gray-800">
                Drawing out relatable, compelling stories that captivate and
                connect with your audience
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white border border-[#8F9992] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu ">
            <div className="space-y-2 text-center">
              <h5 className="text-l font-semibold text-[#172754] transition-colors group-hover:font-bold ">
                Strategy
              </h5>
              <p className="text-[#172754] text-sm font-light transition-colors group-hover:text-gray-800">
                Aligning content with your marketing objectives for maximum
                impact
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white border border-[#8F9992] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu">
            <div className="space-y-2 text-center">
              <h5 className="text-l font-semibold text-[#172754] transition-colors group-hover:font-bold ">
                Reach
              </h5>
              <p className="text-[#172754] text-sm font-light transition-colors group-hover:text-gray-800">
                Using SEO techniques to drive organic traffic and get your
                content in front of the right people
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-white border border-[#8F9992] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu ">
            <div className="space-y-2 text-center">
              <h5 className="text-l font-semibold text-[#172754] transition-colors group-hover:font-bold ">
                Performance
              </h5>
              <p className="text-[#172754] text-sm font-light transition-colors group-hover:text-gray-800">
                Tracking analytics to continually optimise content and drive
                success
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col flex-grow items-center justify-center mt-8 mb-8 sm:mt-4 sm:mb-4">
        <button className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#172754] border border-[#172754] rounded-lg focus:outline-none">
          Get in touch
        </button>
      </div>
    </section>
  );
}
