export default function Contact(props) {
    return (
        <>
            <header className=" border-b-8 border-black px-6 md:px-12 lg:px-24 py-16 text-center text-foreground">
                <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-4 mt-20">
                    Speak Your Mind
                </h1>
                <p className="font-mono text-sm md:text-base leading-snug">
                    Why hold back? We accept all opinions and will respond in as time allows. Thank you for your support!
                </p>
            </header>

        {/*  main  */}
            <form action="/contact" method="POST">
                <p className="font-mono text-sm md:text-base leading-snug">
                    <label htmlFor="email" className="">Email: </label>
                    <input type="email" name="email" id="email"/>
                </p>
                <p className="font-mono text-sm md:text-base leading-snug">
                    <label htmlFor="email">Message: </label>
                    <textarea name="email" id="email" rows="5" cols="30"></textarea>
                </p>
                <button className="hover:bg-accentlight px-8 py-2 bg-accent rounded-md">Submit</button>
            </form>

            {/*  aside  */}

            {/*  footer  */}
        </>
    )
}