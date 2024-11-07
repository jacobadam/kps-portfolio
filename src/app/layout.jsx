import "./globals.css";
import NavBar from "../app/components/NavBar";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "Katie Shelin Portfolio",
  description:
    "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
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
