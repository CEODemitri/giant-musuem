export default function Exhibits() {
    return (
        <>
            <main className="bg-background text-neutral-900 min-h-screen">

                {/* -------------------- BRUTALIST HEADER -------------------- */}
                <header className=" border-b-8 border-black px-6 md:px-12 lg:px-24 py-16 text-center text-foreground">
                    <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-4 mt-20">
                        Exhibits
                    </h1>
                    <p className="font-mono text-sm md:text-base leading-snug">
                        Bold ideas. Iconic art. Explore the collections shaping our world.
                    </p>
                </header>

                {/* -------------------- MODERN EXHIBITS GRID -------------------- */}
                <section className="px-6 md:px-12 lg:px-24 py-16">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-neutral-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
                            >
                                {/* Exhibit Image Placeholder */}
                                <div className="bg-gray-200 h-48 rounded-md mb-4 flex items-center justify-center text-gray-500">
                                    Image {i + 1}
                                </div>

                                {/* Exhibit Info */}
                                <div className="space-y-2">
                                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
                                        Exhibit {i + 1}: Title Here
                                    </h3>
                                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                                        A brief description of the exhibit, highlighting its significance,
                                        history, and what visitors can expect to experience.
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <button className="mt-4 bg-neutral-900 text-white font-medium rounded-lg px-4 py-2 hover:bg-neutral-800 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

        </>
    )
}