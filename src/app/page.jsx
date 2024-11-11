"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    const preloadImages = ["/hero-image.webp", "/profile-image.webp"];
    preloadImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/hero-image.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/profile-image.webp"
          as="image"
          type="image/webp"
        />
      </Head>

      <section className="relative flex flex-col h-full">
        {/* Hero Image Section */}
        <div className="relative w-full h-[25vh]">
          <Image
            src="/hero-image.webp"
            alt="Hero Image"
            fill="true"
            style={{ objectFit: "cover" }}
            priority
            srcSet="/hero-image-small.webp 500w, /hero-image-medium.webp 1000w, /hero-image-large.webp 2000w"
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          />
        </div>

        {/* Profile Image Overlay */}
        <div className="absolute w-48 h-48 rounded-full border border-stone-100 top-[15vh] left-1/2 transform -translate-x-1/2 overflow-hidden">
          <Image
            className="w-full h-full"
            src="/profile-image.webp"
            alt="Profile"
            style={{ objectFit: "cover" }}
            width={192}
            height={192}
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center justify-center mt-36 xxs:mt-28 lg:mt-28 short-lg:mt-32">
          <div className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12 text-center pb-5 pt-5">
            <p className="text-[#1f2128] text-2xl font-normal tracking-tighter">
              I'm <span className="font-semibold">Katie</span>, a writer and
              editor with a decade of experience
              <span className="block">producing high-quality content</span>
            </p>
          </div>
        </div>

        {/* Value Prop */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          {/* Card grid */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <Link href="/services">
              <div className="group relative bg-white border border-[#8F9992] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu block h-full">
                <div className="flex flex-col items-center h-full">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/handshake.svg"
                      alt="Handshake Icon"
                      className="w-6 h-6"
                    />
                    <h5 className="text-l font-semibold text-portfolio transition-colors group-hover:font-bold ">
                      Engagement
                    </h5>
                  </div>
                  <p className="text-portfolio text-sm font-light transition-colors group-hover:text-gray-800 mt-2 text-center">
                    Drawing out relatable, compelling stories that captivate and
                    connect with your audience
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services">
              <div className="group relative bg-white border border-[#8F9992] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu block h-full">
                <div className="flex flex-col items-center h-full">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/brain.svg"
                      alt="Brain Icon"
                      className="w-6 h-6"
                    />
                    <h5 className="text-l font-semibold text-portfolio transition-colors group-hover:font-bold ">
                      Strategy
                    </h5>
                  </div>
                  <p className="text-portfolio text-sm font-light transition-colors group-hover:text-gray-800 mt-2 text-center">
                    Aligning content with your marketing objectives for maximum
                    impact
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/services">
              <div className="group relative bg-white border border-[#8F9992] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu block h-full">
                <div className="flex flex-col items-center h-full">
                  <div className="flex items-center space-x-2">
                    <img src="/eye.svg" alt="Eye Icon" className="w-6 h-6" />
                    <h5 className="text-l font-semibold text-portfolio transition-colors group-hover:font-bold ">
                      Reach
                    </h5>
                  </div>
                  <p className="text-portfolio text-sm font-light transition-colors group-hover:text-gray-800 mt-2 text-center">
                    Using SEO techniques to drive organic traffic and get your
                    content in front of the right people
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/services">
              <div className="group relative bg-white border border-[#8F9992] transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-600/20 p-8 rounded-lg transform-gpu block h-full">
                <div className="flex flex-col items-center h-full">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/chart2.svg"
                      alt="Performance Icon"
                      className="w-6 h-6"
                    />
                    <h5 className="text-l font-semibold text-portfolio transition-colors group-hover:font-bold ">
                      Performance
                    </h5>
                  </div>
                  <p className="text-portfolio text-sm font-light transition-colors group-hover:text-gray-800 mt-2 text-center">
                    Tracking analytics to continually optimise content and drive
                    success
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col flex-grow items-center justify-center mt-8 mb-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-stone-100 bg-portfolio border rounded-lg focus:outline-none"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
