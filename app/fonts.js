import { Bricolage_Grotesque, Lato } from "next/font/google";

export const bricolage = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-header",
});

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-body",
});
