import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Content Services by Katie Shevlin",
  description:
    "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
  keywords: [
    "freelance editor",
    "freelance writer",
    "SEO",
    "strategy",
    "content strategy",
    "editor",
    "writer",
  ],
  robots: "index, follow",
  author: "Katie Shevlin",
  language: "en",
  canonical: "https://www.katieshevlin.com",
  openGraph: {
    url: "https://www.katieshevlin.com",
    type: "website",
    title: "Content Services by Katie Shevlin",
    description:
      "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
    images: [
      {
        url: "https://www.katieshevlin.com/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "www.katieshevlin.com",
    url: "https://www.katieshevlin.com",
    title: "Content Services by Katie Shevlin",
    description:
      "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
    images: [
      {
        url: "https://www.katieshevlin.com/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Hero Image",
      },
    ],
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Content Services by Katie Shevlin",
    url: "https://www.katieshevlin.com",
    logo: "https://www.katieshevlin.com/logo.webp",
    sameAs: ["https://www.linkedin.com/in/katie-shevlin"],
    description:
      "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
  },
  icons: {
    icon: "/ks-logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
