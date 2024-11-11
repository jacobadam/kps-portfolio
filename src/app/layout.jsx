import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Content Services by Katie Shevlin",
  description:
    "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
  openGraph: {
    title: "Content Services by Katie Shevlin",
    description:
      "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Hero Image",
      },
    ],
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
