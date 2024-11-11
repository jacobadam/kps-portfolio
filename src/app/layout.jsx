import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Content Services by Katie Shevlin",
  description:
    "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
  image: "https://www.katieshevlin.com/hero-image.webp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head>
          {/* Title tag */}
          <title>{metadata.title}</title>

          {/* Meta description */}
          <meta name="description" content={metadata.description} />

          {/* Open Graph (OG) tags */}
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content={metadata.image} />
          <meta property="og:url" content="https://www.katieshevlin.com" />
          <meta property="og:type" content="website" />

          {/* Twitter card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content={metadata.image} />
        </Head>
      </head>
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
