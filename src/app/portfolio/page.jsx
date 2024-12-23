import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="flex-grow">
      <header
        className="border-b border-gray-200"
        aria-labelledby="portfolio-header"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-center gap-4">
            <div>
              <h1
                id="portfolio-header"
                className="text-2xl font-bold text-portfolio sm:text-3xl text-center"
              >
                Portfolio
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Article 1 */}
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col">
            <header className="p-4 bg-gray-200 text-center">
              <h2 className="text-l font-bold text-portfolio">Technology</h2>
            </header>
            <div className="relative w-full h-56">
              <Image
                alt="A slice of pizza with ingredients"
                src="/perfect-pizza.webp"
                fill={true}
                style={{ objectFit: "cover" }}
                loading="eager"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col grow">
              <a
                href="https://www.toptal.com/product-managers/ecommerce/customer-research-tool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read more about Perfect Pizza: Using a Digital Customer Research Tool to Measure Taste"
              >
                <h3 className="text-lg font-medium text-portfolio">
                  Perfect Pizza: Using a Digital Customer Research Tool to
                  Measure Taste
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
                Customer research in the food sector is expensive and
                time-consuming. Here’s how one global pizza company used its own
                food-ordering app to get new levels of insight into its
                products—for free.
              </p>
              <a
                href="https://www.toptal.com/product-managers/ecommerce/customer-research-tool"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-portfolio"
                aria-label="Read more about this article"
              >
                Read more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          {/* Article 2 */}
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col">
            <header className="p-4 bg-gray-200 text-center">
              <h2 className="text-l font-bold text-portfolio">Lifestyle</h2>
            </header>
            <div className="relative w-full h-56">
              <Image
                alt="A cup of coffee on a table in a café"
                src="/vancouver-coffee.webp"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col grow">
              <a
                href="https://www.pursuitmedia.co/2020/11/30/7-must-visit-coffee-shops-in-vancouver-canada/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read more about 7 Must Visit Coffee Shops in Vancouver, Canada"
              >
                <h3 className="text-lg font-medium text-portfolio">
                  7 Must Visit Coffee Shops in Vancouver, Canada
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
                Whether it’s an essential part of your morning routine, a
                hump-day treat, or you simply need a break from your desk, we
                all love a coffee shop. Vancouver has an abundance of choice in
                this area–the city is home to a variety of big names, but
                there’s an awesome selection of small, independent spots too.
              </p>
              <a
                href="https://www.pursuitmedia.co/2020/11/30/7-must-visit-coffee-shops-in-vancouver-canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-portfolio"
                aria-label="Read more about this article"
              >
                Read more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          {/* Article 3 */}
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col">
            <header className="p-4 bg-gray-200 text-center">
              <h2 className="text-l font-bold text-portfolio">Finance</h2>
            </header>
            <div className="relative w-full h-56">
              <Image
                alt="A portrait of Vernon Hill II"
                src="/vernon-hill.webp"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col grow">
              <a
                href="/metrobank-interview.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read the interview with Vernon Hill II"
              >
                <h3 className="text-lg font-medium text-portfolio">
                  A Capital Idea
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
                Metro Bank is set to become the next big name in franchise
                business lending. Katie Shevlin meets founder and chairman
                Vernon Hill II
              </p>
              <a
                href="/metrobank-interview.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-portfolio"
                aria-label="Read more about this interview"
              >
                Read more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          {/* Article 4 */}
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col">
            <header className="p-4 bg-gray-200 text-center">
              <h2 className="text-l font-bold text-portfolio">Healthcare</h2>
            </header>
            <div className="relative w-full h-56">
              <Image
                alt="A medical image with artificial intelligence interface"
                src="/ai.webp"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col grow">
              <a
                href="/hp.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read more about AI and the NHS Long Term Plan"
              >
                <h3 className="text-lg font-medium text-portfolio">
                  AI and the NHS Long Term Plan
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
                Artificial intelligence (AI) is firmly embedded in modern life.
                It is in our homes in the form of personal digital assistants,
                helping detect fraud in our banking systems, identifying
                inappropriate content on our social media feeds. As prevalent as
                it may already feel, however, AI is still very much in its
                infancy.
              </p>
              <a
                href="/hp.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-portfolio"
                aria-label="Read more about this article"
              >
                Read more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          {/* Article 5 */}
          <article
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col"
            aria-labelledby="current-affairs"
          >
            <header className="p-4 bg-gray-200 text-center">
              <h2
                id="current-affairs"
                className="text-l font-bold text-portfolio"
              >
                Current Affairs
              </h2>
            </header>
            <div className="relative w-full h-56">
              <Image
                alt="Brexit image illustrating the editorial content"
                src="/brexit.webp"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col grow">
              <a
                href="https://www.nzherald.co.nz/bay-of-plenty-times/news/editorial-brexit-a-leap-into-unknown-and-here-be-monsters/KCEMVA7XN4F7WCJVDQBGHDUSCM/#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read the editorial about Brexit"
              >
                <h3 className="text-lg font-medium text-portfolio">
                  Editorial: Brexit a leap into unknown and 'here be monsters'
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
                "Should I stay or should I go?" asked The Clash in 1982. And, on
                June 23, UK citizens will be asking themselves just that as they
                walk into voting booths across Britain and make the
                all-important decision on the UK's EU membership.
              </p>
              <a
                href="https://www.nzherald.co.nz/bay-of-plenty-times/news/editorial-brexit-a-leap-into-unknown-and-here-be-monsters/KCEMVA7XN4F7WCJVDQBGHDUSCM/#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-portfolio"
                aria-label="Read more about Brexit"
              >
                Read more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          {/* Article 6 */}
          <article
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col"
            aria-labelledby="business"
          >
            <header className="p-4 bg-gray-200 text-center">
              <h2 id="business" className="text-l font-bold text-portfolio">
                Business
              </h2>
            </header>
            <div className="relative w-full h-56">
              <Image
                alt="Organizational change management and coaching in a business context"
                src="/coaching.webp"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col grow">
              <a
                href="https://www.toptal.com/project-managers/project-management-consultant/organizational-change-management-coaching"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn how to use coaching in organizational change management"
              >
                <h3 className="text-lg font-medium text-portfolio">
                  How to Use Coaching in Organizational Change Management
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
                Whether it’s introducing a new organizational structure, tool,
                or process, project managers are often agents of change. Help
                team members adapt and thrive with these four strategies.
              </p>
              <a
                href="https://www.toptal.com/project-managers/project-management-consultant/organizational-change-management-coaching"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-portfolio"
                aria-label="Read more about coaching in organizational change management"
              >
                Read more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          {/* Article 7 */}
          <article
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col"
            aria-labelledby="diversity-inclusion"
          >
            <header className="p-4 bg-gray-200 text-center">
              <h2
                id="diversity-inclusion"
                className="text-l font-bold text-portfolio"
              >
                Diversity and Inclusion
              </h2>
            </header>
            <div className="relative w-full h-56">
              <Image
                alt="Image representing gender imbalance in the workplace"
                src="/gender-imbalance.webp"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col grow">
              <a
                href="https://www.digitalhealth.net/2020/05/addressing-gender-imbalance-will-take-time-but-change-needs-to-start-now/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about addressing gender imbalance"
              >
                <h3 className="text-lg font-medium text-portfolio">
                  Addressing Gender Imbalance Will Take Time But Change Needs To
                  Start Now
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
                Gender imbalance in digital health has long been debated and
                Katie Shevlin from Inhealth Communications looks into why
                addressing the issue will take time but has to be driven now.
              </p>
              <a
                href="https://www.digitalhealth.net/2020/05/addressing-gender-imbalance-will-take-time-but-change-needs-to-start-now/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-portfolio"
                aria-label="Read more about addressing gender imbalance"
              >
                Read more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          {/* Article 8 */}
          <article
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col"
            aria-labelledby="trends"
          >
            <header className="p-4 bg-gray-200 text-center">
              <h2 id="trends" className="text-l font-bold text-portfolio">
                Trends
              </h2>
            </header>
            <div className="relative w-full h-56">
              <Image
                alt="Augmented reality marketing techniques"
                src="/ar-marketing.webp"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col grow">
              <a
                href="https://www.toptal.com/marketing/digital/augmented-reality-marketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read more about how top brands are using AR marketing techniques"
              >
                <h3 className="text-lg font-medium text-portfolio">
                  How Top Brands Are Using AR Marketing Techniques
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
                Augmented reality is redefining how brands engage customers, and
                top brands are offering exciting immersive experiences. Explore
                current applications and what the future of AR in marketing
                might hold.
              </p>
              <a
                href="https://www.toptal.com/marketing/digital/augmented-reality-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-portfolio"
                aria-label="Read more about augmented reality marketing"
              >
                Read more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
