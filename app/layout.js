import "./globals.css";
import { bricolage, lato } from "./fonts";

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
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-2 bg-[var(--foreground)] text-[var(--background)] backdrop-blur-md shadow-sm z-10">
        {/* Logo + Nav Links */}
        <div className="flex flex-col">
          <p className="text-3xl font-header tracking-wide font-semibold">
            <a href="/">Giant Museum</a>
          </p>

          <ul className="flex space-x-8 mt-2 text-sm uppercase tracking-wider">
            <li>
              <a
                href="/exhibits"
                className="hover:text-accent transition-colors duration-200"
              >
                Exhibits
              </a>
            </li>
            <li>
              <a
                href="/calendar"
                className="hover:text-accent transition-colors duration-200"
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-accent transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Tickets Button */}
        <div>
          <button className="bg-accent px-6 py-2 rounded-md text-white tracking-wider uppercase text-sm shadow-md hover:bg-accent/90 transition-colors duration-200">
            Tickets
          </button>
        </div>
      </nav>

      <div className="text-sm relative top-[7vh] left-[83vw] z-10 border border-b-neutral-300 w-fit p-2 rounded-md">
        {/* day info: temp, time, etc */}
        <p>London, Jotunheim</p>
        <p className="text-[var(--foreground)]">
          <span>72°F</span> | <span>Sunny</span> | <span>🌙</span>
        </p>
        <p>
          <span>{fullDate}</span> |{" "}
          <span>
            {currentTime} {currentHours >= 12 ? "PM" : "AM"}
          </span>
        </p>
      </div>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} bg-[var(--background)] text-[var(--foreground)] min-h-screen px-2 md:px-6 lg:px-12 pb-12`}
      >
        <NavBar />
        <div className="text-sm md:text-base leading-snug">{children}</div>
      </body>
    </html>
  );
}
