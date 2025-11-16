import Card from "./card";
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

export function AboutGrid() {
    return (
        <section className="py-8 lg:py-12 bg-neutral-500/30">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Discover More
                    </h2>
                    <p className="text-lg text-neutral-700/70 max-w-2xl">
                        Explore our curated collections, upcoming exhibitions, and exclusive events.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
                    {/* Large featured card */}
                    <Card className="md:col-span-2 lg:row-span-2 overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                        <div className="relative h-full">
                            <img
                                src="/modern-art-gallery.png"
                                alt="Permanent Collection"
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-500/70 via-neutral-500/40 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-500/70 via-neutral-500/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h3 className="text-3xl font-bold  mb-2">
                                    Permanent Collection
                                </h3>
                                <p className="mb-4">
                                    Over 10,000 works spanning 5,000 years of human creativity
                                </p>
                                <button className="bg-white">
                                    Explore Collection
                                </button>
                            </div>
                        </div>
                    </Card>


                    {/* Visit info */}
                    <Card className="p-6 flex flex-col justify-between bg-white">
                        <div>
                            <Clock className="h-8 w-8 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Hours</h3>
                            <div className="space-y-1 text-sm text-neutral-600/90">
                                <p>Mon-Fri: 6am - 10pm</p>
                                <p>Sat-Sun: 9am - 11pm</p>
                                <p className="pt-2 text-xs">Closed Wednesdays</p>
                            </div>
                        </div>
                        <button className="mt-4 w-full border">
                            Plan Your Visit
                        </button>
                    </Card>

                    {/* Upcoming event */}
                    <Card className="p-6 flex flex-col justify-between">
                        <div>
                            <Calendar className="h-8 w-8 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Next Event</h3>
                            <p className="text-sm mb-2">March 14, 2026</p>
                            <p className="text-sm font-medium">
                                Artist Talk: Modern Interpretations
                            </p>
                        </div>
                        <button className="mt-4 w-full">
                            View All Events
                        </button>
                    </Card>

                    {/* Guided tours */}
                    <Card className="overflow-hidden group cursor-pointer">
                        <div className="relative h-full">
                            <img
                                src="/museum-tour-guide-with-visitors.jpg"
                                alt="Guided Tours"
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-neutral-500/70" />
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <Users className="h-6 w-6 mb-2" />
                                <h3 className="text-xl font-bold">
                                    Guided Tours
                                </h3>
                            </div>
                        </div>
                    </Card>

                    {/* Location */}
                    <Card className="overflow-hidden group cursor-pointer">
                        <div className="relative h-full">
                            <img
                                src="/museum-building-exterior-architecture.jpg"
                                alt="Location"
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-neutral-500/30" />
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <MapPin className="h-6 w-6 mb-2" />
                                <h3 className="text-xl font-bold">
                                    Find Us
                                </h3>
                            </div>
                        </div>
                    </Card>

                    {/* Membership */}
                    <Card className="md:col-span-2 p-8 bg-neutral-500/70 flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Become a Member</h3>
                            <p className="">
                                Unlimited access, exclusive previews, and special discounts
                            </p>
                        </div>
                        <button>
                            Join Now
                        </button>
                    </Card>

                    {/* Shop */}
                    <Card className="overflow-hidden group cursor-pointer">
                        <div className="relative h-full">
                            <img
                                src="/museum-gift-shop-art-books.jpg"
                                alt="Museum Shop"
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-500/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold">
                                    Museum Shop
                                </h3>
                            </div>
                        </div>
                    </Card>

                    {/* Education */}
                    <Card className="overflow-hidden group cursor-pointer">
                        <div className="relative h-full">
                            <img
                                src="/art-education-workshop-students.jpg"
                                alt="Education Programs"
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-500/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold">
                                    Education
                                </h3>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
