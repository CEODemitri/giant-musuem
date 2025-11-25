import { Cinzel, Lato } from "next/font/google";

export const cinzel = Cinzel({
    weight: ["400", "600", "900"],
    subsets: ["latin"],
    variable: "--font-header",
});

export const lato = Lato({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
    variable: "--font-body",
});