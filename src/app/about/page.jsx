export default function About() {
  return (
    <div id="about" className="relative overflow-hidden lg:mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-stone-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 lg:pr-16 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-stone-100 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-20 lg:pl-8 lg:pr-10 xl:mt-12">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-bold text-portfolio md:text-4xl">
                About me
              </h2>

              <p>
                I started out in the world of print journalism, working across a
                portfolio of monthly business magazines before moving to a daily
                regional newspaper. Later, I moved into public relations and
                spent several years developing content campaigns for companies
                in the healthtech sector, including Virgin and Hewlett Packard
                Enterprise. Most recently, I held a senior editor position at a
                global freelancing company, where I collaborated with subject
                matter experts from within the freelance network to produce
                thought leadership articles.
                <br />
                <br />
                Originally from the UK, I’ve been lucky enough to live in
                several countries, including New Zealand, Mexico, and -
                currently - Canada, where I’m based in a small mountain town
                called Nelson. In my free time I like to hike, ski, swim, and
                kayak, depending on the season!
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/about-me.webp"
          alt="Katie Shevlin"
        />
      </div>
    </div>
  );
}
