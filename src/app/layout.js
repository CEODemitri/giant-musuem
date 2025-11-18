import "./globals.css";
import { cinzel, lato } from "./fonts";


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
        <nav className="absolute top-0 left-0 w-full flex items-end justify-between px-6 bg-[var(--background)] bg-opacity-70 z-10">
            <div>
                <p className="text-2xl font-bold">
                    Giant Museum
                </p>
                <ul className="flex space-x-6 text-[var(--foreground)]">
                    <li className="hover:underline cursor-pointer"><a href={"/"}>Home</a></li>
                    <li className="hover:underline cursor-pointer"><a href={"./exhibits"}>Exhibits</a></li>
                    <li className="hover:underline cursor-pointer">Blog</li>
                    <li className="hover:underline cursor-pointer">Contact</li>
                </ul>
            </div>
            <div>
                <button className="bg-neutral-400 px-4 py-1 rounded-md text-white tracking-wider uppercase">Tickets</button>
            </div>
        </nav>
        <div className="text-sm relative top-[6vh] left-[85vw] z-10 border border-b-neutral-300 w-fit p-2 rounded-md">
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
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${cinzel.variable} ${lato.variable} antialiased`}
      >
        <NavBar />
        <div className="text-sm md:text-base leading-snug">
            {children}
        </div>
      </body>
    </html>
  );
}
