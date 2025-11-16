let date = new Date();
let currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-text-neutral-500/10 border-t">
        <div className="max-w-7xl mx-auto px-6">
            {/* Newsletter Section */}
            <div className="py-24 border-b">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl text-balance">
                            Stay Connected
                        </h2>
                        <p className="text-lg text-neutral-500/70">
                            Subscribe to our newsletter for exclusive exhibition previews,
                            cultural insights, and special member events.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="h-14 bg-neutral-500/10"
                            />
                            <button size="lg" className="px-8 h-14">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-neutral-500/70">
                            Join over 250,000 art enthusiasts worldwide
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    <div className="space-y-6">
                        <h3 className="text-2xl">The Museum</h3>
                        <p className="text-neutral-500/70 leading-relaxed">
                            Celebrating art, culture, and history since I892. A beacon of
                            knowledge and inspiration.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium tracking-wide">Visit</h4>
                        <ul className="space-y-3 text-neutral-500/70">
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Plan Your Visit
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Hours & Admission
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Group Tours
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Accessibility
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium tracking-wide">Explore</h4>
                        <ul className="space-y-3 text-neutral-500/70">
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Current Exhibitions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Collections
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Virtual Tours
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Events Calendar
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium tracking-wide">Connect</h4>
                        <ul className="space-y-3 text-neutral-500/70">
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Membership
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Support Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-neutral-700/90 transition-colors">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Placeholder Areas */}
            <div className="py-12 border-t">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="aspect-video bg-neutral-500/70 rounded-lg" />
                    <div className="aspect-video bg-neutral-500/70 rounded-lg" />
                    <div className="aspect-video bg-neutral-500/70 rounded-lg" />
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-8 border-t">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-neutral-500/70">
                        © {currentYear} Giant Museum. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-neutral-500/70">
                        <a href="#" className="hover:text-neutral-600 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-neutral-600 transition-colors">
                            Terms of Use
                        </a>
                        <a href="#" className="hover:text-neutral-600 transition-colors">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}