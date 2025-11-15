let date = new Date();
let currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="w-full py-8 bg-neutral-900 text-white text-center p-8 flex flex-col gap-8">
            {/* quick links */}
            <div className="flex gap-8 justify-between">
                <nav className="flex flex-col items-start text-left gap-4">
                    <h2 className="text-2xl">Quick Links</h2>
                    <ul>
                        <li><a href={"./exhibits"}>Exhibits</a></li>
                        <li><a href={"/"}>Blog</a></li>
                        <li><a href={"/"}>Contact</a></li>
                    </ul>
                </nav>

                <div>
                    <h1 className="text-6xl font-bold tracking-wider">Giant Museum</h1>
                </div>
            </div>

            <p className="text-sm">
                &copy; {currentYear} Giant Museum of Art & History. All rights reserved.
            </p>

        </footer>
    )
}