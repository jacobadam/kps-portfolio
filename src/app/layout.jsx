import "./globals.css";
import NavBar from "../app/components/NavBar";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "Katie Shelin Profile",
  description: "",
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
