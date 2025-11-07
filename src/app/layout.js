import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Giant Museum",
  description:
    "Full Stack web Application using Next.js 13 and Tailwind CSS by ceoDemitri",
};

function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 bg-[var(--background)] bg-opacity-70 z-10">
      <div className="text-2xl font-bold text-[var(--foreground)]">
        Giant Museum
      </div>
      <ul className="flex space-x-6 text-[var(--foreground)]">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Exhibits</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
