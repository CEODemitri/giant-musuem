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
    "Full Stack web Application using Next.js 14 and Tailwind CSS by ceoDemitri",
};

let date = new Date();
let currentDayOfMonth = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
let fullDate = `${currentMonth}/${currentDayOfMonth}/${currentYear}`;

let currentHours = date.getHours();
let currentMinutes = date.getMinutes();
let currentTime = `${currentHours}:${currentMinutes}`;

function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-start justify-between p-6 bg-[var(--background)] bg-opacity-70 z-10">
      <div>
        <p className="text-2xl font-bold text-[var(--foreground)]">
          Giant Museum
        </p>
        <ul className="flex space-x-6 text-[var(--foreground)]">
          <li className="hover:underline cursor-pointer"><a href={"/"}>Home</a></li>
          <li className="hover:underline cursor-pointer"><a href={"./exhibits"}>Exhibits</a></li>
          <li className="hover:underline cursor-pointer">Blog</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className=" text-sm">
        {/* day info: temp, time, etc */}
        <p>London, Jotunheim</p>
        <p className="text-[var(--foreground)]">
          <span>72°F</span> |  <span>Sunny</span> |{" "}
          <span>🌙</span>
        </p>
        <p>
          <span>{fullDate}</span> | <span>{currentTime} {currentHours >= 12 ? 'PM' : 'AM'}</span>
        </p>
      </div>
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
        <div className="text-sm md:text-base leading-snug">
            {children}
        </div>
      </body>
    </html>
  );
}
