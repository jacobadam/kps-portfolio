export default function Services() {
  return (
    <section>
      <header className="border-b border-gray-200 bg-slate-200">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start justify-center gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-portfolio sm:text-3xl text-center">
                Services
              </h1>
              <p className="mt-1.5 text-sm text-gray-500 text-center">
                When it comes to achieving your business goals, every piece of
                content counts. I bring years of experience and a strategic
                approach to crafting high-quality, engaging content tailored to
                your specific needs. From writing and editing to SEO and content
                strategy, my services are designed to help you connect with your
                audience, elevate your brand, and drive lasting impact.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="py-4 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            <div className="service">
              <h2 className="text-2xl font-semibold text-portfolio mb-3 text-center">
                Writing
              </h2>
              <p className="text-portfolio leading-relaxed text-center">
                I specialise in creating thought leadership content that engages
                your audience and boosts your credibility. My experience spans a
                range of formats, from blogs and interviews to features and
                long-form reports. I write across business, lifestyle,
                technology, healthcare, current affairs, and more.
              </p>
            </div>

            <div className="service">
              <h2 className="text-2xl font-semibold text-portfolio mb-3 text-center">
                Editing & Proofreading
              </h2>
              <p className="text-portfolio leading-relaxed text-center">
                I provide meticulous editing and proofreading services to
                elevate the clarity and impact of your content. From refining
                structure and flow to polishing grammar and style, I ensure all
                copy reflects your unique brand voice, as well as being
                consistent, accurate, and error-free.
              </p>
            </div>

            <div className="service">
              <h2 className="text-2xl font-semibold text-portfolio mb-3 text-center">
                SEO
              </h2>
              <p className="text-portfolio leading-relaxed text-center">
                In an increasingly competitive digital landscape, it’s vital to
                optimise your content to reach the right audience. By conducting
                rigorous keyword research and implementing SEO best practices, I
                can increase your organic traffic without sacrificing quality or
                readability.
              </p>
            </div>

            <div className="service">
              <h2 className="text-2xl font-semibold text-portfolio mb-3 text-center">
                Content Strategy
              </h2>
              <p className="text-portfolio leading-relaxed text-center">
                With an emphasis on creating a cohesive brand narrative across
                channels, I develop strategic plans and guide content production
                to drive engagement, build brand loyalty, and maximize impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
